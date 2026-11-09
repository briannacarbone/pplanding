import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";
import { mainServicePages } from "../lib/content/main-services";
import { contentPages } from "../lib/content/pages";
import type { ContentPage } from "../lib/content/types";
import { prosePages } from "../lib/content/prose";
import { nassauTowns } from "../lib/content/nassau-towns";
import { towns } from "../lib/content/towns";
import { blogPosts } from "../lib/content/blog";

type SitemapEntry = NonNullable<MetadataRoute.Sitemap>[number];

const ROOT_PRIORITY = 1.0;
const SERVICE_PRIORITY = 0.9;
const SUBPAGE_PRIORITY = 0.7;
const SUPPORT_PRIORITY = 0.5;
const ARCHIVE_PRIORITY = 0.4;

type SitemapOptions = {
  images?: string[];
  lastModified?: SitemapEntry["lastModified"];
};

// Always emit URLs with a trailing slash to match WordPress / Yoast canonicals.
// Root path stays as `/`; everything else gets `/.../`.
const make = (
  path: string,
  priority: number,
  changeFrequency: SitemapEntry["changeFrequency"],
  options: SitemapOptions = {},
): SitemapEntry => {
  const normalized = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const { images, lastModified } = options;

  return {
    url: `${SITE.url}${normalized}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((src) => `${SITE.url}${src}`) } : {}),
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];

  // Homepage
  entries.push(
    make("/", ROOT_PRIORITY, "weekly", {
      images: ["/hero-dog.jpg", "/our-resort-exterior.jpeg"],
    }),
  );

  // Contact + booking
  entries.push(make("/contact", SERVICE_PRIORITY, "monthly"));
  entries.push(make("/accessibility", SUPPORT_PRIORITY, "monthly"));
  entries.push(make("/book", SERVICE_PRIORITY, "monthly"));
  entries.push(
    make("/gallery", SUBPAGE_PRIORITY, "monthly", {
      images: ["/daycare_home.png", "/Enrichment.png", "/events/IMG_3981.jpg"],
    }),
  );

  // HTML site index (helps crawlers discover the long-tail town pages)
  entries.push(make("/sitemap-index", SUPPORT_PRIORITY, "monthly"));

  // Main service pages — top SEO priority
  for (const [slug, page] of Object.entries(mainServicePages)) {
    const heroImage = typeof page.image === "string" ? [page.image] : undefined;
    entries.push(make(`/${slug}`, SERVICE_PRIORITY, "weekly", { images: heroImage }));
  }

  // Standalone content pages (about cluster, Hamptons geo, blog index, etc.)
  // Skip duplicate-canonical pages (canonicalSlug pointing elsewhere) so we don't
  // emit two entries for the same content.
  for (const [slug, page] of Object.entries(contentPages) as Array<[string, ContentPage]>) {
    if (page.canonicalSlug && page.canonicalSlug !== slug) continue;
    entries.push(make(`/${slug}`, SUBPAGE_PRIORITY, "monthly"));
  }

  // Prose pages (legal)
  for (const slug of Object.keys(prosePages)) {
    entries.push(make(`/${slug}`, SUPPORT_PRIORITY, "yearly"));
  }

  // Town landing pages (drive local SEO)
  for (const slug of Object.keys(towns)) {
    entries.push(make(`/${slug}`, SUBPAGE_PRIORITY, "monthly"));
  }

  // Nassau County all-services town pages
  for (const slug of Object.keys(nassauTowns)) {
    entries.push(make(`/${slug}`, SUBPAGE_PRIORITY, "monthly"));
  }

  // Blog posts — featured posts higher priority than archive stubs
  for (const [slug, post] of Object.entries(blogPosts)) {
    entries.push(
      make(`/${slug}`, post.hasFullContent ? SUBPAGE_PRIORITY : ARCHIVE_PRIORITY, "monthly", {
        lastModified: post.dateModified ?? post.datePublished,
      }),
    );
  }

  return entries;
}
