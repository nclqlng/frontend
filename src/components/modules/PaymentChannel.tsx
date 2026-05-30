"use client";

import { useRef } from "react";
import { CreditCard } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ModuleIntroText, { moduleCardShell } from "./ModuleIntroText";
import { TRAINING_ASSETS } from "@/lib/training-assets";

const bankChannels = [
  { name: "BDO", src: TRAINING_ASSETS.paymentChannel.bdo },
  { name: "BPI", src: TRAINING_ASSETS.paymentChannel.bpi },
  { name: "Metrobank", src: TRAINING_ASSETS.paymentChannel.metrobank },
  { name: "Security Bank", src: TRAINING_ASSETS.paymentChannel.securityBank },
  { name: "Maya", src: TRAINING_ASSETS.paymentChannel.maya },
];

export default function PaymentChannel() {
  const channelsRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useTheme();

  return (
    <div className="space-y-10">
      <ModuleIntroText>
        Bills Payment is pretty much the same as Bank Transfer/Deposit, except
        it is more secure and easily tracked. Not only does it generate a unique
        transaction reference number, it is also posted electronically to Sun
        Life&apos;s systems.
      </ModuleIntroText>

      <section className="space-y-4">
        <div className={`overflow-hidden rounded-2xl border ${moduleCardShell(darkMode)}`}>
          <img
            src={TRAINING_ASSETS.paymentChannel.overview}
            alt="Bills payment overview"
            className="w-full object-contain"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() =>
              channelsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black transition hover:scale-[1.03] hover:bg-yellow-300"
          >
            <CreditCard size={16} />
            View Payment Channels
          </button>
        </div>
      </section>

      <section ref={channelsRef} className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
          Available Payment Channels
        </p>
        <div className={`overflow-hidden rounded-2xl border p-4 ${moduleCardShell(darkMode)}`}>
          <img
            src={TRAINING_ASSETS.paymentChannel.channels}
            alt="Payment channels overview"
            className="mx-auto h-auto w-full max-w-full object-contain"
          />
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
          Partner Banks &amp; Channels
        </p>
        <div className="grid gap-6">
          {bankChannels.map((bank) => (
            <div
              key={bank.name}
              className={`overflow-hidden rounded-2xl border ${moduleCardShell(darkMode)}`}
            >
              <div className={`border-b px-4 py-3 ${darkMode ? "border-white/10" : "border-slate-200"}`}>
                <p className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{bank.name}</p>
              </div>
              <div className="p-4">
                <img
                  src={bank.src}
                  alt={`${bank.name} payment channel guide`}
                  className="mx-auto h-auto w-full max-w-full object-contain"
                />
              </div>
              <div className={`border-t px-4 py-3 text-right ${darkMode ? "border-white/10" : "border-slate-200"}`}>
                <a
                  href={bank.src}
                  download={`${bank.name.toLowerCase().replace(/\s+/g, "-")}-payment-channel.jpg`}
                  className="text-xs font-semibold text-yellow-500 hover:text-yellow-400"
                >
                  Download image
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
