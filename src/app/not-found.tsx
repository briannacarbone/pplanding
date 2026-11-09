import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return <main id="main" tabIndex={-1} className="mx-auto w-full max-w-2xl px-6 py-20">
    <h1 id="page-content" tabIndex={-1} className="text-4xl">Page not found</h1>
    <p className="mt-6 text-lg">This page may have moved. Visit our home page to explore pet care services or contact us for help.</p>
    <div className="mt-8 flex flex-wrap gap-6">
      <Link href="/" className="pp-cta">Return home</Link>
      <Link href="/contact/" className="inline-flex min-h-11 items-center underline!">Contact Planet Pooch</Link>
    </div>
  </main>;
}
