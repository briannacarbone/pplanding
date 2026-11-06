"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight, Phone, PawPrint, Scissors } from "lucide-react";
import { desktopNavItems } from "../lib/nav";
import { SITE } from "../lib/site";
import { BookNowModal } from "./book-now-modal";

export function MobileMenu({ ctaHref }: { ctaHref: string }) {
  const [open, setOpen] = useState(false);
  const [resortOpen, setResortOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const resort = desktopNavItems.find(item => item.label === "Pet Resort");
  const explore = desktopNavItems.find(item => item.label === "Explore");

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.mobileMenuOpen = "true";
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    function onKey(event: KeyboardEvent) {
      // The booking dialog handles its own keyboard interaction.
      if (!panel.current?.contains(document.activeElement)) return;
      if (document.activeElement?.closest('[aria-label="Book Now"]')) return;
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const items = Array.from(panel.current.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]')).filter(item => item.getClientRects().length);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.mobileMenuOpen;
      document.removeEventListener("keydown", onKey);
      trigger.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label="Open menu" className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden">
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <div ref={panel} className="fixed inset-0 z-40 overflow-y-auto bg-[var(--pp-night)] text-white lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center justify-between border-b border-white/15 py-5">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-semibold"><PawPrint className="h-6 w-6 text-[var(--pp-mint)]" aria-hidden />Planet Pooch</Link>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"><X className="h-5 w-5" /></button>
            </div>
            <nav aria-label="Mobile navigation" className="py-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Find your care</p>
              <Link href="/mobile-grooming/" onClick={() => setOpen(false)} className="flex min-h-24 items-center gap-4 rounded-2xl bg-[var(--pp-mint)] p-5 text-[var(--pp-night)]">
                <Scissors className="h-6 w-6 shrink-0" aria-hidden />
                <span className="flex-1"><span className="block font-display text-2xl">Mobile Grooming</span><span className="mt-1 block text-sm opacity-75">Expert care, right at your door.</span></span>
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
              </Link>
              <div className="mt-3 overflow-hidden rounded-2xl border border-white/20 bg-white/5">
                <button type="button" onClick={() => setResortOpen(!resortOpen)} aria-expanded={resortOpen} aria-controls="mobile-resort-links" className="flex min-h-24 w-full items-center gap-4 p-5 text-left">
                  <PawPrint className="h-6 w-6 shrink-0 text-[var(--pp-mint)]" aria-hidden />
                  <span className="flex-1"><span className="block font-display text-2xl">Pet Resort</span><span className="mt-1 block text-sm text-white/65">Play, stay, learn & unwind.</span></span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${resortOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {resortOpen && <div id="mobile-resort-links" className="border-t border-white/10 px-5 py-2">{resort && "items" in resort && resort.items.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center justify-between gap-3 text-sm text-white/85 hover:text-[var(--pp-mint)]">{item.label}<ArrowUpRight className="h-4 w-4 text-white/40" aria-hidden /></Link>)}</div>}
              </div>
              <p className="mb-2 mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Explore Planet Pooch</p>
              <div className="grid grid-cols-2 gap-x-5">{explore && "items" in explore && explore.items.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center border-b border-white/10 text-sm text-white/85">{item.label}</Link>)}</div>
            </nav>
            <div className="mt-auto border-t border-white/15 pt-5">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/contact/" onClick={() => setOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 text-sm font-semibold">Contact us</Link>
                <BookNowModal ctaHref={ctaHref} className="pp-cta min-h-12 justify-center rounded-full px-3! gap-2! tracking-normal! whitespace-nowrap" icon="paw" />
              </div>
              <a href={SITE.phone.href} data-track="phone-click" className="mt-3 flex min-h-11 items-center justify-center gap-2 text-sm text-white/75"><Phone className="h-4 w-4" aria-hidden />{SITE.phone.display}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
