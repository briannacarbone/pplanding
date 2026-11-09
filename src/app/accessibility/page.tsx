import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/site";
import { SiteFooter } from "../site-footer";

export const metadata: Metadata = {
  title: "Accessibility and help",
  description: "Contact Planet Pooch for help accessing website information or booking pet care.",
  alternates: { canonical: "/accessibility/" },
};

export default function AccessibilityPage() {
  return <>
    <main id="main" tabIndex={-1} className="mx-auto w-full max-w-3xl px-6 py-12 text-[var(--pp-ink)]">
      <Link href="/" className="inline-flex min-h-11 items-center underline!">Planet Pooch home</Link>
      <h1 id="page-content" tabIndex={-1} className="mt-8 text-4xl">Accessibility and help</h1>
      <p className="mt-6 text-lg leading-8">We are working to make our public website easier for people with disabilities to use. Our accessibility review and improvements are ongoing. We have not yet verified full conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.</p>
      <h2 className="mt-10 text-2xl">Get help or report a barrier</h2>
      <p className="mt-4 leading-8">If you have difficulty reading information, using a form, or booking pet care, contact us using whichever method works for you.</p>
      <ul className="mt-4 space-y-3">
        <li><a href={SITE.phone.href} className="inline-flex min-h-11 items-center underline!">Call {SITE.phone.display}</a></li>
        <li><a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center break-all underline!">Email {SITE.email}</a></li>
      </ul>
      <p className="mt-4 leading-8">Please include the page address, what you were trying to do, and the problem you encountered. You may also tell us your preferred way to receive help. You do not need to share a diagnosis or medical information.</p>
      <h2 className="mt-10 text-2xl">External forms and media</h2>
      <p className="mt-4 leading-8">Some booking forms, maps, and videos use services provided by other companies. If an embedded service presents a barrier, please contact us for help with the information or pet-care service you need.</p>
    </main>
    <SiteFooter />
  </>;
}
