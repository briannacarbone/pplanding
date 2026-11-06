import type { StaticImageData } from "next/image";

export type ContentSection =
  | {
      type: "prose";
      id?: string;
      title?: string;
      eyebrow?: string;
      paragraphs: string[];
      width?: "default" | "wide";
      wide?: boolean;
      highlights?: Array<{ icon: string; label: string }>;
      calloutCard?: { title: string; body: string; theme?: "mint" };
      cta?: { label: string; href: string };
      image?: string | StaticImageData;
      imageAlt?: string;
    }
  | { type: "list"; title?: string; eyebrow?: string; intro?: string; items: string[] }
  | {
      type: "checklist";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: string[];
      image?: string | StaticImageData;
      imageAlt?: string;
    }
  | {
      type: "pricing";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      columns: string[];
      rows: Array<string[]>;
      note?: string;
      cta?: { label: string; href: string };
    }
  | {
      type: "pricingPair";
      id?: string;
      eyebrow?: string;
      title?: string;
      intro?: string;
      tables: Array<{
        title: string;
        intro?: string;
        columns: string[];
        rows: Array<string[]>;
        note?: string;
      }>;
      cta?: { label: string; href: string };
    }
  | {
      type: "tieredPricing";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      tiers: Array<{
        name: string;
        price: string;
        cadence?: string;
        description?: string;
        features: string[];
        featured?: boolean;
        badge?: string;
      }>;
      uniformStyle?: "dark";
      note?: string;
      secondaryCard?: {
        eyebrow?: string;
        title: string;
        body: string;
        cta?: { label: string; href: string };
      };
    }
  | {
      type: "groupTraining";
      id?: string;
      eyebrow?: string;
      title: string;
      intro: string;
      pricing: Array<{
        name: string;
        price: string;
        originalPrice?: string;
        note?: string;
        description: string;
      }>;
      levels: Array<{
        name: string;
        requirement?: string;
        classTitles?: string[];
      }>;
      bookingNotes: string[];
      schedule: Array<{
        day: string;
        rotationStartDate?: string;
        sessions: Array<{
          time: string;
          className: string;
          classNumber?: number;
          rotationDirection?: 1 | -1;
        }>;
      }>;
      scheduleOverrides?: Array<{
        date: string;
        sessions: Array<{ time: string; className: string }>;
      }>;
      recurringScheduleAdditions?: Array<{
        startDate: string;
        endDate: string;
        day: string;
        sessions: Array<{ time: string; className: string }>;
      }>;
      noClassesOnOrAfter?: string;
      callout: {
        title: string;
        body: string;
        ctas: Array<{ label: string; href: string }>;
      };
    }
  | {
      type: "comparison";
      id?: string;
      theme?: "mint";
      title?: string;
      eyebrow?: string;
      intro?: string;
      columns: string[];
      rows: Array<{ label: string; values: Array<boolean | string> }>;
      note?: string;
      cta?: { label: string; href: string };
    }
  | {
      type: "definitions";
      highContrast?: boolean;
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{
        term: string;
        definition: string;
        cta?: { label: string; href: string };
      }>;
    }
  | {
      type: "timeline";
      title?: string;
      eyebrow?: string;
      intro?: string;
      image?: string | StaticImageData;
      imageAlt?: string;
      imagePosition?: "top" | "left";
      items: Array<{
        time: string;
        label: string;
        body: string;
        cta?: { label: string; href: string };
      }>;
    }
  | {
      type: "faq";
      title?: string;
      eyebrow?: string;
      intro?: string;
      items: Array<{ question: string; answer: string }>;
      cta?: { label: string; href: string };
    }
  | {
      type: "eventCalendar";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      cta?: { label: string; href: string };
      events: Array<{
        title: string;
        dateLabel: string;
        description: string;
        location?: string;
        badge?: string;
        note?: string;
        date?: string;
        startDate?: string;
        endDate?: string;
        weekdays?: number[];
        floating?: boolean;
      }>;
    }
  | {
      type: "callout";
      id?: string;
      title: string;
      eyebrow?: string;
      body: string;
      cta?: { label: string; href: string };
      ctas?: Array<{ label: string; href: string }>;
      wide?: boolean;
    }
  | {
      type: "iconBullets";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      icon: string;
      items: string[];
      cta?: { label: string; href: string };
      wide?: boolean;
    }
  | {
      type: "featureGrid";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      highlight?: { title: string; body: string };
      items: Array<{
        icon: string;
        title: string;
        description: string;
        cta?: { label: string; href: string };
      }>;
      cta?: { label: string; href: string };
      ctas?: Array<{ label: string; href: string }>;
      calloutCard?: { title: string; body: string; cta?: { label: string; href: string } };
    }
  | {
      type: "slideshow";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      images: Array<{ src: string | StaticImageData; alt: string }>;
    }
  | {
      type: "splitCards";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      cards: [
        { title: string; body: string; items?: string[] },
        { title: string; body: string; items?: string[] },
      ];
      footerCards?: Array<{ title: string; subtitle?: string; subtitleBold?: boolean; items?: string[]; theme?: "dark" | "mint" }>;
      cta?: { label: string; href: string };
      image?: string | StaticImageData;
      imageAlt?: string;
    }
  | {
      type: "benefitSplit";
      id?: string;
      eyebrow?: string;
      title?: string;
      body?: string;
      image?: string | StaticImageData;
      imageAlt?: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
      calloutCard?: {
        id?: string;
        eyebrow?: string;
        title: string;
        body: string;
        ctas?: Array<{ label: string; href: string }>;
      };
    }
  | {
      type: "groupedServices";
      id?: string;
      eyebrow?: string;
      title?: string;
      intro?: string;
      cards: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
      cta?: { label: string; href: string };
    }
  | {
      type: "townLinks";
      id?: string;
      title?: string;
      eyebrow?: string;
      intro?: string;
      /** Which town-page services to source from. */
      services: Array<"mobile-grooming" | "spa-services" | "in-house-grooming" | "daycare-boarding">;
      /** Optional cap on the number of links rendered. */
      limit?: number;
    };

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  hero: string;
  metaTitle: string;
  metaDescription: string;
  canonicalSlug?: string;
  image?: string | StaticImageData;
  heroCtas?: {
    primary: { label: string; href: string };
    ghost?: { label: string; href: string };
    tertiary?: { label: string; href: string };
  };
  sections: ContentSection[];
  /** When set, emits Service JSON-LD on the page. Used for the main service offerings. */
  serviceType?: string;
};

export type ProsePage = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated?: string;
  intro?: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};
