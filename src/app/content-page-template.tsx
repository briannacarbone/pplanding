import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "./booking-link";
import {
  ArrowRight, Bath, Brush, BrushCleaning, Camera, Check, ChevronDown, Clock, Dog, Droplets, Ear, Eye,
  Footprints, Heart, PawPrint, Scissors, Sparkles, Trees, Truck, Users,
  Utensils, Wind, X,
} from "lucide-react";
import type { ContentPage, ContentSection } from "../lib/content/types";
import { towns, type TownPage } from "../lib/content/towns";
import {
  breadcrumbSchema,
  faqSchema,
  homeBreadcrumbs,
  jsonLdAttrs,
  serviceSchema,
} from "../lib/schema";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Slideshow } from "./slideshow";
import { BookNowModal } from "./book-now-modal";
import { StickyMobileCta } from "./sticky-mobile-cta";
import { EventCalendarView } from "./event-calendar-view";
import { GroupTrainingSchedule } from "./group-training-schedule";

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

function BowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M11 12c-2.7-3.4-6.2-4.5-8-2.7-1.3 1.3-.9 3.8.8 5.2 2.1 1.7 5 .4 7.2-2.5Z" />
      <path d="M13 12c2.7-3.4 6.2-4.5 8-2.7 1.3 1.3.9 3.8-.8 5.2-2.1 1.7-5 .4-7.2-2.5Z" />
      <path d="M10.3 10.7h3.4v2.6h-3.4z" />
      <path d="m8.2 14.2-1 5.2 3.2-1.3L12 20.5l1.6-2.4 3.2 1.3-1-5.2" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PawPrint, Footprints, Dog, Ear, Bath, Droplets, Wind, Brush, BrushCleaning, Scissors, BowIcon,
  Trees, Users, Sparkles, Eye, Heart, Camera, Utensils, Clock, Truck,
};

type ContentPageTemplateProps = {
  page: ContentPage;
};

const sectionPadding = "px-5 py-14 sm:px-8 lg:px-10 lg:py-20";

function SectionEyebrow({ eyebrow, title, intro }: { eyebrow?: string; title?: string; intro?: string }) {
  if (!eyebrow && !title && !intro) return null;
  return (
    <div className="mb-8 max-w-5xl">
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">{title}</h2>
      ) : null}
      {intro ? (
        <p className="mt-4 text-base leading-8 text-[rgba(47,42,39,0.78)]">{intro}</p>
      ) : null}
    </div>
  );
}

function SectionRenderer({ section, index }: { section: ContentSection; index: number }) {
  const tone = index % 2 === 0 ? "bg-[var(--pp-cream)]" : "bg-white/55";

  switch (section.type) {
    case "prose": {
      const proseWidth = section.width === "wide" ? "max-w-5xl" : "max-w-3xl";
      const outerWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      const proseContent = (
        <>
          <SectionEyebrow eyebrow={section.eyebrow} title={section.title} />
          <div className={`grid ${section.highlights?.length || section.image ? "" : proseWidth} gap-5 text-base leading-8 text-[rgba(47,42,39,0.82)]`}>
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {section.highlights?.length ? (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {section.highlights.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/65 px-4 py-3">
                    {Icon ? (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                        <Icon className="h-4.5 w-4.5 stroke-[1.5] text-[var(--pp-main)]" />
                      </div>
                    ) : null}
                    <span className="text-sm font-medium text-[var(--pp-ink)]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          ) : null}
          {section.cta ? (
            <div className="mt-10 flex justify-center">
              <Link href={section.cta.href}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
              >
                {section.cta.label}
                <ChevronDown className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </>
      );
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${outerWidth}`}>
            {section.image ? (
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>{proseContent}</div>
                <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(50,73,83,0.12)]">
                  <Image
                    src={section.image}
                    alt={section.imageAlt ?? section.title ?? "Planet Pooch"}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              proseContent
            )}
            {section.calloutCard ? (
              <div className={`mt-10 rounded-xl p-7 ${section.calloutCard.theme === "mint" ? "bg-[var(--pp-mint)] text-[var(--pp-ink)]" : "bg-slate-800 text-white"}`}>
                <h3 className="text-lg font-bold">{section.calloutCard.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${section.calloutCard.theme === "mint" ? "text-[var(--pp-ink)]" : "text-white/80"}`}>{section.calloutCard.body}</p>
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "list":
    case "checklist": {
      const Bullet = section.type === "checklist" ? Check : null;
      const image = section.type === "checklist" ? section.image : undefined;
      const imageAlt = section.type === "checklist" ? section.imageAlt : undefined;
      const list = (
        <ul className="grid gap-3">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border border-[rgba(50,73,83,0.1)] bg-white/65 px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
            >
              {Bullet ? <Bullet className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" /> : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            {image ? (
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div>
                  <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                  {list}
                </div>
                <div className="relative aspect-[3/4] overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
                  <Image
                    src={image}
                    alt={imageAlt ?? section.title ?? "Planet Pooch"}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <>
                <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
                <div className="max-w-3xl">{list}</div>
              </>
            )}
          </div>
        </section>
      );
    }

    case "pricing":
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                    {section.columns.map((col) => (
                      <th key={col} className="px-5 py-3 text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr
                      key={row.join("|")}
                      className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="px-5 py-4 leading-7">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">
                {section.note}
              </p>
            ) : null}
            {section.cta ? (
              <div className="mt-8 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "pricingPair":
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="grid gap-8 lg:grid-cols-2">
              {section.tables.map((table) => (
                <div key={table.title}>
                  <h3 className="mb-2 text-xl leading-tight text-[var(--pp-ink)]">{table.title}</h3>
                  {table.intro ? (
                    <p className="mb-4 text-sm text-[rgba(47,42,39,0.72)]">{table.intro}</p>
                  ) : null}
                  <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/65">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                          {table.columns.map((col) => (
                            <th key={col} className="px-5 py-3 text-left">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, i) => (
                          <tr
                            key={row.join("|")}
                            className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                          >
                            {row.map((cell, j) => (
                              <td key={j} className="px-5 py-4 leading-7">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {table.note ? (
                    <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">{table.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-8 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "tieredPricing": {
      const tierCount = section.tiers.length;
      const gridCols =
        tierCount === 3
          ? "md:grid-cols-3"
          : tierCount >= 4
            ? "md:grid-cols-2 lg:grid-cols-4"
            : "md:grid-cols-2";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className={`grid gap-5 ${gridCols} lg:items-stretch`}>
              {section.tiers.map((tier) => {
                const uniformDark = section.uniformStyle === "dark";
                const dark = uniformDark || tier.featured;
                const elevated = tier.featured && !uniformDark;
                return (
                  <article
                    key={tier.name}
                    className={`relative flex flex-col gap-4 border p-6 ${
                      elevated
                        ? "z-10 border-[var(--pp-mint)] bg-[var(--pp-night)] text-white shadow-[0_30px_80px_rgba(50,73,83,0.32)] ring-2 ring-[var(--pp-mint)]/50 lg:scale-[1.04]"
                        : dark
                          ? "border-[var(--pp-mint)]/40 bg-[var(--pp-night)] text-white"
                          : "border-[rgba(50,73,83,0.12)] bg-white/65 text-[var(--pp-ink)]"
                    }`}
                  >
                    {tier.badge ? (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--pp-mint)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--pp-night)] shadow-[0_6px_20px_rgba(50,73,83,0.25)]">
                        {tier.badge}
                      </span>
                    ) : null}
                    <header>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                          dark ? "text-[var(--pp-mint)]" : "text-[var(--pp-main)]/75"
                        }`}
                      >
                        {tier.name}
                      </p>
                      <p className="mt-3 text-3xl font-semibold leading-tight">{tier.price}</p>
                      {tier.cadence ? (
                        <p className={`mt-1 text-xs ${dark ? "text-white/70" : "text-[rgba(47,42,39,0.6)]"}`}>
                          {tier.cadence}
                        </p>
                      ) : null}
                      {tier.description ? (
                        <p
                          className={`mt-3 text-sm font-bold leading-6 ${
                            dark ? "text-white/80" : "text-[rgba(47,42,39,0.78)]"
                          }`}
                        >
                          {tier.description}
                        </p>
                      ) : null}
                    </header>
                    <ul className="grid gap-2 text-sm leading-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check
                            className={`mt-1 h-4 w-4 shrink-0 ${
                              dark ? "text-[var(--pp-mint)]" : "text-[var(--pp-main)]"
                            }`}
                          />
                          <span className={dark ? "text-white/85" : "text-[rgba(47,42,39,0.8)]"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
            {section.note ? (
              <div className={`mt-8 rounded-2xl px-6 py-5 text-sm font-bold ${section.title === "Birthday Parties" ? "bg-[var(--pp-mint)] text-[var(--pp-ink)]" : "bg-lime-100 text-lime-900"}`}>
                {section.note}
              </div>
            ) : null}
            {section.secondaryCard ? (
              <article className="mt-8 flex flex-col gap-5 border border-[rgba(50,73,83,0.12)] bg-white p-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  {section.secondaryCard.eyebrow ? (
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                      {section.secondaryCard.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-2xl leading-tight text-[var(--pp-ink)]">
                    {section.secondaryCard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                    {section.secondaryCard.body}
                  </p>
                </div>
                {section.secondaryCard.cta ? (
                  <Link
                    href={section.secondaryCard.cta.href}
                    className="inline-flex shrink-0 items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                  >
                    {section.secondaryCard.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ) : null}
          </div>
        </section>
      );
    }

    case "groupTraining":
      return (
        <section
          id={section.id}
          className={`${tone} px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14`}
        >
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />

            <div className="grid gap-5 md:grid-cols-2">
              {section.pricing.map((price) => (
                <article
                  key={price.name}
                  className="border border-[var(--pp-mint)]/40 bg-[var(--pp-night)] p-6 text-white"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl leading-tight">{price.name}</h3>
                      {price.note ? (
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--pp-mint)]">
                          {price.note}
                        </p>
                      ) : null}
                    </div>
                    <p className="text-3xl font-semibold leading-none">
                      {price.price}
                      {price.originalPrice ? (
                        <span className="ml-2 text-base font-normal text-white/45 line-through">
                          {price.originalPrice}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/75">{price.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl leading-tight text-[var(--pp-ink)]">Classes for every stage</h3>
              <div className="mt-6 grid gap-px overflow-hidden border border-[rgba(50,73,83,0.12)] bg-[rgba(50,73,83,0.12)] md:grid-cols-2">
                {section.levels.map((level) => (
                  <article key={level.name} className="bg-white/90 p-6 sm:p-7">
                    <h4 className="text-lg font-bold text-[var(--pp-ink)]">{level.name}</h4>
                    {level.requirement ? (
                      <p className="mt-1.5 text-sm leading-6 text-[rgba(47,42,39,0.62)]">
                        {level.requirement}
                      </p>
                    ) : null}
                    {level.classTitles?.length ? (
                      <div className="mt-5 border-t border-[rgba(50,73,83,0.1)] pt-5">
                        <ol className="grid gap-2.5 text-sm leading-6 text-[var(--pp-ink)]">
                          {level.classTitles.map((title, classIndex) => (
                            <li key={title} className="flex gap-2">
                              <span className="shrink-0 font-bold">Class {classIndex + 1}:</span>
                              <span>{title}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
              <ul className="mt-4 grid gap-1 text-sm font-bold text-[var(--pp-ink)]">
                {section.bookingNotes.map((note) => (
                  <li key={note}>*{note}</li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h3 className="text-2xl leading-tight text-[var(--pp-ink)]">Class Schedule</h3>
              <GroupTrainingSchedule
                schedule={section.schedule}
                scheduleOverrides={section.scheduleOverrides}
                recurringScheduleAdditions={section.recurringScheduleAdditions}
                noClassesOnOrAfter={section.noClassesOnOrAfter}
              />
            </div>

            <article className="mt-10 flex flex-col gap-6 bg-[var(--pp-night)] p-7 text-white lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl leading-tight">{section.callout.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{section.callout.body}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:shrink-0 lg:justify-end">
                {section.callout.ctas.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                  >
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
      );

    case "comparison":
      return (
        <section id={section.id} className={`${section.theme === "mint" ? "bg-[var(--pp-mint)]" : tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {/* Mobile: stacked cards so every price column is visible without side-scrolling. */}
            <div className="grid gap-4 sm:hidden">
              {section.rows.map((row) => (
                <article
                  key={row.label}
                  className="border border-[rgba(50,73,83,0.12)] bg-white/65 p-5"
                >
                  <h3 className="text-base font-semibold text-[var(--pp-ink)]">{row.label}</h3>
                  <dl className="mt-3 grid grid-cols-2 gap-3">
                    {row.values.map((value, j) => (
                      <div key={j}>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pp-main)]/75">
                          {section.columns[j + 1]}
                        </dt>
                        <dd className="mt-1 text-sm text-[rgba(47,42,39,0.82)]">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-[var(--pp-main)]" />
                            ) : (
                              <X className="h-4 w-4 text-[rgba(47,42,39,0.3)]" aria-label="Not included" />
                            )
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <div className="hidden overflow-x-auto border border-[rgba(50,73,83,0.12)] bg-white/65 sm:block">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-[var(--pp-night)] text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                    {section.columns.map((col) => (
                      <th key={col} className="px-5 py-3 text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${i % 2 === 0 ? "bg-white/30" : "bg-[var(--pp-cream)]"} text-[rgba(47,42,39,0.82)]`}
                    >
                      <td className="px-5 py-4 leading-7 font-medium text-[var(--pp-ink)]">
                        {row.label}
                      </td>
                      {row.values.map((value, j) => (
                        <td key={j} className="px-5 py-4 leading-7">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-[var(--pp-main)]" />
                            ) : (
                              <X className="h-4 w-4 text-[rgba(47,42,39,0.3)]" aria-label="Not included" />
                            )
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-3xl text-xs italic leading-6 text-[rgba(47,42,39,0.62)]">
                {section.note}
              </p>
            ) : null}
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "definitions":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <dl className="grid gap-5 md:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.term}
                  className={`flex flex-col border p-6 ${section.highContrast ? "border-[rgba(50,73,83,0.28)] bg-white shadow-[0_10px_28px_rgba(30,45,50,0.10)]" : "border-[rgba(50,73,83,0.12)] bg-white/65"}`}
                >
                  <dt className={`text-[11px] font-bold uppercase tracking-[0.18em] ${section.highContrast ? "text-[var(--pp-main)]" : "text-[var(--pp-main)]/80"}`}>
                    {item.term}
                  </dt>
                  <dd className={`mt-3 text-sm leading-7 ${section.highContrast ? "text-[var(--pp-ink)]" : "text-[rgba(47,42,39,0.82)]"}`}>
                    {item.definition}
                  </dd>
                  {item.cta ? (
                    <Link
                      href={item.cta.href}
                      className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {item.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </section>
      );

    case "timeline": {
      const sideImage = section.imagePosition === "left" && section.image;
      const topImage = section.image && !sideImage;
      const timelineList = (
        <ol className={`grid gap-5 ${section.items.length > 1 && !sideImage ? "lg:grid-cols-2" : ""}`}>
          {section.items.map((item) => (
            <li
              key={`${item.time}-${item.label}`}
              className="flex flex-col border border-[rgba(50,73,83,0.12)] bg-white/65 p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/80">
                  {item.time}
                </span>
              </div>
              <p className="mt-3 text-xl font-semibold text-[var(--pp-ink)]">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{item.body}</p>
              {item.cta ? (
                <Link
                  href={item.cta.href}
                  className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {item.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      );

      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {topImage ? (
              <div className="relative mb-8 aspect-[21/9] overflow-hidden border border-[rgba(50,73,83,0.12)]">
                <Image
                  src={section.image!}
                  alt={section.imageAlt ?? section.title ?? "Planet Pooch"}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            {sideImage ? (
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(50,73,83,0.12)] lg:sticky lg:top-8 lg:self-start">
                  <Image
                    src={section.image!}
                    alt={section.imageAlt ?? section.title ?? "Planet Pooch"}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {timelineList}
              </div>
            ) : (
              timelineList
            )}
          </div>
        </section>
      );
    }

    case "faq":
      return (
        <section className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className="grid gap-4">
              {section.items.map((item, itemIndex) => (
                <details
                  key={item.question}
                  open={itemIndex === 0}
                  className="group border border-[rgba(50,73,83,0.12)] bg-white/65"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-xl font-semibold text-[var(--pp-ink)]">{item.question}</h3>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-[var(--pp-main)] transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{item.answer}</p>
                </details>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "eventCalendar": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <EventCalendarView section={section} />
          </div>
        </section>
      );
    }

    case "iconBullets": {
      const BulletIcon = iconMap[section.icon];
      const itemCount = section.items.length;
      const bulletCols =
        itemCount >= 5
          ? "sm:grid-cols-2 lg:grid-cols-5"
          : itemCount === 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : itemCount === 3
              ? "sm:grid-cols-3"
              : "sm:grid-cols-2";
      const iconBulletsOuterWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${iconBulletsOuterWidth}`}>
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            <div className={`grid gap-5 ${bulletCols}`}>
              {section.items.map((item) => (
                <article key={item} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                    {BulletIcon ? <BulletIcon className="h-6 w-6 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                  </div>
                  <p className="mx-auto mt-3 max-w-[12rem] text-sm leading-6 text-[rgba(47,42,39,0.78)]">
                    {item}
                  </p>
                </article>
              ))}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "featureGrid": {
      const itemCount = section.items.length;
      const featureCols =
        itemCount >= 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : itemCount === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : itemCount === 2
              ? "sm:grid-cols-2"
              : "";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {section.highlight ? (
              <div className="mb-10 rounded-2xl border border-[var(--pp-main)]/15 bg-[var(--pp-mint)]/15 px-6 py-5 max-w-2xl">
                <p className="text-lg font-semibold text-[var(--pp-ink)]">{section.highlight.title}</p>
                <p className="mt-1 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{section.highlight.body}</p>
              </div>
            ) : null}
            <div className={`grid gap-8 ${featureCols}`}>
              {section.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article key={item.title} className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                      {Icon ? <Icon className="h-7 w-7 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                    </div>
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--pp-ink)]">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {item.description}
                    </p>
                    {item.cta ? (
                      <Link
                        href={item.cta.href}
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/85 hover:text-[var(--pp-main)]"
                      >
                        {item.cta.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : null}
                  </article>
                );
              })}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
            {section.ctas?.length ? (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {section.ctas.map((cta) => {
                  const isHash = cta.href.startsWith("#");
                  const Tag = isHash ? "a" : Link;
                  return (
                    <Tag
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex items-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Tag>
                  );
                })}
              </div>
            ) : null}
            {section.calloutCard ? (
              <article className="mt-10 flex flex-col gap-5 border border-[rgba(50,73,83,0.12)] bg-[var(--pp-night)] p-7 text-white lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl leading-tight">{section.calloutCard.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">{section.calloutCard.body}</p>
                </div>
                {section.calloutCard.cta ? (
                  <Link
                    href={section.calloutCard.cta.href}
                    className="inline-flex shrink-0 items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                  >
                    {section.calloutCard.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ) : null}
          </div>
        </section>
      );
    }

    case "slideshow": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {section.images.length > 0 ? (
              <Slideshow images={section.images} />
            ) : null}
          </div>
        </section>
      );
    }

    case "splitCards": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            <SectionEyebrow eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
            {section.image ? (
              <div className="relative mb-8 aspect-[21/9] overflow-hidden border border-[rgba(50,73,83,0.12)]">
                <Image
                  src={section.image}
                  alt={section.imageAlt ?? section.title ?? "Planet Pooch"}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="grid gap-6 lg:grid-cols-2">
              {section.cards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-4 border border-[rgba(50,73,83,0.12)] bg-white/65 p-7"
                >
                  <h3 className="text-2xl font-bold text-[var(--pp-ink)]">{card.title}</h3>
                  <p className="text-sm leading-7 text-[rgba(47,42,39,0.78)]">{card.body}</p>
                  {card.items?.length ? (
                    <ul className="mt-auto grid gap-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[rgba(47,42,39,0.82)]">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
            {section.footerCards?.map((card) => {
              const isDark = card.theme === "dark";
              return (
                <div
                  key={card.title}
                  className={`mx-auto mt-6 max-w-2xl rounded-xl p-7 text-center ${isDark ? "bg-slate-800 text-white" : "bg-[var(--pp-mint)] text-[var(--pp-ink)]"}`}
                >
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  {card.subtitle ? (
                    <p className={`mt-1 text-sm ${card.subtitleBold ? "font-bold" : ""} ${isDark ? "text-white/70" : "text-[var(--pp-ink)]/70"}`}>{card.subtitle}</p>
                  ) : null}
                  {card.items?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className={`rounded-full px-4 py-2 text-sm font-medium ${isDark ? "bg-white/10 text-white/90" : "bg-white/60 text-[var(--pp-ink)]"}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/85 transition hover:text-[var(--pp-main)]"
                >
                  {section.cta.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "benefitSplit": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            {section.calloutCard ? (
              <article id={section.calloutCard.id} className="relative mx-auto mb-12 flex max-w-6xl flex-col items-center gap-8 overflow-hidden rounded-[22px] border border-[rgba(191,232,201,0.38)] bg-[var(--pp-night)] p-7 text-center text-white shadow-[0_28px_80px_rgba(31,39,43,0.28)] ring-1 ring-white/10 before:absolute before:inset-x-7 before:top-0 before:h-1 before:rounded-b-full before:bg-[var(--pp-mint)] before:content-[''] sm:p-9 lg:mb-16">
                <div className="relative z-10 w-full">
                  {section.calloutCard.eyebrow ? (
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
                      {section.calloutCard.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-3 text-[2.25rem] leading-[0.98] sm:text-[2.85rem] lg:text-[3.25rem]">
                    {section.calloutCard.title === "See Pricing For Your Area." ? (
                      <>
                        See <span className="text-[var(--pp-mint)]">Pricing</span> For Your Area.
                      </>
                    ) : (
                      section.calloutCard.title
                    )}
                  </h3>
                  {section.calloutCard.body ? (
                    <p className="mt-4 text-[15px] leading-7 text-white/[0.82]">{section.calloutCard.body}</p>
                  ) : null}
                </div>
                {section.calloutCard.ctas?.length ? (
                  <div className="relative z-10 flex w-full flex-wrap justify-center gap-3">
                    {section.calloutCard.ctas.map((cta) => {
                      const isExternal = cta.href.startsWith("http");
                      const Tag = isExternal ? "a" : Link;
                      return (
                        <Tag
                          key={cta.href}
                          href={cta.href}
                          className="inline-flex min-h-12 min-w-[178px] items-center justify-center gap-2 rounded-full border border-white/20 bg-[var(--pp-mint)] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] shadow-[0_10px_24px_rgba(159,217,173,0.2)] transition hover:bg-[var(--pp-mint-deep)] hover:shadow-[0_12px_28px_rgba(159,217,173,0.28)]"
                        >
                          {cta.label}
                          <ArrowRight className="h-4 w-4" />
                        </Tag>
                      );
                    })}
                  </div>
                ) : null}
              </article>
            ) : null}

            <div className="mx-auto max-w-3xl text-center">
              {section.eyebrow ? (
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                  {section.eyebrow}
                </p>
              ) : null}
              {section.title ? (
                <h2 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-[2.75rem]">
                  {section.title}
                </h2>
              ) : null}
              {section.body ? (
                <p className="mt-5 text-lg leading-8 text-[rgba(47,42,39,0.82)]">
                  {section.body}
                </p>
              ) : null}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
              <div>
                {section.image ? (
                  <div className="relative h-[320px] overflow-hidden rounded-[18px] border border-[rgba(50,73,83,0.12)] shadow-[0_18px_50px_rgba(50,73,83,0.10)] sm:h-[380px] lg:h-[400px] lg:max-h-[420px]">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? "Planet Pooch mobile grooming"}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4">
                {section.items.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <article
                      key={item.title}
                      className="flex items-start gap-4 rounded-[14px] border border-[rgba(50,73,83,0.10)] bg-[#fffdf8] p-6 shadow-[0_12px_30px_rgba(50,73,83,0.05)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/30">
                        {Icon ? <Icon className="h-5 w-5 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[var(--pp-ink)]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-[rgba(47,42,39,0.72)]">{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      );
    }

    case "groupedServices": {
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            {section.eyebrow ? (
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                {section.eyebrow}
              </p>
            ) : null}
            {section.title ? (
              <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
                {section.title}
              </h2>
            ) : null}
            {section.intro ? (
              <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-[rgba(47,42,39,0.78)]">
                {section.intro}
              </p>
            ) : null}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <article
                    key={card.title}
                    className="flex flex-col border border-[rgba(50,73,83,0.10)] bg-white/70 p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--pp-mint)]/25">
                      {Icon ? <Icon className="h-7 w-7 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--pp-ink)]">{card.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[rgba(47,42,39,0.78)]">{card.description}</p>
                  </article>
                );
              })}
            </div>
            {section.cta ? (
              <div className="mt-10 flex justify-center">
                <Link href={section.cta.href}
                  className="inline-flex w-full items-center justify-center gap-2 border border-[var(--pp-mint-deep)] bg-[var(--pp-mint)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)] sm:w-auto"
                >
                  {section.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      );
    }

    case "townLinks": {
      const serviceSet = new Set<string>(section.services);
      // Several services have their own page for the same town (e.g. two
      // Franklin Square variants) — show each town once.
      const seenTowns = new Set<string>();
      const items: TownPage[] = (Object.values(towns) as TownPage[])
        .filter((t) => serviceSet.has(t.service))
        .filter((t) => {
          if (seenTowns.has(t.town)) return false;
          seenTowns.add(t.town);
          return true;
        })
        .slice(0, section.limit ?? 18);
      if (items.length === 0) return null;
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className="mx-auto max-w-7xl">
            {section.eyebrow ? (
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                {section.eyebrow}
              </p>
            ) : null}
            {section.title ? (
              <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)]">{section.title}</h2>
            ) : null}
            {section.intro ? (
              <p className="mt-3 max-w-3xl text-base leading-7 text-[rgba(47,42,39,0.78)]">
                {section.intro}
              </p>
            ) : null}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/${t.slug}/`}
                    className="group flex items-center justify-between border border-[rgba(50,73,83,0.12)] bg-white/65 px-5 py-4 text-sm font-semibold text-[var(--pp-ink)] transition hover:bg-white/90"
                  >
                    <span>
                      {t.town}
                      {t.region && t.town !== t.region ? (
                        <span className="block text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--pp-main)]/65">
                          {t.region}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[var(--pp-main)] transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    }

    case "callout": {
      const calloutOuterWidth = section.wide ? "max-w-[88rem]" : "max-w-7xl";
      return (
        <section id={section.id} className={`${tone} ${sectionPadding}`}>
          <div className={`mx-auto ${calloutOuterWidth}`}>
            <article className="flex flex-col gap-5 border border-[rgba(50,73,83,0.12)] bg-[var(--pp-night)] p-7 text-white lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                {section.eyebrow ? (
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-2 text-2xl leading-tight sm:text-3xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/80">{section.body}</p>
              </div>
              {section.ctas?.length ? (
                <div className="flex flex-wrap gap-3 lg:shrink-0 lg:justify-end">
                  {section.ctas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : section.cta ? (
                <Link
                  href={section.cta.href}
                  className="inline-flex shrink-0 items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  {section.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </article>
          </div>
        </section>
      );
    }
  }
}

export function ContentPageTemplate({ page }: ContentPageTemplateProps) {
  const crumbs = breadcrumbSchema(
    homeBreadcrumbs(page.title, page.canonicalSlug ?? page.slug)
  );
  const service = page.serviceType
    ? serviceSchema({
        name: page.metaTitle,
        description: page.metaDescription,
        slug: page.canonicalSlug ?? page.slug,
        serviceType: page.serviceType,
      })
    : null;
  const faqItems = page.sections.flatMap((s) =>
    s.type === "faq" ? s.items : []
  );
  const faq = faqItems.length > 0 ? faqSchema(faqItems) : null;
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]${page.slug === "dog-daycare" ? " pp-daycare-page" : ""}`}
    >
      <section className="pp-page-hero relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
            src={page.image ?? "/hero-dog.jpg"}
            alt={`${page.title} at Planet Pooch`}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
            preload
          />
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          {page.heroCtas ? (
            <>
              <div id="top" className="pp-hero-content pp-hero-content-with-footer">
                <div className="pp-hero-stack">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--pp-mint)]/85">
                      {page.eyebrow}
                    </p>
                    <h1 className="pp-hero-title text-white">{page.title}</h1>
                  </div>
                  <div className="pp-hero-copy">
                    <p
                      className="pp-hero-tagline"
                    >
                      {page.hero}
                    </p>
                    <div className="pp-hero-actions mt-9 flex flex-col items-start gap-3">
                      {page.slug === "mobile-grooming" && page.heroCtas.primary.label.toLowerCase() !== "book now" ? (
                        <BookNowModal ctaHref={page.heroCtas.primary.href} className="pp-cta" variant="grooming" label={page.heroCtas.primary.label} />
                      ) : (
                        <Link href={page.heroCtas.primary.href} className="pp-cta">
                          {page.heroCtas.primary.label}
                          <span className="pp-cta-arrow" aria-hidden />
                        </Link>
                      )}
                      <a href={page.heroCtas.ghost.href} className="pp-cta-ghost">
                        {page.heroCtas.ghost.label}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-24">
                <div className={`flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 ${page.heroCtas.tertiary ? "justify-center lg:grid lg:grid-cols-3" : "flex-wrap justify-between"}`}>
                  <span className={`items-center gap-3 ${page.heroCtas.tertiary ? "hidden lg:flex" : "flex"}`}>
                    <span aria-hidden className="h-px w-8 bg-white/40" />
                    Scroll to Explore
                  </span>
                  {page.heroCtas.tertiary ? (
                    <a
                      href={page.heroCtas.tertiary.href}
                      className="justify-self-center inline-flex items-center gap-2 border border-[var(--pp-dark-green)] bg-[var(--pp-dark-green)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[var(--pp-dark-green-hover)] hover:bg-[var(--pp-dark-green-hover)]"
                    >
                      {page.heroCtas.tertiary.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  <span className={page.heroCtas.tertiary ? "hidden justify-self-end lg:inline" : ""}>Long Island, New York</span>
                </div>
              </div>
            </>
          ) : (
            <div className="pp-hero-content pp-hero-stack">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">{page.eyebrow}</p>
                <h1 className="pp-hero-title text-white">{page.title}</h1>
              </div>
              <div className="pp-hero-copy">
                <p className="pp-hero-tagline">{page.hero}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {page.sections.map((section, i) => (
        <div
          key={`${section.type}-${i}`}
          className={
            i === 0
              ? "relative -mt-12 overflow-hidden rounded-t-[3rem] bg-[var(--pp-cream)] lg:-mt-14 lg:rounded-t-[4rem]"
              : undefined
          }
          {...(i === 0 ? { id: "overview" } : {})}
        >
          <SectionRenderer section={section} index={i} />
        </div>
      ))}

      <SiteFooter />

      <StickyMobileCta />

      <script {...jsonLdAttrs(crumbs)} />
      {service ? <script {...jsonLdAttrs(service)} /> : null}
      {faq ? <script {...jsonLdAttrs(faq)} /> : null}
    </main>
  );
}
