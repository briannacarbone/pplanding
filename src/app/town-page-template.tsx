import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "./booking-link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { towns, type TownPage } from "../lib/content/towns";
import { SITE } from "../lib/site";
import {
  breadcrumbSchema,
  jsonLdAttrs,
  nestedBreadcrumbs,
  serviceSchema,
} from "../lib/schema";
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

const SERVICE_COPY: Record<TownPage["service"], {
  eyebrow: string;
  hero: (town: string) => string;
  primary: string;
  ctaHref: string;
  intro: (town: string) => string;
  features: string[];
  whats: { title: string; items: string[] };
  related: Array<{ label: string; href: string }>;
}> = {
  "mobile-grooming": {
    eyebrow: "Mobile Grooming",
    primary: "Mobile Dog Grooming",
    hero: (t) => `Luxury mobile dog grooming brought to your driveway in ${t}.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `Mobile grooming is the perfect solution for ${t} pet owners who'd rather skip the trip to a salon. Our professional groomers come to you in a fully equipped van for a calm, one-on-one session — and your pet is always hand-dried, never left in a cage.`,
    features: [
      "One-on-one sessions in our fully equipped van outside your home",
      "Always hand-dried — never left in a cage to dry",
      "Most appointments wrapped in under 90 minutes",
      "Built-in restraints and harnesses keep pets secure",
    ],
    whats: {
      title: "Full Grooming Includes",
      items: [
        "Pedicure — nail cut and grind",
        "Ears cleaned and plucked upon request",
        "Two-shampoo bath plus conditioner",
        "Anal glands expressed upon request",
        "Hand blow dry, fluffing, and brushing",
        "Wide range of haircut options",
        "Signature bow and bandana finish",
      ],
    },
    related: [
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
      { label: "Our Vans", href: "/our-vans" },
      { label: "Cat Experience", href: "/cat-experience" },
    ],
  },
  "spa-services": {
    eyebrow: "Mobile Spa Services",
    primary: "Mobile Pet Spa Services",
    hero: (t) => `Luxury mobile pet spa services across ${t}.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `Our mobile pet spa brings the luxury salon experience directly to ${t} families. From basic full grooms to spa-quality Plus and Premium upgrades with boutique, handcrafted products.`,
    features: [
      "Boutique products including Warren London and HydraGroom",
      "Plus and Premium spa upgrades available",
      "Hand-dried, never crated",
      "Calm, one-on-one sessions",
    ],
    whats: {
      title: "Spa Services Available",
      items: [
        "Basic full groom with haircut",
        "Long-haired bath",
        "Short-haired bath",
        "3-Step Dental treatment",
        "Hydrating Butter Balm",
        "Cucumber Melon Facial",
        "Aloe Vera Paw Cleanser",
        "Premium Shampoo",
      ],
    },
    related: [
      { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Our Vans", href: "/our-vans" },
    ],
  },
  "in-house-grooming": {
    eyebrow: "Dog Grooming",
    primary: "Dog Grooming",
    hero: (t) =>
      `Mobile and in-house dog grooming for ${t} families.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `${t} families have two ways to groom with Planet Pooch: mobile grooming at your home, and in-house grooming for dogs enrolled in our daycare or boarding programs at our Franklin Square resort.`,
    features: [
      "Mobile grooming at your home — no hookups required",
      "In-house grooming bundled with daycare or boarding",
      "20% off in-house grooming on stays of 2+ nights",
      "AKC Evaluator Trainer also on-site for training services",
    ],
    whats: {
      title: "What we offer",
      items: [
        "Mobile full grooms and baths",
        "In-house grooming during daycare or boarding",
        "Plus and Premium spa upgrades",
        "Pickup of grooming records and notes for return visits",
      ],
    },
    related: [
      { label: "Mobile Grooming", href: "/mobile-grooming" },
      { label: "In-House Grooming", href: "/in-house-grooming" },
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Dog Daycare", href: "/dog-daycare" },
    ],
  },
  "daycare-boarding": {
    eyebrow: "Daycare & Boarding",
    primary: "Dog Daycare & Boarding",
    hero: (t) =>
      `Dog daycare and overnight boarding for ${t} families at our Franklin Square resort.`,
    ctaHref: "/dog-daycare",
    intro: (t) =>
      `${t} families bring their dogs to Planet Pooch for supervised group play, enrichment activities, and overnight boarding at our Franklin Square resort. We strive to make daycare more than a drop-off point — our goal is to create a space where your dog feels as relaxed and at home as they do with you.`,
    features: [
      "Supervised group play organized by size and temperament",
      "One-on-one Enrichment Play for dogs who prefer individual time",
      "Free meet-and-greet evaluation before your dog's first day",
      "Cozy overnight boarding suites — Express to Luxury",
    ],
    whats: {
      title: "Operating Hours",
      items: [
        "Monday–Saturday, 7am–7pm",
        "Morning session: 7am–12:30pm",
        "Full day session: 7am–7pm",
        "Quiet rest period: 12:30pm–1:30pm",
      ],
    },
    related: [
      { label: "Dog Daycare", href: "/dog-daycare" },
      { label: "Daycare Pricing", href: "/daycare-pricing" },
      { label: "Group Play", href: "/group-play" },
      { label: "Dog Boarding", href: "/dog-boarding" },
      { label: "Boarding Pricing", href: "/boarding-pricing" },
    ],
  },
};

const HERO_IMAGE: Record<TownPage["service"], string> = {
  "mobile-grooming": "/tour-space.jpg",
  "spa-services": "/tour-space.jpg",
  "in-house-grooming": "/our-resort-exterior.jpeg",
  "daycare-boarding": "/hero-dog.jpg",
};

const PARENT_SERVICE: Record<TownPage["service"], { name: string; slug: string }> = {
  "mobile-grooming": { name: "Mobile Grooming", slug: "mobile-grooming" },
  "spa-services": { name: "Mobile Grooming", slug: "mobile-grooming" },
  "in-house-grooming": { name: "In-House Grooming", slug: "in-house-grooming" },
  "daycare-boarding": { name: "Daycare & Boarding", slug: "dog-daycare-boarding" },
};

function pickNearbyTowns(page: TownPage, limit = 6): TownPage[] {
  return Object.values(towns)
    .filter((t) => t.service === page.service && t.slug !== page.slug)
    .slice(0, limit);
}

export function TownPageTemplate({ page }: { page: TownPage }) {
  const copy = SERVICE_COPY[page.service];
  const image = HERO_IMAGE[page.service];
  const parent = PARENT_SERVICE[page.service];
  const crumbs = breadcrumbSchema(
    nestedBreadcrumbs([parent], `${copy.primary} in ${page.town}`, page.slug)
  );
  const service = serviceSchema({
    name: `${copy.primary} in ${page.town}`,
    description: copy.hero(page.town),
    slug: page.slug,
    serviceType: copy.primary,
  });
  const nearby = pickNearbyTowns(page);

  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="pp-page-hero relative  overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          preload
        />
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex  max-w-7xl flex-col px-5  pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                {copy.eyebrow} • {page.town}{page.region ? `, ${page.region}` : ""}
              </p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">{`${copy.primary} in ${page.town}${page.town.endsWith("County") || page.town === "North Shore" ? "" : ", NY"}`}</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">{copy.hero(page.town)}</p>
              {page.distanceFromResort ? (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--pp-mint)]/90">
                  {page.distanceFromResort}
                </p>
              ) : null}
              <div className="pp-hero-actions mt-9 flex flex-col items-start gap-3">
                <Link href="/book/" className="pp-cta">
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={SITE.phone.href} className="pp-cta-ghost">
                  <Phone className="h-4 w-4" />
                  {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: parent.name, href: `/${parent.slug}/` },
              { name: `${copy.primary} in ${page.town}` },
            ]}
            className="mb-8"
          />
        </div>
        {page.localIntro ? (
          <div className="mx-auto mb-12 max-w-7xl">
            <div className="max-w-3xl border-l-2 border-[var(--pp-main)]/30 pl-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
                In your neighborhood
              </p>
              <p className="mt-3 text-lg leading-8 text-[rgba(47,42,39,0.86)]">
                {page.localIntro}
              </p>
            </div>
          </div>
        ) : null}
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
              Why Planet Pooch?
            </p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              {copy.primary} for {page.town} families.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[rgba(47,42,39,0.86)]">
              {copy.intro(page.town)}
            </p>
          </div>

          <div className="grid gap-3">
            {page.localFeatures && page.localFeatures.length > 0 ? (
              <div className="mb-2 border border-[var(--pp-main)]/25 bg-[var(--pp-mint)]/15 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
                  What {page.town} dog parents ask
                </p>
                <ul className="mt-3 space-y-2">
                  {page.localFeatures.map((lf) => (
                    <li
                      key={lf}
                      className="flex items-start gap-3 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                      <span>{lf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {copy.features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 border border-[rgba(50,73,83,0.12)] bg-white/65 px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
            {copy.whats.title}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
            What&apos;s included for {page.town} pets.
          </h2>
          <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {copy.whats.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-[rgba(50,73,83,0.1)] bg-[var(--pp-cream)] px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
            More from Planet Pooch
          </p>
          <h2 className="mt-3 text-3xl leading-tight">Explore related services.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between border border-[rgba(50,73,83,0.12)] bg-white/65 p-5 text-sm font-semibold text-[var(--pp-ink)] transition hover:bg-white/90"
              >
                <span>{r.label}</span>
                <ArrowRight className="h-4 w-4 text-[var(--pp-main)] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-7xl border-t border-[rgba(50,73,83,0.16)] pt-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">
              Nearby service areas
            </p>
            <h2 className="mt-3 text-3xl leading-tight">
              We also serve {copy.primary.toLowerCase()} clients in:
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/${n.slug}/`}
                    className="group flex items-center justify-between border border-[rgba(50,73,83,0.12)] bg-white/65 px-5 py-4 text-sm font-semibold text-[var(--pp-ink)] transition hover:bg-white/90"
                  >
                    <span>
                      {copy.primary} in {n.town}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[var(--pp-main)] transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <SiteFooter />

      <StickyMobileCta />

      <script {...jsonLdAttrs(service)} />
      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
