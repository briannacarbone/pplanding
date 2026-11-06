"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { PawPrint, X } from "lucide-react";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../lib/booking";
import { SITE } from "../lib/site";

export function BookNowModal({ ctaHref, className = "", variant = "full", label = "Book Now", icon = "arrow", track }: { ctaHref: string; className?: string; variant?: "full" | "grooming"; label?: string; icon?: "arrow" | "paw" | "none"; track?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} data-track={track} className={className}>
        {label}
        {icon === "none" ? null : icon === "paw" ? <PawPrint className="h-4 w-4" aria-hidden /> : <span className="pp-cta-arrow" aria-hidden />}
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          role="dialog"
          aria-modal="true"
          aria-label="Book Now"
        >
          <div className="relative w-full max-w-lg rounded-lg bg-[var(--pp-cream)] p-8 shadow-2xl sm:p-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center text-[var(--pp-ink)]/60 transition hover:text-[var(--pp-ink)] sm:top-3 sm:right-3"
            >
              <X className="h-5 w-5" />
            </button>

            <h2
              className="mb-8 text-center text-3xl text-[var(--pp-ink)]"
              style={{ fontFamily: "var(--font-display), serif", fontWeight: 500 }}
            >
              Book Now
            </h2>

            {variant === "full" ? (
              <div className="space-y-6">
                <Link href="/new-client/" className="pp-cta pp-cta-sm w-full justify-center text-center">
                  Get Started
                </Link>
                <div className="border-t border-[var(--pp-sand)] pt-6 text-center">
                  <p className="text-sm text-[var(--pp-ink)]">For Immediate Assistance Call</p>
                  <a href={SITE.phone.href} className="mt-1 inline-flex min-h-11 items-center text-xl font-bold text-[var(--pp-main-deep)] underline underline-offset-4">
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <a href={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} target="_blank" rel="noopener" className="pp-cta pp-cta-sm w-full justify-center text-center">
                  New Client
                </a>
                <a href="tel:+12023186526" className="pp-cta-sm w-full text-center bg-slate-700 text-white border border-slate-700 hover:bg-slate-800 transition">
                  Call/Text (202) 318-6526
                </a>
              </div>
            )}

            {variant === "grooming" && (
              <div className="mt-8 border-t border-[var(--pp-sand)] pt-6 text-center">
                <p className="mb-4 text-sm text-[var(--pp-ink)]/70">
                  Not ready to book, but want to learn more? Click the link below.
                </p>
                <a href={ctaHref} className="pp-cta pp-cta-sm inline-flex">
                  Get Started
                  <span className="pp-cta-arrow" aria-hidden />
                </a>
              </div>
            )}
          </div>
        </div>, document.body
      )}
    </>
  );
}
