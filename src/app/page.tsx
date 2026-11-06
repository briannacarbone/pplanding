import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  GraduationCap,
  Home,
  MapPin,
  PawPrint,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { ADDRESS_LINES, SITE } from "../lib/site";
import { SiteHeader } from "./site-header";
import { BookNowModal } from "./book-now-modal";
import { SiteFooter } from "./site-footer";
import { StickyMobileCta } from "./sticky-mobile-cta";
import { ReviewCarousel } from "./review-carousel";
import { googleReviews } from "../lib/google-reviews";
import { LiteYouTubeEmbed } from "./lite-youtube-embed";

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

const heroHighlights = [
  {
    title: "Mobile Grooming",
    href: "/mobile-grooming/",
    icon: Scissors,
    image: "/mobile_home.jpg",
    copy: "Luxury grooming at your door across Nassau County.",
  },
  {
    title: "Daycare",
    href: "/dog-daycare/",
    icon: PawPrint,
    image: "/boarding_home.jpeg",
    copy: "Supervised play and enrichment in a safe, nurturing space.",
  },
  {
    title: "Boarding",
    href: "/dog-boarding/",
    icon: Home,
    image: "/daycare_home.png",
    copy: "Cozy overnight stays with attentive, personalized care.",
  },
  {
    title: "Training",
    href: "/dog-training/",
    icon: GraduationCap,
    image: "/training_home.jpeg",
    copy: "Results-driven training led by our AKC Evaluator Trainer.",
  },
  {
    title: "Enrichment",
    href: "/enrichment/",
    icon: Sparkles,
    image: "/enrichment_home.jpg",
    copy: "Sensory play, scent work, agility, and gentle one-on-one challenges.",
  },
  {
    title: "In-House Grooming",
    href: "/in-house-grooming/",
    icon: Scissors,
    image: "/Grooming.png",
    copy: "Spa-quality grooming at our resort for daycare and boarding guests.",
  },
] as const;


export default function HomePage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <section id="home-hero" className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          preload
        />
        {/* Shared gradient keeps white hero copy readable over the photo. */}
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader ctaHref="/new-client/" />

          <div
            id="top"
            className="pp-home-hero-content pt-16 pb-32 lg:pt-24 lg:pb-40"
          >
            <div>
              <div>
                <h1 className="pp-home-hero-title max-w-xl text-white">
                  Enriching the lives of pets{" "}
                  <span className="text-[var(--pp-mint)]">since 2014.</span>
                </h1>
                <p
                  className="pp-home-hero-tagline"
                >
                  Mobile grooming in Nassau County. Daycare, boarding & more on Long Island.
                </p>
              </div>

              <div className="mt-8">
                <div className="pp-hero-action-panel pp-home-hero-action-panel flex flex-wrap items-center justify-between gap-6">
                  <BookNowModal ctaHref="/new-client/" className="pp-cta order-2 ml-auto" label="Get Started" icon="paw" />
                  <div className="order-1 flex items-center gap-2 text-sm text-white/85">
                    <Star className="h-4 w-4 fill-[var(--pp-mint)] text-[var(--pp-mint)]" aria-hidden />
                    <span>
                      <strong className="font-semibold">{SITE.reviews.rating}</strong> from {SITE.reviews.countDisplay} Long Island pet parents
                    </span>
                  </div>
                </div>

              </div>
            </div>
            <a href="#services" className="absolute bottom-20 left-1/2 inline-flex min-h-11 -translate-x-1/2 flex-col items-center gap-2 whitespace-nowrap text-xs font-medium tracking-wide text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              View our services
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pb-18 pt-14 text-[var(--pp-ink)] sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Tailored care. Heartfelt experience.
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Six ways we care differently.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 96px) / 2), (max-width: 1279px) 33vw, 200px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative px-3 pb-4 pt-7 text-center">
                    <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--pp-cream)] shadow-sm">
                      <Icon className="h-5 w-5 stroke-[1.5] text-[var(--pp-gold-deep)]" />
                    </div>
                    <h3 className="mt-2 font-display text-lg italic text-[var(--pp-night)] transition group-hover:text-[var(--pp-main)]" style={{ fontFamily: "var(--font-display), serif" }}>
                      {item.title}
                    </h3>
                    <span className="mx-auto mt-3 block h-px w-10 bg-[var(--pp-gold-deep)]/40" aria-hidden />
                    <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {item.copy}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-18 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                About Us
              </p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
                Planet Pooch was founded in 2014 by Andy Gonzaga
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                At 17, Andy started working as a licensed professional groomer alongside his mother, Kathy. After graduating from the New York School of Dog Grooming in 2010, Andy built Planet Pooch from a single mobile grooming van into one of Nassau County&rsquo;s most trusted names in pet care.
              </p>
              <p className="mt-5 text-base leading-8 text-white/78">
                What began as mobile dog grooming across Franklin Square, Garden City, Rockville Centre, and surrounding Nassau County neighborhoods has grown into a full-service pet resort &mdash; offering professional grooming, dog daycare, overnight boarding, and training. Every service is built on the same family values Andy learned from day one: treat every dog like your own.
              </p>
            </div>

            <div>
              <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)]">
                <Image
                  src="/our-resort-exterior.webp"
                  alt="Planet Pooch Pet Resort exterior with daycare and boarding entrances"
                  width={1080}
                  height={540}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-7 text-white/78">
                🐾 Mobile grooming across Nassau County 🐾 Resort care for dogs across Long Island
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="facility-tour" className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/50 shadow-[0_24px_70px_rgba(50,73,83,0.1)] lg:order-1">
            <LiteYouTubeEmbed
              className="aspect-video w-full"
              videoId="9vUKmx3k5AQ"
              title="Planet Pooch Facility Tour"
            />
          </div>

          <div className="lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Facility Tour
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Take a closer look before you visit.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              Watch the tour to get a feel for the resort layout, care spaces, and the environment
              your dog will experience with us.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-18 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Our clients say it best.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/78">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">{SITE.reviews.rating}</strong>
                {" "}from {SITE.reviews.countDisplay} reviews on{" "}
                <a
                  href={SITE.reviews.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                >
                  Google
                </a>
              </span>
            </div>
          </div>

          <ReviewCarousel reviews={googleReviews} />
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bg-[var(--pp-mint)] p-8 shadow-[0_24px_70px_rgba(50,73,83,0.1)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]/85">
                  Visit Us
                </p>
                <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
                  Come see the Planet Pooch difference.
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--pp-ink)]/82">
                  Learn about our calm spaces, polished care, and welcoming routines in person.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/book/"
                    className="inline-flex min-h-11 items-center justify-center bg-[var(--pp-night)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--pp-main-deep)]"
                  >
                    Book Now
                  </Link>
                  <a
                    href={SITE.phone.href}
                    className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
                  >
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden border border-[var(--pp-night)]/15 bg-white/40">
                {/* Shows through the transparent iframe until the map paints. */}
                <div
                  aria-hidden
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[var(--pp-night)]/65"
                >
                  <MapPin className="h-6 w-6" />
                  <p className="px-6 text-center text-sm font-semibold">
                    {ADDRESS_LINES[0]}, {ADDRESS_LINES[1]}
                  </p>
                </div>
                <iframe
                  className="relative aspect-video w-full"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.legalName}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`)}&output=embed`}
                  title={`${SITE.legalName} location on Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta showAfterId="home-hero" />
    </main>
  );
}
