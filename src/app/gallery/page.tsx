import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { StickyMobileCta } from "../sticky-mobile-cta";
import { GalleryGrid, type GalleryPhoto } from "./gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See dogs at play, enrichment activities, special events, and everyday life at Planet Pooch Pet Resort in West Hempstead, NY.",
  alternates: { canonical: "/gallery/" },
  openGraph: {
    title: "Planet Pooch Gallery",
    description: "A look inside playtime, enrichment, boarding, and special events at Planet Pooch.",
    url: "/gallery/",
  },
};

const photos: readonly GalleryPhoto[] = [
  {
    src: "/daycare_home.png",
    alt: "A dog relaxing in a private suite at Planet Pooch",
    caption: "A cozy place to relax",
    className: "sm:row-span-2",
  },
  {
    src: "/gallery/daycare-playroom.webp",
    alt: "Dogs enjoying supervised play in the spacious Planet Pooch daycare room",
    caption: "Room to play",
    className: "sm:row-span-2",
  },
  {
    src: "/gallery/indoor-daycare-play.webp",
    alt: "Dogs of different sizes enjoying supervised indoor daycare at Planet Pooch",
    caption: "Daycare in full swing",
    className: "sm:row-span-2",
  },
  {
    src: "/gallery/outdoor-dog-play.webp",
    alt: "Dogs running together in the fenced outdoor play yard at Planet Pooch",
    caption: "Fresh-air playtime",
    className: "sm:row-span-2",
  },
  {
    src: "/Enrichment.png",
    alt: "A dog enjoying an enrichment activity at Planet Pooch",
    caption: "Enrichment time",
  },
  {
    src: "/boarding/IMG_0687.jpg",
    alt: "A happy dog during a stay at Planet Pooch",
    caption: "Happy resort stays",
  },
  {
    src: "/events/IMG_3981.jpg",
    alt: "Dogs participating in a Planet Pooch seasonal event",
    caption: "Seasonal celebrations",
    className: "lg:col-span-2",
  },
  {
    src: "/training_home.jpeg",
    alt: "A dog working with a trainer at Planet Pooch",
    caption: "Learning together",
  },
  {
    src: "/boarding/day-in-the-life.png",
    alt: "Dogs spending the day together at Planet Pooch",
    caption: "A day at Planet Pooch",
    className: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/events/IMG_5076.jpg",
    alt: "A dog posing for a photo at a Planet Pooch event",
    caption: "Picture-perfect moments",
  },
  {
    src: "/grooming-fresh.jpg",
    alt: "A freshly groomed dog at Planet Pooch",
    caption: "Fresh from the groomer",
  },
  {
    src: "/boarding/img_6687.jpg",
    alt: "A dog enjoying supervised play at Planet Pooch",
    caption: "Supervised play",
    className: "lg:col-span-2",
  },
  {
    src: "/events/IMG_3976.PNG",
    alt: "A festive dog event at Planet Pooch",
    caption: "Making memories",
  },
  {
    src: "/kissing-booth.png",
    alt: "A dog posing at the Planet Pooch kissing booth",
    caption: "Lots of love",
  },
  {
    src: "/gallery/indoor-enrichment-room.webp",
    alt: "A spacious indoor Planet Pooch enrichment room with play tunnels and equipment",
    caption: "Space for enrichment",
  },
  {
    src: "/gallery/indoor-play-space.webp",
    alt: "A clean indoor Planet Pooch play space with tunnels, beds, and room to explore",
    caption: "A bright, open playroom",
  },
  {
    src: "/gallery/private-dog-suite.webp",
    alt: "A private Planet Pooch dog suite with a raised bed, toys, and television",
    caption: "Private spaces for rest",
  },
  {
    src: "/gallery/sunlit-care-room.webp",
    alt: "A clean, sunlit care room inside Planet Pooch Pet Resort",
    caption: "Clean, comfortable care",
  },
  {
    src: "/gallery/outdoor-play-yard.webp",
    alt: "The fenced outdoor play yard at Planet Pooch Pet Resort",
    caption: "Our outdoor play yard",
    className: "sm:col-span-2",
  },
] as const;

export default function GalleryPage() {
  return (
    <main id="main" className="min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]">
      <section className="pp-page-hero relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/events/Untitled design-23.png"
          alt="Dogs enjoying time together at Planet Pooch"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />
          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
              Life at Planet Pooch
              </p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">The best days are dog days.</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">
                Take a look at playtime, enrichment, special events, fresh grooms, and the everyday moments that make our resort feel like home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid photos={photos} />

          <div className="mt-16 border-t border-[var(--pp-night)]/12 pt-12 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]">
              Ready to join the fun?
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
              Give your dog a day worth wagging about.
            </h2>
            <Link href="/book/" className="pp-cta mt-7">
              Get Started
              <span className="pp-cta-arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyMobileCta />
    </main>
  );
}
