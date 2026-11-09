import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS_LINES, SITE } from "../../lib/site";
import { getTownsByRegion, REGION_LABELS } from "../../lib/content/nassau-towns";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { StickyMobileCta } from "../sticky-mobile-cta";

const displaySerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: { absolute: "Contact Planet Pooch | Phone, Email & Location" },
  description: `Book mobile grooming, daycare, boarding, training, or enrichment with ${SITE.legalName} in ${SITE.address.locality}, ${SITE.address.region}. Call ${SITE.phone.display} or email ${SITE.email}.`,
  alternates: { canonical: "/contact/" },
};

const regionOrder = ["central-nassau", "north-shore", "south-shore"] as const;

function AreasWeServe() {
  const townsByRegion = getTownsByRegion();
  return (
    <section id="areas" className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]">
            Areas We Serve
          </p>
          <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            Serving every corner of Nassau County
          </h2>
          <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
            From mobile grooming at your door to daycare, boarding, and training at our Franklin Square resort — we proudly serve dogs across Nassau County.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {regionOrder.map((region) => (
            <div key={region}>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
                {REGION_LABELS[region]}
              </h3>
              <ul className="mt-4 space-y-2">
                {townsByRegion[region].map((town) => (
                  <li key={town.slug}>
                    <Link
                      href={`/${town.slug}/`}
                      className="text-sm text-[rgba(47,42,39,0.72)] transition hover:text-[var(--pp-main)]"
                    >
                      {town.town}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="pp-page-hero relative  overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/our-resort-exterior.jpeg"
          alt="Planet Pooch Pet Resort exterior"
          fill
          sizes="100vw"
          className="object-cover"
          preload
        />
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex  max-w-7xl flex-col px-5  pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                Book Now
              </p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">Let&apos;s plan the right care.</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">
                Reach us by phone, email, or stop by the resort. We&apos;ll get back to you to set up your dog&apos;s
                first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <Phone className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Call us</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              The fastest way to reach us. We&apos;re happy to talk through services, scheduling, and what makes
              sense for your dog.
            </p>
            <a
              href={SITE.phone.href}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-[var(--pp-main-deep)] transition hover:text-[var(--pp-night)]"
            >
              {SITE.phone.display}
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <Mail className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Email</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              Send a note about availability, services, or anything you&apos;d like us to know about your dog.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex min-h-11 max-w-full items-center gap-2 text-base font-semibold text-[var(--pp-main-deep)] transition hover:text-[var(--pp-night)]"
            >
              <span className="min-w-0 break-all">{SITE.email}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </article>

          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <MapPin className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Visit the resort</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              Mobile grooming services available across {SITE.serviceArea.primary}, including {SITE.serviceArea.notable.join(", ")}.
            </p>
          </article>
        </div>
      </section>

      <AreasWeServe />

      <SiteFooter />

      <StickyMobileCta />
    </main>
  );
}
