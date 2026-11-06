import { BookNowModal } from "../book-now-modal";
import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Home,
  PawPrint,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { SITE } from "../../lib/site";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { StickyMobileCta } from "../sticky-mobile-cta";
import { LeadForm } from "../lead-form";
import { LiteYouTubeEmbed } from "../lite-youtube-embed";

export const metadata: Metadata = {
  title: "Welcome to Planet Pooch | Long Island's Premier Pet Resort",
  description:
    "Mobile grooming, daycare, boarding & training across Long Island. Rated 4.9 stars by 720+ pet parents. Get started today.",
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

const services = [
  {
    key: "mobile-grooming",
    title: "Mobile Grooming",
    headline: "Stress-free grooming at your door",
    icon: Scissors,
    image: "/mobile_home.jpg",
    copy: "Perfect for busy owners, anxious dogs, senior dogs, and families who want convenience without sacrificing care.",
  },
  {
    key: "daycare",
    title: "Daycare",
    headline: "A safer, structured day for your dog",
    icon: PawPrint,
    image: "/boarding_home.jpeg",
    copy: "Play, supervision, enrichment, and social time in a clean, professionally managed facility.",
  },
  {
    key: "boarding",
    title: "Boarding",
    headline: "Overnight care you can feel good about",
    icon: Home,
    image: "/daycare_home.png",
    copy: "Clean, comfortable, supervised boarding for pet parents who want peace of mind while they're away.",
  },
  {
    key: "training",
    title: "Training",
    headline: "Real-life training for better behavior",
    icon: GraduationCap,
    image: "/training_home.jpeg",
    copy: "Private and structured dog training options to help your dog listen, focus, and thrive.",
  },
  {
    key: "enrichment",
    title: "Enrichment",
    headline: "More than just playtime",
    icon: Sparkles,
    image: "/enrichment_home.jpg",
    copy: "Mental stimulation, movement, and structured activities designed to keep dogs happy and engaged.",
  },
] as const;

const reviews = [
  {
    name: "Kerryann R.",
    initials: "K",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "Planet Pooch did an amazing job giving my mini golden doodle her first haircut! Their mobile grooming service was super convenient, and Jenn was absolutely fantastic. She was patient, professional, and made my pup look adorable. The entire experience was stress-free, and I really appreciate the care and attention to detail. I highly recommend Planet Pooch and Jenn for anyone looking for top-quality mobile grooming. Thank you for taking such great care of my pup!",
  },
  {
    name: "Gina M.",
    initials: "G",
    service: "Daycare",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body:
      "We've been bringing Gertie to Planet Pooch for about 4 months now and she absolutely LOVES it! The staff is wonderful and attentive, and we love that she has lots of time to play both indoors and outdoors. It is such a relief to have a place where we know our girl is loved and cared for. We can't recommend Planet Pooch enough!",
  },
  {
    name: "Michelle F.",
    initials: "M",
    service: "Boarding",
    avatarBg: "bg-[var(--pp-night)]",
    body:
      "My mini Goldendoodle was taken such great care of from start to finish. They were able to accommodate a last-minute stay for a full week… He received one-on-one playtime and they sent the best action shots of him playing ball and having an absolute blast. I loved receiving the daily boarding reports about how his day went… I drove over an hour from home to get here and it was 100 percent worth the drive.",
  },
  {
    name: "Emily P.",
    initials: "E",
    service: "Daycare",
    avatarBg: "bg-[var(--pp-main-deep)]",
    body:
      "Such an awesome place! Makes your dog feel right at home and is very communicative throughout the day and with report at pick up!! My girl, Violet works with Rebecca and ADORES her, although everyone at Planet Pooch is great. Vi is extremely shy and everyone is so patient and works at her pace. Her first day and she practically ran in the back room with Kim, goes to show the energy and love they have for our babies. Can't recommend Rebecca and this place enough but the picture goes to show how much she truly loves this place already!!! 10/10",
  },
  {
    name: "Jessica C.",
    initials: "J",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-ink)]",
    body:
      "Madison needed a Good Groomer because I have had bad experiences with other places. The Doggie Daycare she was going too the owner recommended Planet Pooch Mobile. And we have been with them since. I give them a 10/10. Kris is her groomer and we Love her!! I have had others when Kris is away and they are great too. So if you need a groomer for your dog or cat look no further!!",
  },
  {
    name: "Pat H.",
    initials: "P",
    service: "Daycare & Boarding",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "I adopted a very shy, nervous dog & after a few days of daycare & several days of boarding my dog has shown a huge improvement… He runs & plays with the other dogs & has a lot more confidence now. He was also groomed there & I was extremely happy with the grooming, he looked terrific… All the staff there are amazing, kind, compassionate & very accommodating. At Planet Pooch it is truly all about the dogs!",
  },
] as const;

export default function WelcomePage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      {/* ── Hero ── */}
      <section className="pp-page-hero relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          preload
        />
        <div className="pp-hero-image-overlay absolute inset-0" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          {/* Hero content */}
          <div className="pp-hero-content">
            <div className="pp-hero-stack">
              <div>
                <h1 className="pp-hero-title text-white">
                  Long Island pet care you{" "}
                  <span className="text-[var(--pp-mint)]/80">can actually trust.</span>
                </h1>
              </div>
              <div className="pp-hero-copy">
                <p className="pp-hero-tagline">
                  Mobile grooming, daycare, boarding, training &amp; enrichment from a
                  family-run team trusted by 6,800+ Long Island puppies.
                </p>

              <div className="pp-hero-actions mt-8 flex flex-wrap items-center gap-4">
                <BookNowModal ctaHref="/new-client/" label="Get Started" track="hero-request-availability" className="pp-cta min-h-[52px] !px-7" />
                <a
                  href={SITE.phone.href}
                  data-track="phone-click"
                  className="pp-cta-ghost min-h-[52px] !px-7"
                >
                  Call {SITE.phone.display}
                </a>
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pt-10 pb-2 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: "11+", label: "Years in Business" },
            { value: "4.9★", label: "Google Rating" },
            { value: "6,800+", label: "Happy Puppies" },
            { value: "5", label: "Services Offered" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-[var(--pp-night)] sm:text-4xl" style={{ fontFamily: "var(--font-display), serif" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Choose your service
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              What does your dog need?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-5">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <a
                  key={svc.key}
                  href="#request"
                  data-track={`service-${svc.key}`}
                  className="group mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col px-4 pb-5 pt-7 text-center">
                    <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--pp-cream)] shadow-sm">
                      <Icon
                        className="h-5 w-5 stroke-[1.5] text-[var(--pp-gold-deep)]"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                      {svc.title}
                    </p>
                    <h3 className="mt-2 text-lg leading-snug text-[var(--pp-ink)] sm:text-xl">
                      {svc.headline}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[18rem] flex-1 text-sm leading-6 text-[rgba(47,42,39,0.78)]">
                      {svc.copy}
                    </p>
                    <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:text-[var(--pp-night)]">
                      Request availability
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <BookNowModal ctaHref="/new-client/" label="Get Started" track="services-request-availability" className="pp-cta min-h-[52px] !px-7" />
          </div>
        </div>
      </section>

      {/* ── About / Trust ── */}
      <section className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                Why Planet Pooch
              </p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                Family-run since 2014. Trusted across Long Island.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                Founded by Andy Gonzaga, Planet Pooch grew from a single mobile
                grooming van into a trusted pet resort serving Nassau County.
                Every service is built on one principle: treat every dog like
                your own.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/78">
                {[
                  "Licensed and insured business with professionally trained staff",
                  "Clean, climate-controlled facility in Franklin Square",
                  "Daily photo & video updates for boarding guests",
                  "AKC Evaluator on staff for training programs",
                  "Serving all of Nassau County + the Hamptons",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pp-mint)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)]">
              <LiteYouTubeEmbed
                className="aspect-video w-full"
                videoId="9vUKmx3k5AQ"
                title="Planet Pooch Facility Tour"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Real Reviews
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              See why Long Island pet parents trust us.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[var(--pp-ink)]/65">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[var(--pp-ink)]">
                  {SITE.reviews.rating}
                </strong>{" "}
                from {SITE.reviews.countDisplay} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--pp-sand)] bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--pp-ink)]">
                      {review.name}
                    </p>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/75">
                        {review.service}
                      </p>
                      <span
                        aria-label="Posted on Google"
                        className="flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-ink)]/35"
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

                <p className="text-sm leading-7 text-[var(--pp-ink)]/72">
                  {review.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section
        id="request"
        className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Request availability
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Request availability for your dog.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.75)]">
              Tell us what you need and our team will reach out with the best
              next step. Most requests get a response the same business day.
            </p>

            <div className="mt-7 rounded-xl border border-[rgba(50,73,83,0.12)] bg-white/65 p-5">
              <p className="text-sm font-semibold text-[var(--pp-ink)]">
                Prefer to talk to a person?
              </p>
              <a
                href={SITE.phone.href}
                data-track="phone-click"
                className="mt-2 inline-flex items-center gap-2 text-base font-bold text-[var(--pp-night)] underline-offset-4 hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phone.display}
              </a>
              <p className="mt-2 text-xs text-[var(--pp-ink)]/55">
                Mon–Sat, 7am–7pm (closed 12:30–1:30pm).
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[rgba(50,73,83,0.15)] bg-white shadow-[0_16px_40px_rgba(50,73,83,0.12)]">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[var(--pp-night)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Ready to give your dog the{" "}
            <span className="text-[var(--pp-mint)]/80">Planet Pooch</span>{" "}
            experience?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70">
            Whether it&rsquo;s a grooming appointment at your door, a fun-filled
            day of play, or overnight boarding — we&rsquo;re here for your pet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BookNowModal ctaHref="/new-client/" label="Get Started" track="final-request-availability" className="pp-cta min-h-[52px] !px-7" />
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

      <StickyMobileCta ctaHref="#request" />
    </main>
  );
}
