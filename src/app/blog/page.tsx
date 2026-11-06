import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../../lib/content/blog";
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
  title: { absolute: "Planet Pooch Blog | Mobile Grooming, Daycare, Training" },
  description:
    "Stories and how-tos from the Planet Pooch team — grooming tips, daycare advice, seasonal pet care, and behind-the-scenes from our Franklin Square resort.",
  alternates: { canonical: "/blog/" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function BlogIndexPage() {
  const posts = Object.values(blogPosts).sort((a, b) =>
    (b.datePublished ?? "").localeCompare(a.datePublished ?? ""),
  );
  const featured = posts.filter((p) => p.hasFullContent);
  const archive = posts.filter((p) => !p.hasFullContent);

  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="bg-[var(--pp-night)] px-5 pt-5 pb-14 text-white sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
          <div className="grid w-full gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Blog</p>
              <h1 className="mt-4 text-white">Notes on grooming, daycare, training, and life with dogs.</h1>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-10">
              <p className="pp-hero-description max-w-md text-lg leading-relaxed text-white/90 sm:text-xl">
                Our team writes about what we see day to day — grooming questions we get asked again and again, the science behind enrichment, seasonal pet care, and stories from the resort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            Latest
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            Latest articles
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex h-full flex-col justify-between border border-[rgba(50,73,83,0.12)] bg-[var(--pp-cream)] p-6 transition hover:bg-white/85"
              >
                <div>
                  {p.datePublished ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/65">
                      {formatDate(p.datePublished)}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-[var(--pp-ink)]">
                    {p.title}
                  </h3>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:translate-x-1">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            Archive
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            More from the Planet Pooch blog
          </h2>
          <p className="mt-3 max-w-2xl text-sm italic leading-7 text-[rgba(47,42,39,0.6)]">
            We&apos;re bringing the full archive back online as part of our migration. Each title
            below has a placeholder while we restore the original content.
          </p>
          <ul className="mt-8 grid gap-2 md:grid-cols-2">
            {archive.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="block border border-[rgba(50,73,83,0.1)] bg-white/55 px-5 py-4 text-sm leading-6 text-[rgba(47,42,39,0.8)] transition hover:bg-white/85 hover:text-[var(--pp-night)]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta />
    </main>
  );
}
