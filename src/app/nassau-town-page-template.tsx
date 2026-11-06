import { Libre_Baskerville, Manrope } from "next/font/google";
import Link from "./booking-link";
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { NassauTownPage } from "../lib/content/nassau-towns";
import { nassauTowns, introTemplates, REGION_LABELS } from "../lib/content/nassau-towns";
import { SITE } from "../lib/site";
import { breadcrumbSchema, jsonLdAttrs, serviceSchema } from "../lib/schema";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { StickyMobileCta } from "./sticky-mobile-cta";

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

const SERVICES = [
  {
    title: "Mobile Grooming",
    icon: Scissors,
    href: "/mobile-grooming/",
    description:
      "Luxury one-on-one grooming brought to your driveway. Our fully equipped van means a calm, cage-free experience for your pup — no stressful salon trips.",
  },
  {
    title: "Daycare",
    icon: PawPrint,
    href: "/dog-daycare/",
    description:
      "Supervised group play and enrichment in a safe, nurturing environment. Your dog comes home happy, tired, and well-socialized.",
  },
  {
    title: "Boarding",
    icon: Home,
    href: "/dog-boarding/",
    description:
      "Cozy overnight suites, personalized care, and daily enrichment. Comfort and care for your dog while you're away.",
  },
  {
    title: "Training",
    icon: GraduationCap,
    href: "/dog-training/",
    description:
      "Compassionate, results-driven training led by our AKC Evaluator Trainer. Private sessions and group classes available.",
  },
] as const;

const HIGHLIGHTS = [
  { icon: HeartHandshake, label: "Loving, experienced staff" },
  { icon: ShieldCheck, label: "Safe, supervised environment" },
  { icon: Sparkles, label: "Daily enrichment & activities" },
  { icon: PawPrint, label: "Trusted since 2014" },
] as const;

export function NassauTownPageTemplate({ page }: { page: NassauTownPage }) {
  const intro = introTemplates[page.introVariant % introTemplates.length](
    page.town,
    page.distanceFromResort,
  );

  const nearby = page.nearbyTowns
    .map((s) => nassauTowns[s])
    .filter(Boolean);

  const breadcrumbs = [
    { name: "Home", item: `${SITE.url}/` },
    { name: `Dog Services in ${page.town}, NY`, item: `${SITE.url}/${page.slug}/` },
  ];

  const serviceSchemas = SERVICES.map((svc) =>
    serviceSchema({
      name: `${svc.title} in ${page.town}, NY`,
      description: svc.description,
      slug: page.slug,
      serviceType: svc.title,
    }),
  );

  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      {/* JSON-LD */}
      <script {...jsonLdAttrs(breadcrumbSchema(breadcrumbs))} />
      {serviceSchemas.map((s, i) => (
        <script key={i} {...jsonLdAttrs(s)} />
      ))}

      {/* ── Hero ──────────────────────────────────── */}
      <section className="bg-[var(--pp-night)] text-white">
        <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />
          <div className="grid w-full gap-12 pb-14 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-18 lg:pt-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pp-mint)]/85">
              {REGION_LABELS[page.subRegion]} · Nassau County
              </p>
              <h1 className="mt-5 max-w-2xl text-white">
              Dog Services in{" "}
              <span className="italic text-[var(--pp-mint)]">{page.town}</span>, NY
              </h1>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-10">
              <p className="pp-hero-description max-w-md text-lg leading-relaxed text-white/90 sm:text-xl">
              Mobile grooming, daycare, boarding &amp; training — serving {page.town} and surrounding Nassau County communities.
              </p>
              <div className="pp-hero-actions mt-9 flex flex-col items-start gap-3">
              <Link href="/book/" className="pp-cta">
                Book Now
                <span className="pp-cta-arrow" aria-hidden />
              </Link>
              <a href={SITE.phone.href} className="pp-cta-ghost">
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE.phone.display}
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────── */}
      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: `Dog Services in ${page.town}, NY` },
            ]}
            className="mb-8 justify-center sm:justify-start"
          />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Why {page.town} Dog Owners Choose Planet Pooch
          </h2>
          <p className="mt-6 text-base leading-8 text-[rgba(47,42,39,0.72)]">{intro}</p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────── */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Everything your dog needs — all in one place
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group flex flex-col rounded-2xl border border-[rgba(50,73,83,0.1)] bg-[var(--pp-cream)] p-7 transition hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--pp-mint)] text-[var(--pp-main-deep)]">
                    <Icon className="h-6 w-6 stroke-[1.6]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--pp-ink)] group-hover:text-[var(--pp-main)]">
                    {svc.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[rgba(47,42,39,0.72)]">
                    {svc.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:gap-2.5">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Planet Pooch ──────────────────────── */}
      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Why Planet Pooch
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Trusted by families across Nassau County
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              Founded in 2014 by Andy Gonzaga, Planet Pooch has grown from a single grooming van
              into one of Nassau County&rsquo;s most trusted names in pet care. Every service is built
              on one simple value: treat every dog like your own.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--pp-mint)] text-[var(--pp-main-deep)]">
                    <Icon className="h-5 w-5 stroke-[1.6]" />
                  </div>
                  <span className="text-sm font-medium text-[var(--pp-ink)]">{h.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Resort Proximity ──────────────────────── */}
      {page.distanceFromResort && (
        <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)] text-[var(--pp-main-deep)]">
              <MapPin className="h-7 w-7 stroke-[1.6]" />
            </div>
            <div>
              <h2 className="text-2xl leading-tight sm:text-3xl">
                {page.town} is just {page.distanceFromResort} from our Franklin Square resort
              </h2>
              <p className="mt-3 text-base leading-7 text-white/75">
                {SITE.address.street}, {SITE.address.locality}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Nearby Areas ──────────────────────────── */}
      {nearby.length > 0 && (
        <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Nearby Areas
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Also serving communities near {page.town}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}/`}
                  className="rounded-full border border-[rgba(50,73,83,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--pp-ink)] transition hover:border-[var(--pp-main)] hover:text-[var(--pp-main)]"
                >
                  {n.town}, NY
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ─────────────────────────────── */}
      <section className="bg-[var(--pp-mint)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            Ready to get started in {page.town}?
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--pp-ink)]/80">
            Book online or give us a call — we&rsquo;d love to meet your dog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book/"
              className="inline-flex items-center justify-center bg-[var(--pp-night)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--pp-main-deep)]"
            >
              Book Now
            </Link>
            <a
              href={SITE.phone.href}
              className="inline-flex items-center justify-center bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta />
    </main>
  );
}
