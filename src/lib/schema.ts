import { SITE } from "./site";

type Crumb = { name: string; item: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: SITE.serviceArea.counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c}, NY`,
    })),
    url: `${SITE.url}/${slug}/`,
  };
}

export function articleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE.url}/${slug}/`,
    mainEntityOfPage: `${SITE.url}/${slug}/`,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#business`,
      name: SITE.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/planet-pooch-logo.png`,
      },
    },
    author: {
      "@type": authorName && authorName !== SITE.name && authorName !== SITE.legalName ? "Person" : "Organization",
      name: authorName ?? SITE.legalName,
    },
    ...(image ? { image: image.startsWith("http") ? image : `${SITE.url}${image}` } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : datePublished ? { dateModified: datePublished } : {}),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function personSchema({
  name,
  role,
  slug,
  description,
  yearStarted,
}: {
  name: string;
  role: string;
  slug: string;
  description?: string;
  yearStarted?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    url: `${SITE.url}/${slug}/`,
    worksFor: { "@id": `${SITE.url}/#business` },
    ...(description ? { description } : {}),
    ...(yearStarted ? { hasOccupation: { "@type": "Occupation", name: role, startDate: String(yearStarted) } } : {}),
  };
}

export function jsonLdAttrs<T>(schema: T) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}

export function homeBreadcrumbs(currentName: string, currentSlug: string): Crumb[] {
  return [
    { name: "Home", item: `${SITE.url}/` },
    { name: currentName, item: `${SITE.url}/${currentSlug}/` },
  ];
}

export function nestedBreadcrumbs(
  parents: Array<{ name: string; slug: string }>,
  currentName: string,
  currentSlug: string
): Crumb[] {
  return [
    { name: "Home", item: `${SITE.url}/` },
    ...parents.map((p) => ({ name: p.name, item: `${SITE.url}/${p.slug}/` })),
    { name: currentName, item: `${SITE.url}/${currentSlug}/` },
  ];
}
