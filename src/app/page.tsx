import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Home,
  PawPrint,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { SITE } from "../lib/site";
import { blogPosts } from "../lib/content/blog";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

const featuredBlogSlugs = [
  "give-your-dog-a-vacation-too-this-labor-day-weekend-at-planet-pooch-pet-resort",
  "how-often-should-you-get-your-dog-groomed",
  "is-it-bad-to-shave-my-goldendoodle-what-you-need-to-know",
] as const;

const featuredBlogPosts = featuredBlogSlugs.map((slug) => blogPosts[slug]);

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
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
    copy: "Luxury grooming at your door across Long Island and the Hamptons.",
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
] as const;


// Mock Google reviews — replace with real reviews pulled from the
// Google Business Profile when ready.
const googleReviews = [
  {
    name: "Sarah M.",
    initials: "S",
    avatarBg: "bg-[var(--pp-main)]",
    date: "2 weeks ago",
    body:
      "Bear has never looked better and he was completely calm — no more stressful trips to a salon. Dyana came right to our driveway in Garden City. Worth every penny.",
  },
  {
    name: "Michael T.",
    initials: "M",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    date: "1 month ago",
    body:
      "We've been bringing our shepherd to daycare for almost a year. The staff knows him by name, the meet-and-greet was thorough, and he comes home tired in the best way.",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    avatarBg: "bg-[var(--pp-night)]",
    date: "3 weeks ago",
    body:
      "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
] as const;

export default function HomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        {/* Subtle even darkening so the image still reads while text remains legible on either side. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.55)_0%,rgba(20,30,36,0.42)_45%,rgba(20,30,36,0.62)_100%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div
            id="top"
            className="py-12 lg:py-16"
          >
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--pp-mint)]/85">
                  Planet Pooch · Est. 2014
                </p>
                <h1 className="mt-7 max-w-xl text-white">
                  Enriching the{" "}
                  <span className="italic text-[var(--pp-mint)]">Lives</span> of Pets.
                </h1>
              </div>

              <div className="lg:border-l lg:border-white/20 lg:pl-10">
                <p
                  className="max-w-md text-lg italic leading-relaxed text-white/90 sm:text-xl"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  From concierge mobile grooming to a luxury resort for daycare, boarding, and
                  training, we serve dogs across Nassau, Suffolk, and the Hamptons.
                </p>
                <div className="mt-9 flex flex-col items-start gap-3">
                  <Link href="https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7" className="pp-cta">
                    Get Started
                    <span className="pp-cta-arrow" aria-hidden />
                  </Link>
                  <a href="#services" className="pp-cta-ghost">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 pb-16 lg:mt-14 lg:pb-20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
              <span className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-white/40" />
                Scroll to Explore
              </span>
              <span>Long Island, New York</span>
            </div>
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
              Five ways we make every day extraordinary.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
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

      <section id="about" className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
                About Us
              </p>
              <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
                Planet Pooch was founded in 2014 by Andy Gonzaga
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
                At 17, Andy started working as a licensed professional groomer alongside his mother, Kathy. After graduating from the New York School of Dog Grooming in 2010, Andy built Planet Pooch from a single mobile grooming van into one of Nassau County&rsquo;s most trusted names in pet care.
              </p>
              <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
                What began as mobile dog grooming across Franklin Square, Garden City, Rockville Centre, and surrounding Nassau County neighborhoods has grown into a full-service pet resort &mdash; offering professional grooming, dog daycare, overnight boarding, and training. Every service is built on the same family values Andy learned from day one: treat every dog like your own.
              </p>
            </div>

            <div>
              <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/50 shadow-[0_24px_70px_rgba(50,73,83,0.1)]">
                <Image
                  src="/our-resort-exterior.jpeg"
                  alt="Planet Pooch Pet Resort exterior with daycare and boarding entrances"
                  width={1300}
                  height={650}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                🐾 Serving Franklin Square and all of Nassau County 🐾 Mobile Grooming • Daycare • Boarding • Training
              </p>
            </div>
          </div>

          <div className="mt-14 grid items-center gap-8 border-t border-[rgba(50,73,83,0.15)] pt-12 sm:grid-cols-[1fr_auto] lg:mt-16 lg:pt-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
                Our Team
              </p>
              <h3 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
                Meet the team behind the resort.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-[rgba(47,42,39,0.72)]">
                From groomers to daycare specialists to our AKC Evaluator Trainer, our team is what makes Planet Pooch feel like home.
              </p>
            </div>
            <Link href="/our-team/" className="pp-cta sm:justify-self-end">
              Meet the Team
              <span className="pp-cta-arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section id="facility-tour" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)] lg:order-1">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/9vUKmx3k5AQ?si=mvCHALROv_obKOo5"
              title="Planet Pooch Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Facility Tour
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Take a closer look before you visit.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78">
              Watch the tour to get a feel for the resort layout, care spaces, and the environment
              your dog will experience with us.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Our clients say it best.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[rgba(47,42,39,0.72)]">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[var(--pp-ink)]">{SITE.reviews.rating}</strong>
                {" "}from {SITE.reviews.count.toLocaleString()} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 bg-white p-6 shadow-[0_8px_24px_rgba(50,73,83,0.06)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                    >
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--pp-ink)]">{review.name}</p>
                      <p className="text-xs text-[rgba(47,42,39,0.55)]">{review.date}</p>
                    </div>
                  </div>
                  <span
                    aria-label="Posted on Google"
                    title="Posted on Google"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgba(47,42,39,0.45)]"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-[rgba(47,42,39,0.78)]">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-white/55 px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              From the Blog
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Tips, guides, and stories for pet parents.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group flex h-full flex-col justify-between border border-[rgba(50,73,83,0.12)] bg-[var(--pp-cream)] p-6 transition hover:bg-white/85"
              >
                <h3 className="text-xl font-semibold leading-snug text-[var(--pp-ink)]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.68)]">
                  {post.metaDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:translate-x-1">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog/" className="pp-cta">
              View All Articles
              <span className="pp-cta-arrow" aria-hidden />
            </Link>
          </div>
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
                    href="https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7"
                    className="inline-flex items-center justify-center bg-[var(--pp-night)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--pp-main-deep)]"
                  >
                    Book Now
                  </Link>
                  <a
                    href={SITE.phone.href}
                    className="inline-flex items-center justify-center bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
                  >
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-[var(--pp-night)]/15 bg-white/40">
                <iframe
                  className="aspect-video w-full"
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
    </main>
  );
}
