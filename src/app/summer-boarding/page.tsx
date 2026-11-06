import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  PawPrint,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { SITE } from "../../lib/site";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { StickyMobileCta } from "../sticky-mobile-cta";
import { BoardingFormModal } from "./boarding-form";

export const metadata: Metadata = {
  title: "Summer Dog Boarding Long Island | Planet Pooch Pet Resort",
  description:
    "Book summer dog boarding at Planet Pooch in Franklin Square, NY. Climate-controlled suites, daily enrichment, photo updates & 1:1 care available. Reserve your spot today.",
  robots: { index: false, follow: false },
};

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

const whyPlanetPooch = [
  {
    icon: Snowflake,
    title: "Climate-Controlled Suites",
    copy: "Cool, comfortable rooms even on the hottest days.",
  },
  {
    icon: Users,
    title: "1:1 Boarding Available",
    copy: "Dedicated one-on-one time with staff for dogs who prefer a quieter pace or need individualized attention throughout their stay.",
  },
  {
    icon: Sun,
    title: "Daily Play & Enrichment",
    copy: "Structured outdoor play and socialization every day.",
  },
  {
    icon: Camera,
    title: "Daily Photo Updates",
    copy: "Pictures and reports sent straight to you.",
  },
  {
    icon: PawPrint,
    title: "Personalized Care Plans",
    copy: "Feeding, meds, and routines maintained your way.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    copy: "Trained in pet safety, first aid, and behavior.",
  },
] as const;

const boardingReviews = [
  {
    name: "Michelle F.",
    initials: "M",
    avatarBg: "bg-[var(--pp-night)]",
    body: "My mini Goldendoodle was taken such great care of from start to finish. They were able to accommodate a last-minute stay for a full week… He received one-on-one playtime and they sent the best action shots of him playing ball and having an absolute blast. I loved receiving the daily boarding reports about how his day went… I drove over an hour from home to get here and it was 100 percent worth the drive.",
  },
  {
    name: "Pat H.",
    initials: "P",
    avatarBg: "bg-[var(--pp-main)]",
    body: "I adopted a very shy, nervous dog & after a few days of daycare & several days of boarding my dog has shown a huge improvement… He runs & plays with the other dogs & has a lot more confidence now. All the staff there are amazing, kind, compassionate & very accommodating. At Planet Pooch it is truly all about the dogs!",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body: "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
] as const;

export default function SummerBoardingPage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/boarding/boarding_hero.jpg"
          alt="Happy dog enjoying supervised play at Planet Pooch Pet Resort"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          preload
        />
        <div className="pp-hero-image-overlay absolute inset-0" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div className="pb-28 pt-14 lg:pb-36 lg:pt-20">
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-mint)]/90">
                  Summer 2026 — Spots Are Limited
                </p>
                <h1 className="mt-4 text-white">
                  Summer boarding your dog will{" "}
                  <span className="text-[var(--pp-mint)]/80">
                    actually enjoy.
                  </span>
                </h1>
              </div>

              <div className="lg:border-l lg:border-white/20 lg:pl-10">
                <p className="pp-hero-description max-w-md text-lg leading-relaxed text-white/90 sm:text-xl">
                  Climate-controlled suites, daily enrichment, and 1:1 care
                  available at our Franklin Square resort.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </span>
                  <span>
                    <strong className="font-semibold text-white">{SITE.reviews.rating}</strong> from{" "}
                    {SITE.reviews.countDisplay} reviews on Google
                  </span>
                </div>
                <div className="pp-hero-actions mt-8 flex flex-col items-start gap-4">
                  <BoardingFormModal className="pp-cta min-h-[52px] !px-7" />
                  <a
                    href={SITE.phone.href}
                    data-track="phone-click"
                    className="pp-cta-ghost min-h-[52px] !px-7"
                  >
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="relative -mt-8 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pt-8 pb-4 sm:px-8 lg:-mt-10 lg:rounded-t-[4rem] lg:px-10 lg:pt-10">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: "11+", label: "Years in Business" },
            { value: "4.9★", label: "Google Rating" },
            { value: "6,800+", label: "Happy Puppies" },
            { value: "1:1", label: "Boarding Available" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl font-semibold text-[var(--pp-night)] sm:text-4xl"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 1: Why Planet Pooch ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
                Why Planet Pooch
              </p>
              <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
                Not all boarding is created equal.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyPlanetPooch.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-[var(--pp-sand)] bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                    <Icon className="h-5 w-5 text-[var(--pp-main)]" aria-hidden />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold text-[var(--pp-night)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--pp-ink)]/68">
                      {item.copy}
                    </p>
                  </div>
                </div>
              );
            })}
              </div>

              <div className="mt-8">
                <Link
                  href="/dog-boarding/"
                  data-track="pricing-more-info"
                  className="pp-cta min-h-[48px] !px-6"
                >
                  Pricing &amp; More Info
                  <span className="pp-cta-arrow" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/boarding/moon_sq.JPG"
                alt="Dogs enjoying their boarding stay at Planet Pooch"
                width={800}
                height={600}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Reviews ── */}
      <section className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Real boarding reviews
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Pet parents trust us with their dogs.
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/78">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">
                  {SITE.reviews.rating}
                </strong>{" "}
                from {SITE.reviews.countDisplay} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {boardingReviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-mint)]/75">
                        Boarding
                      </p>
                      <span
                        aria-label="Posted on Google"
                        className="flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35"
                      >
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </div>

                <p className="text-sm leading-7 text-white/78">
                  {review.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Final CTA ── */}
      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Give your dog a summer vacation{" "}
            <span className="text-[var(--pp-mint)]/80">they&rsquo;ll love.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70">
            While you&rsquo;re at the beach, your dog will be having just as
            much fun at Planet Pooch. Reserve summer boarding today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BoardingFormModal className="pp-cta min-h-[52px] !px-7" />
            <a
              href={SITE.phone.href}
              data-track="phone-click"
              className="pp-cta-ghost min-h-[52px] !px-7"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta ctaHref="/dog-boarding/" ctaLabel="Get Started" />
    </main>
  );
}
