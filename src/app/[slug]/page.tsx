import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDispatchSlugs, getDispatchEntry } from "../../lib/content/registry";
import { NassauTownPageTemplate } from "../nassau-town-page-template";
import { TownPageTemplate } from "../town-page-template";
import { BlogPostTemplate } from "../blog-post-template";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDispatchSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDispatchEntry(slug);
  if (!entry) return {};

  if (entry.type === "blog") {
    const post = entry.data;
    const image = post.image ?? "/opengraph-image.png";
    return {
      title: { absolute: post.metaTitle },
      description: post.metaDescription,
      alternates: { canonical: `/${slug}/` },
      authors: [{ name: post.author ?? "Planet Pooch Pet Resort" }],
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `/${slug}/`,
        siteName: "Planet Pooch Pet Resort",
        locale: "en_US",
        type: "article",
        publishedTime: post.datePublished,
        modifiedTime: post.dateModified ?? post.datePublished,
        authors: [post.author ?? "Planet Pooch Pet Resort"],
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        title: post.metaTitle,
        description: post.metaDescription,
        images: [image],
      },
    };
  }

  const data = entry.data;
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${slug}/`,
      type: "website",
    },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const entry = getDispatchEntry(slug);
  if (!entry) notFound();

  switch (entry.type) {
    case "town":
      return <TownPageTemplate page={entry.data} />;
    case "nassau-town":
      return <NassauTownPageTemplate page={entry.data} />;
    case "blog":
      return <BlogPostTemplate post={entry.data} />;
  }
}
