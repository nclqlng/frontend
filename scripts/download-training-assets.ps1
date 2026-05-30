$ErrorActionPreference = "Stop"
$root = Join-Path $PSScriptRoot "..\public\training-assets"

function Ensure-Dir($path) {
  if (-not (Test-Path $path)) { New-Item -ItemType Directory -Path $path -Force | Out-Null }
}

function Download-DriveFile($fileId, $outPath) {
  $dir = Split-Path $outPath -Parent
  Ensure-Dir $dir
  if ((Test-Path $outPath) -and (Get-Item $outPath).Length -gt 1024) {
    Write-Host "Skipping existing $outPath"
    return
  }
  $url = "https://drive.google.com/uc?export=download&id=$fileId"
  Write-Host "Downloading $fileId -> $outPath"
  try {
    Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
    $size = (Get-Item $outPath).Length
    if ($size -lt 1024) {
      throw "Download too small ($size bytes) for $outPath - file may require auth."
    }
  } catch {
    Write-Warning "Failed to download $outPath : $_"
  }
}

function Download-Url($url, $outPath) {
  $dir = Split-Path $outPath -Parent
  Ensure-Dir $dir
  if ((Test-Path $outPath) -and (Get-Item $outPath).Length -gt 1024) {
    Write-Host "Skipping existing $outPath"
    return
  }
  Write-Host "Downloading $url -> $outPath"
  $headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    "Referer" = "https://sites.google.com/"
  }
  try {
    Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing -Headers $headers
  } catch {
    Write-Warning "Failed to download $outPath : $_"
  }
}

Ensure-Dir $root

# AHO
Download-DriveFile "1inJabNwJITIqW5OJyD0MtBQAaEkNumrV" (Join-Path $root "aho\advisor-home-office-guide.pdf")
Download-DriveFile "1jwb6zN9GeKMAu9Ahq_jlcGRQJM0G1EWW" (Join-Path $root "aho\aho-password-enhancements.pdf")
Download-DriveFile "1aI29uFcNLFZSHlatYyoTDTK8VgJayrpT" (Join-Path $root "aho\app-form-enhancements.pdf")

# Remote Policy Servicing
Download-DriveFile "19DmXxiHupvgldaI4IVVojSsICjzhTEji" (Join-Path $root "policy-servicing\comprehensive-guide-remote-servicing.pdf")
Download-DriveFile "1PnJmyqfh3KfJn4iBIuZzFbeLPeb0uk7K" (Join-Path $root "policy-servicing\esig-guide.pdf")
Download-DriveFile "1AHycbFuebHlDyaAluNxj_MF-KdZpYdXV" (Join-Path $root "policy-servicing\client-confirmation.jpg")
Download-DriveFile "1Tp5I10b26YC7wi7r3K6ajSn5trP2bhuq" (Join-Path $root "policy-servicing\servicing-forms.pdf")

# R.O.M.E
Download-DriveFile "1UKxTBsmhDlEzeVQzmYHQ-4d6vINXWlsX" (Join-Path $root "rome\rome-summary.png")
Download-DriveFile "1rkYSKEFAa7ulBrvloOrFZ3GqdC0-btDW" (Join-Path $root "rome\rome-april-2021.pdf")

# Payment Channel images
$paymentImages = @{
  "bills-payment-overview.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUAPCsXkQEhU62SGxMmXRsQtb0KUK0ju8w2onTn5SQ-T7i0foiMEYh0pSU1vPpuUpMUlO846lyH4s0yRGtAxxwTii7UcapiAY2trfpI54VR-VPGKAq2naCZdG8D-7hrCxcJx7k-l-leXwOox0ZHkbnr4dDYm41oN_Js0yxyn-VZnbYq9k0_wsSce3Bk=w1280"
  "payment-channels.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUBO3A29i_4SnpI_zW_eehYA-eKCzTYubTqnrZnodhKFjYqvF_6Pz4wTyyojDW8fa982T-K3dPzc3sqZSZhMRgh7mOKld8En0swK0uAyzz-oMCSphzTCQ_jqj_C1jpdm8c78gJ92RJcF8XBkYbC6o2FEJgqT1B_znuGWoJkvFqC9kHrFtMIhrrGT3RX0rwNvwvPmgaimWZAgzuKPLRA9E0Pg43AKBVC32c9R=w1280"
  "bdo.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUACYeWdffEXvPUZcTMMHQuHmoLi5dq8P3o6t21e-tUkkb-YJUXdVyaEQQvq-wQpleHX23MMPOiIWlJmwoAjhuoH4KyX0uR13sO-DVpdpUXmQ-Ralxe0EibRA3QdZESB1gtYhb5D13HVpqCmbMsjtwnMKnnQ-GqaOddV2u3qITsCqsWt9c7GyT_sSmPVmuz__sgQQ3MpP7pwf2gV7SgN19Q7LjnzByExqvwf=w1280"
  "bpi.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUB10BTnIlCGSIdrUn6RA-BIqBifG6Y_yoILvL2-_gbfJYCL5X5m-VvkaECuk59-rOW0ojAemp9KEWtRIJShDzCSfYuLvWTzbsbq-mf2M_cFyhX3UbeFOlPG_lRK1h8SXMNHl3E11APIZAZ8RPPE9sm0FNXCPOKyLOTMpNFMu3XuCX5FIhyk0sL7QkMJOxD_Uk--Q9NK8uzX6nrkqzSmIJ0ijb3jV-Sm8z-R=w1280"
  "metrobank.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUAIoHik0ATgpZqkBlL98Eaf69qIKm04PbgcneEsqtPHwskKL0vP-_RJCb4z2g8B_WvI8nX__u3TIfZjnqdiQgr7_QqQDruY5csSet2E_bk3OGEKaubuKrIdChSjnXKo_ZV8RDjal2dcoHLreLiJG0kvjG3d5aDBEpUgo4k7qg8lMkilKH96prX42dL3qvJKAbga5HdU3a5-JMfSbgoNS_SAwkoUIv2THcjwu5s=w1280"
  "security-bank.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUB5mPCl_yaiWxABBJ9H0dMhSl_72W29H-wRhwpIznJfV6NuZqGQEZKooMuXPeWByTbC8vwe0LCQLbYD0rystBnyG_cSnfDgHO7VdDB3ev-9UtGtcvINb9Qf6AGIqDfJEIw5OYBRVg9Z0wg_UHp6_3FLA-lPth4w0xzPLhqtSl3nHBliJheYvVuCsIuON0iGqjj7i5k-tdQGyXPaWDCYrxkXVuFrzJMHr6btJPM=w1280"
  "maya.jpg" = "https://lh3.googleusercontent.com/sitesv/AA5AbUBW4a6FWRrDVZ-ueAu8XI5f3rDabD_QjjuvgPYUG5P-b9WhVgZsrqMG4xojunRcgwAqvxwsuOEX6eAYp5pRi3knzEYF5GUHQ5jpFfIL1n3YaroT8yBxrbRxpavzHpa_eAzyEVRHAIDaJGDDuU0oZhA0jRILrG_pRlYiPNF0_Qr_cZOaoUwa7QH6xhrvUdzsnmUx0RqVorI-6KZ-WDEcabgRB_Y-N-vQ-KDNStY=w1280"
}

foreach ($entry in $paymentImages.GetEnumerator()) {
  Download-Url $entry.Value (Join-Path $root "payment-channel\$($entry.Key)")
}

# Product Guide
Download-DriveFile "140L5zgtIbD3BLkQ6nUmRcaJquHHTQlt3" (Join-Path $root "product-guide\sun-life-product-showcase.pdf")
Download-DriveFile "1yjsMrJNJjj5ruo1tsDZSsZcLkY5BoKRF" (Join-Path $root "product-guide\traditional-product.pdf")
Download-DriveFile "178Is7jA72f2BsMkFtoABVMNFM34vo1tg" (Join-Path $root "product-guide\supplementary-benefit.pdf")
Download-DriveFile "1iJ9ttRsWfbZU5YBy3ivvWV98qbl5jfgo" (Join-Path $root "product-guide\vul-product.pdf")
Download-DriveFile "1ANcsKpunoK8I5EjNt7096PYvKLmEq24p" (Join-Path $root "product-guide\vul-funds.pdf")

# Competitive Analysis
Download-DriveFile "1qjDgvrDBtZz7keKVncpsB2-RCyQmxGrE" (Join-Path $root "competitive-analysis\health-vs-joint-life.pdf")
Download-DriveFile "13lVWHSm7vQcCzql3bCWpqZJ0yF0ZBUVW" (Join-Path $root "competitive-analysis\sun-fit-and-well.pdf")
Download-DriveFile "1yF7DwAQpO3l_7RIKiVTtUkmRMZnNmASM" (Join-Path $root "competitive-analysis\sun-fit-and-well-2019.pdf")

# Medical Guidelines
Download-DriveFile "1wJ8tW2rz2iLiFzHJblRmUQ1g6lSRFjFk" (Join-Path $root "medical-guidelines\cancer-conditions-guide.pdf")
Download-DriveFile "1O4Hblu1GLNz7DaLWniDXgCMuQ3zFgIST" (Join-Path $root "medical-guidelines\medical-conditions-ci-guide.pdf")
Download-DriveFile "15fWt-TQ9bmM-bWTSASSxxjppbBUNdI1K" (Join-Path $root "medical-guidelines\foreign-residence-guidelines.pdf")
Download-DriveFile "10sZyQ6i3VJq9y6EILMBeQvrz9CqSBT2k" (Join-Path $root "medical-guidelines\occupational-guidelines.pdf")

# Submit App Online
Download-DriveFile "1OYkqkS-OF_d-DBgE0puk1g2-ZwKptiNY" (Join-Path $root "submit-app\sunsmart-eapp.pdf")
Download-DriveFile "1oV_H9rRsFANE9rNYTBtc8wqOK-W2VzEb" (Join-Path $root "submit-app\bcos-user-guide.pdf")
Download-DriveFile "17a02wQJENKGx69W2Qaq090ffz3qBp90o" (Join-Path $root "submit-app\compatible-devices.jpg")
Download-DriveFile "1wW8DjIocYjUqe7k4J6hqbu3txK3syaRF" (Join-Path $root "submit-app\downloading-troubleshooting.pdf")
Download-DriveFile "1tB5PQ0qeXrorUKLJ51d5EqVi0ALd_sWf" (Join-Path $root "submit-app\primary-sync-guide.pdf")
Download-DriveFile "1XeuZgRxzYQ5ZS1UkRKHg7vbmsNMDETs6" (Join-Path $root "submit-app\eapp-review-extra-rating.pdf")
Download-DriveFile "1Wqo76WERbMCoCEvq0JYwj-O4MBb8kK35" (Join-Path $root "submit-app\csa-guide.pdf")
Download-DriveFile "1iqSPZdIqZTnG5Y5hKRECCN5qHGlXV4da" (Join-Path $root "submit-app\proposal-guide.pdf")
Download-DriveFile "1eu7JI7pb5TR6vNBPH9Pt7xgOnNlnO68n" (Join-Path $root "submit-app\basic-eapp-fields.pdf")
Download-DriveFile "1ILmg5PZ9n6lJHm2Oilbe3zmkruquMuUs" (Join-Path $root "submit-app\questionnaire-guide.pdf")
Download-DriveFile "1Y9ZM77ZqWUzPR1rkg7qlIbtcVAdHgDGe" (Join-Path $root "submit-app\bcos-3-steps.gif")
Download-DriveFile "1VB5Bz5ua1Yy2uA0gMNxlLWi3nGjBGpxn" (Join-Path $root "submit-app\bcos-client-guide.png")
Download-DriveFile "14ckJdLXGK8C8FtQXp4MxZF6Tf5ciKBMN" (Join-Path $root "submit-app\bcos-troubleshooting.pdf")

# Policy Delivery via Courier
Download-DriveFile "1L_bhWtCRkg0oLIocz2fuwkf_EmG2W26J" (Join-Path $root "courier\courier-delivery-guide.pdf")
Download-DriveFile "1blB_zZgjuWZ9X2Vedd6zqF1wFG4SfjXL" (Join-Path $root "courier\epolicy-contracts.pdf")
Download-DriveFile "15LSaG2uC28cW1YCZCYKvfRo5iuBRTk8l" (Join-Path $root "courier\client-consent-courier.pdf")
Download-DriveFile "1tSfAdba2fE6D1jq9IfeYZvVsvWX86SrT" (Join-Path $root "courier\my-sun-life-client-portal.pdf")

# SLAMCI
# Google Sites image URLs often 403; use Drive thumbnail of welcome kit instead
Download-Url "https://drive.google.com/thumbnail?id=1V4TfcdFLEAqowgRhYkAshLRu_4itR-QK&sz=w1280" (Join-Path $root "slamci\slamci-overview.jpg")
# Generic MF (18XmsLbOhlfNfeGxRe53KSJoc7i4OLmDZ) returns 404 — file no longer public on Drive
Download-DriveFile "1q6Lv8_n26pyHRMk0kl6RDsUYLELIpVlT" (Join-Path $root "slamci\welcome-kit-2021.pdf")
Download-DriveFile "18PwXMIpSLlsxMB6By55zRhAnIx2BM1ce" (Join-Path $root "slamci\digital-channels-one-pager.pdf")
Download-DriveFile "1IxCjnoBhEcRr8V-dm37fT2pSlK4r7oKw" (Join-Path $root "slamci\bills-payment-guide.pdf")

# Underwriting Essentials
Download-DriveFile "1xBr8g0qRZ9plIriuSsuwAPC2jY0aIIRy" (Join-Path $root "underwriting\uw-covid-pandemic.pdf")
Download-DriveFile "1gFNkSs0dLrP-HRK5sLqdCmcZEHw-92U5" (Join-Path $root "underwriting\non-med-special-test-limits.pdf")
Download-DriveFile "1F3ZxIxDujeex95McuFbM3MlNzgbkh2MD" (Join-Path $root "underwriting\uw-manual-health-updates.pdf")
Download-DriveFile "1oPAwdVzqQVqhJ0ajuPMXaCTEHDGrXT3V" (Join-Path $root "underwriting\module-1-nba-processing.pptx")
Download-DriveFile "1M8Oswb2-bkTGkue9-zSELhRfjgBSpJpI" (Join-Path $root "underwriting\module-2-nb-guidelines.pdf")
Download-DriveFile "1WvDg-vLh7fcY8NMlbRXcuUMf6jidOlZd" (Join-Path $root "underwriting\module-3-medical-uwr.pdf")
Download-DriveFile "1fU3XFIT98PoJaN4QZ8lbZT2510Jx3rA_" (Join-Path $root "underwriting\module-5-large-case.pdf")

# Claims Essentials
Download-DriveFile "1hYTgnkcab4w_BlCPD6bqAr5GA3jrzZqd" (Join-Path $root "claims\claims-learning-session.pdf")
Download-DriveFile "1aJT6KQTsoDRIBewUV2RzL1WC0Go9vLSp" (Join-Path $root "claims\new-claim-requirements.pdf")
Download-DriveFile "1uUXHp_CV4fYc5JwZ5Ux4yuSFmLKmD99Z" (Join-Path $root "claims\policy-riders-provisions.pptx")

Write-Host "All training assets downloaded."
