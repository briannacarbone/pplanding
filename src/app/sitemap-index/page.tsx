import { HeroBackdrop } from "../hero-backdrop";
import type { Metadata } from "next";
import Link from "next/link";
import { Libre_Baskerville, Manrope } from "next/font/google";
import { mainServicePages } from "../../lib/content/main-services";
import { contentPages } from "../../lib/content/pages";
import { prosePages } from "../../lib/content/prose";
import { towns } from "../../lib/content/towns";
import type { TownPage } from "../../lib/content/towns";
import { nassauTowns, REGION_LABELS } from "../../lib/content/nassau-towns";
import type { NassauSubRegion, NassauTownPage } from "../../lib/content/nassau-towns";
import { blogPosts } from "../../lib/content/blog";
import type { ContentPage } from "../../lib/content/types";
import { breadcrumbSchema, homeBreadcrumbs, jsonLdAttrs } from "../../lib/schema";
import { Breadcrumbs } from "../breadcrumbs";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

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
  title: { absolute: "Site Map | Planet Pooch Pet Resort" },
  description:
    "Browse every page on Planet Pooch — services, town pages across Nassau County, blog, and policies.",
  alternates: { canonical: "/sitemap-index/" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">{title}</h2>
      <div className="mt-5 grid gap-2 text-sm leading-7 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function PageLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-[rgba(47,42,39,0.82)] transition hover:text-[var(--pp-main)]"
    >
      {label}
    </Link>
  );
}

export default function SiteMapPage() {
  const crumbs = breadcrumbSchema(homeBreadcrumbs("Site Map", "sitemap-index"));

  const groupedNassau: Record<NassauSubRegion, NassauTownPage[]> = {
    "north-shore": [],
    "central-nassau": [],
    "south-shore": [],
  };
  for (const t of Object.values(nassauTowns)) groupedNassau[t.subRegion].push(t);
  for (const k of Object.keys(groupedNassau) as NassauSubRegion[]) {
    groupedNassau[k].sort((a, b) => a.town.localeCompare(b.town));
  }

  const standalone = (Object.values(contentPages) as ContentPage[]).filter(
    (p) => !p.canonicalSlug || p.canonicalSlug === p.slug
  );

  const featuredBlog = Object.values(blogPosts).filter((p) => p.hasFullContent);
  const archiveBlog = Object.values(blogPosts).filter((p) => !p.hasFullContent);

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
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Index</p>
              <h1 className="pp-hero-title text-white">Site Map</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">
                Every page on planet-pooch.com — services, town pages across Nassau County, the blog, and policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Site Map" }]}
            className="mb-6"
          />
          <Section title="Main Services">
            {Object.values(mainServicePages).map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
            <PageLink href="/contact/" label="Contact" />
          </Section>

          <Section title="Other Pages">
            {standalone.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Town Pages — Service Areas">
            {(Object.values(towns) as TownPage[]).map((p) => (
              <PageLink
                key={p.slug}
                href={`/${p.slug}/`}
                label={`${p.town}${p.region ? `, ${p.region}` : ""} — ${p.service.replace(/-/g, " ")}`}
              />
            ))}
          </Section>

          {(Object.keys(groupedNassau) as NassauSubRegion[]).map((region) => (
            <Section key={region} title={`Nassau County — ${REGION_LABELS[region]}`}>
              {groupedNassau[region].map((p) => (
                <PageLink
                  key={p.slug}
                  href={`/${p.slug}/`}
                  label={`Dog Services in ${p.town}, NY`}
                />
              ))}
            </Section>
          ))}

          <Section title="Featured Articles">
            {featuredBlog.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Blog Archive">
            {archiveBlog.map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>

          <Section title="Policies & Legal">
            {Object.values(prosePages).map((p) => (
              <PageLink key={p.slug} href={`/${p.slug}/`} label={p.title} />
            ))}
          </Section>
        </div>
      </section>

      <SiteFooter />

      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
