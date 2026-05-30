"use client";

import { Mail, Package, Smartphone } from "lucide-react";
import LocalResourceCard from "./LocalResourceCard";
import ModuleIntroText from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

export default function PolicyDeliveryCourier() {
  return (
    <div className="space-y-8">
      <ModuleIntroText variant="boxed">
        Master the bRIGHT ways of policy delivery and learn more about personal
        and courier delivery of paper contracts.
      </ModuleIntroText>

      <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 px-5 py-4">
        <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-yellow-500">Reminder:</span> The
          signed P.A.R. forms must be sent to{" "}
          <a
            href="mailto:Phil_Scanning@sunlife.com"
            className="font-medium text-yellow-500 underline-offset-2 hover:underline"
          >
            Phil_Scanning@sunlife.com
          </a>
        </p>
      </div>

      <LocalResourceCard
        item={{
          title: "bRIGHT Advisory — Courier Delivery of Policy Contracts",
          src: TRAINING_ASSETS.courier.courierDelivery,
          icon: Package,
          mediaType: "pdf",
        }}
      />

      <LocalResourceCard
        item={{
          title: "bRIGHT Ways — Electronic Policy (ePolicy) Contracts",
          src: TRAINING_ASSETS.courier.epolicyContracts,
          icon: Package,
          mediaType: "pdf",
        }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <LocalResourceCard
          compact
          item={{
            title: "Client Consent for Use of Courier",
            src: TRAINING_ASSETS.courier.clientConsent,
            icon: Mail,
            mediaType: "pdf",
          }}
        />
        <LocalResourceCard
          compact
          item={{
            title: "My Sun Life Client Portal Quick Start Guide — ePolicy",
            description: "September 2021 edition",
            src: TRAINING_ASSETS.courier.clientPortal,
            icon: Smartphone,
            mediaType: "pdf",
          }}
        />
      </div>
    </div>
  );
}
