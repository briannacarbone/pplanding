import { HeroBackdrop } from "./hero-backdrop";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "../lib/content/blog";
import { blogPosts } from "../lib/content/blog";
import {
  articleSchema,
  breadcrumbSchema,
  jsonLdAttrs,
  nestedBreadcrumbs,
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

const SERVICE_KEYWORDS: Array<{
  match: RegExp;
  label: string;
  href: string;
  description: string;
}> = [
  {
    match: /\b(daycare|group play|socializ|play group)\b/i,
    label: "Dog Daycare",
    href: "/dog-daycare/",
    description: "Supervised group play and enrichment at our Franklin Square resort.",
  },
  {
    match: /\b(board|stay|overnight|suite|hotel)\b/i,
    label: "Dog Boarding",
    href: "/dog-boarding/",
    description: "Cozy overnight suites with hand-on care — Express through Luxury.",
  },
  {
    match: /\b(train|obedience|puppy class|leash|recall)\b/i,
    label: "Dog Training",
    href: "/dog-training/",
    description: "AKC Evaluator-led 6-week programs for every stage.",
  },
  {
    match: /\b(enrich|sensory|scent|snuffle|kong)\b/i,
    label: "Enrichment",
    href: "/enrichment/",
    description: "One-on-one enrichment sessions for dogs who prefer individual time.",
  },
  {
    match: /\b(groom|bath|mat|coat|nail|spa|shed)\b/i,
    label: "Mobile Grooming",
    href: "/mobile-grooming/",
    description: "Luxury mobile grooming brought to your driveway across Nassau County and the Hamptons.",
  },
];

function pickRelatedService(post: BlogPost) {
  const haystack = `${post.title} ${post.slug}`;
  for (const entry of SERVICE_KEYWORDS) {
    if (entry.match.test(haystack)) return entry;
  }
  return SERVICE_KEYWORDS[SERVICE_KEYWORDS.length - 1];
}

function pickRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return Object.values(blogPosts)
    .filter((p) => p.slug !== currentSlug && p.hasFullContent)
    .sort((a, b) => {
      const ad = a.datePublished ?? "";
      const bd = b.datePublished ?? "";
      return bd.localeCompare(ad);
    })
    .slice(0, limit);
}

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const crumbs = breadcrumbSchema(
    nestedBreadcrumbs([{ name: "Blog", slug: "blog" }], post.title, post.slug)
  );
  const article = articleSchema({
    headline: post.title,
    description: post.metaDescription,
    slug: post.slug,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authorName: post.author,
    image: post.image,
  });
  const relatedService = pickRelatedService(post);
  const relatedPosts = pickRelatedPosts(post.slug);

  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="pp-page-hero bg-[var(--pp-night)] px-5 pt-5  text-white sm:px-8 lg:px-10 ">
        <HeroBackdrop />
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Planet Pooch Blog</p>
              <h1 className="pp-hero-title text-white">{post.title}</h1>
            </div>
            <div className="pp-hero-copy">
              {post.intro ? <p className="pp-hero-tagline">{post.intro}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <article className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: post.title },
            ]}
            className="mb-6"
          />
          <Link
            href="/blog"
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75 transition hover:text-[var(--pp-night)]"
          >
            ← Back to Blog
          </Link>
          {post.datePublished ? (
            <time dateTime={post.datePublished} className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/65">
              {new Date(`${post.datePublished}T12:00:00`).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          ) : null}

          {post.hasFullContent && post.sections ? (
            <div className="mt-10 grid gap-10">
              {post.sections.map((section, i) => (
                <section key={section.heading ?? i}>
                  {section.heading ? (
                    <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.paragraphs ? (
                    <div className="mt-4 grid gap-4 text-base leading-8 text-[rgba(47,42,39,0.82)]">
                      {section.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2 text-base leading-7 text-[rgba(47,42,39,0.82)]">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <ArrowRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--pp-main)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-5 text-base leading-8 text-[rgba(47,42,39,0.82)]">
              <p>
                We&apos;re updating this article as part of our site migration. The full post will
                be back online soon — in the meantime, reach out by phone or email if there&apos;s
                something specific you wanted to read about.
              </p>
              <p>
                You can also browse our most popular articles below, or get in touch about your
                dog&apos;s next visit.
              </p>
            </div>
          )}

          <section className="mt-14 border border-[rgba(50,73,83,0.18)] bg-white/60 p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              Curious about a service?
            </p>
            <h2 className="mt-2 text-2xl text-[var(--pp-ink)] sm:text-3xl">
              {relatedService.label}
            </h2>
            <p className="mt-3 text-base leading-7 text-[rgba(47,42,39,0.78)]">
              {relatedService.description}
            </p>
            <Link
              href={relatedService.href}
              className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--pp-night)] transition hover:text-[var(--pp-main)]"
            >
              Explore {relatedService.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {relatedPosts.length > 0 ? (
            <section className="mt-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                Related reads
              </p>
              <h2 className="mt-2 text-2xl text-[var(--pp-ink)] sm:text-3xl">More from the blog</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}/`}
                      className="block h-full border border-[rgba(50,73,83,0.18)] bg-white/60 p-5 transition hover:border-[var(--pp-main)] hover:bg-white/85"
                    >
                      <h3 className="text-base leading-snug text-[var(--pp-ink)] sm:text-lg">
                        {p.title}
                      </h3>
                      {p.metaDescription ? (
                        <p className="mt-2 text-sm leading-6 text-[rgba(47,42,39,0.72)] line-clamp-3">
                          {p.metaDescription}
                        </p>
                      ) : null}
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]">
                        Read
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[rgba(50,73,83,0.22)] bg-white/65 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
            >
              More articles
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book/"
              className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book your dog&apos;s next visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />

      <StickyMobileCta />

      <script {...jsonLdAttrs(article)} />
      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
