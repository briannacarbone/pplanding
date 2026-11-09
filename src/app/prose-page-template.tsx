import { HeroBackdrop } from "./hero-backdrop";
import { Libre_Baskerville, Manrope } from "next/font/google";
import { ArrowRight } from "lucide-react";
import type { ProsePage } from "../lib/content/types";
import { breadcrumbSchema, homeBreadcrumbs, jsonLdAttrs } from "../lib/schema";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

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

type ProsePageTemplateProps = {
  page: ProsePage;
};

export function ProsePageTemplate({ page }: ProsePageTemplateProps) {
  const crumbs = breadcrumbSchema(homeBreadcrumbs(page.title, page.slug));
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
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">{page.eyebrow}</p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">{page.title}</h1>
            </div>
            <div className="pp-hero-copy">
              {page.intro ? <p className="pp-hero-tagline">{page.intro}</p> : null}
              {page.lastUpdated ? <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/70">Last updated: {page.lastUpdated}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: page.title },
            ]}
            className="mb-6"
          />
          <div className="mt-8 grid gap-10">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl leading-tight text-[var(--pp-ink)] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs ? (
                  <div className="mt-4 grid gap-4 text-base leading-8 text-[rgba(47,42,39,0.8)]">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-base leading-7 text-[rgba(47,42,39,0.8)]">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <ArrowRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--pp-main)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
