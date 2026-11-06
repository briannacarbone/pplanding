"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { BookNowModal } from "./book-now-modal";
import { SITE } from "../lib/site";

type StickyMobileCtaProps = {
  openBookingModal?: boolean;
  /** Show only after this section scrolls above the viewport. */
  showAfterId?: string;
  /** Where the primary CTA links. Defaults to the on-site booking page. */
  ctaHref?: string;
  /** Primary CTA label. */
  ctaLabel?: string;
  /** data-track key fired by the analytics handler when the CTA is clicked. */
  ctaTrack?: string;
};

const DEFAULT_HREF = "/book/";

/**
 * Mobile-only sticky bottom bar with a primary CTA + click-to-call.
 *
 * Renders at the page root and is hidden at lg+ breakpoints, matching the
 * mobile-navigation breakpoint. Designed to
 * sit at z-30 so the SiteHeader's mobile menu drawer (z-40) covers it
 * when open.
 *
 * The primary CTA can either anchor to an on-page form (e.g. `#request`
 * on `/welcome/`) or link to the booking page (the default).
 */
export function StickyMobileCta({
  openBookingModal = false,
  showAfterId,
  ctaHref = DEFAULT_HREF,
  ctaLabel = "Get Started",
  ctaTrack = "sticky-request-availability",
}: StickyMobileCtaProps = {}) {
  const [pastSection, setPastSection] = useState(false);

  useEffect(() => {
    if (!showAfterId) return;
    const section = document.getElementById(showAfterId);
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastSection(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [showAfterId]);

  return (
    <>
      <div
        aria-hidden="true"
        className="h-[calc(3.75rem+max(env(safe-area-inset-bottom),0.5rem))] lg:hidden"
      />
      <div
        hidden={Boolean(showAfterId) && !pastSection}
        data-sticky-mobile-cta
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[rgba(50,73,83,0.18)] bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(50,73,83,0.12)] backdrop-blur lg:hidden"
      >
        <div className="flex gap-2">
          {(openBookingModal || ["book now", "get started"].includes(ctaLabel.trim().toLowerCase())) ? <BookNowModal ctaHref={ctaHref} label={ctaLabel} track={ctaTrack} icon="none" className="inline-flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-[var(--pp-mint)] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)] transition active:bg-[var(--pp-mint-deep)]" /> : (
          <a
            href={ctaHref}
            data-track={ctaTrack}
            className="inline-flex min-h-11 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-[var(--pp-mint)] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)] transition active:bg-[var(--pp-mint-deep)]"
          >
            {ctaLabel}
          </a>
          )}
          <a
            href={SITE.phone.href}
            data-track="phone-click"
            aria-label={`Call ${SITE.phone.display}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[rgba(50,73,83,0.25)] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)] transition active:bg-[var(--pp-cream)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
        </div>
      </div>
    </>
  );
}
