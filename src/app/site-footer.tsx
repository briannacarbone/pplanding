import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import planetPoochLogo from "../../public/planet-pooch-logo.png";
import { ADDRESS_LINES, SITE } from "../lib/site";

const footerLinks = {
  services: [
    { label: "Mobile Grooming", href: "/mobile-grooming/" },
    { label: "Pet Grooming Hamptons", href: "/pet-grooming-hamptons/" },
    { label: "Daycare", href: "/dog-daycare/" },
    { label: "Boarding", href: "/dog-boarding/" },
    { label: "Training", href: "/dog-training/" },
    { label: "Enrichment", href: "/enrichment/" },
    { label: "Events", href: "/events/" },
  ],
  about: [
    { label: "Gallery", href: "/gallery/" },
    { label: "We're Hiring", href: "/were-hiring/" },
    { label: "Partners", href: "/partners/" },
    { label: "Blog", href: "/blog/" },
  ],
  legal: [
    { label: "Accessibility and help", href: "/accessibility/" },
    { label: "Pet Services Agreement", href: "/agreement/" },
    { label: "Requirements", href: "/requirements/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms", href: "/terms/" },
    { label: "Site Map", href: "/sitemap-index/" },
  ],
} as const;

/**
 * Site-wide footer. Identical on every page so navigation, contact info,
 * and policy links stay consistent.
 */
export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[var(--pp-night)] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-10 lg:pb-10 lg:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
        <div>
          <Image
            src={planetPoochLogo}
            alt="Planet Pooch Pet Resort"
            sizes="190px"
            className="h-auto w-[190px] brightness-0 invert"
          />
          <p
            className="mt-6 max-w-xs text-sm italic leading-relaxed text-white/72"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Mobile grooming across Nassau County and a luxury dog resort serving Long Island —
            devoted to enriching the lives of pets since 2014.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Services
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/85">
            {footerLinks.services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center transition hover:text-white lg:min-h-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            About
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/85">
            {footerLinks.about.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center transition hover:text-white lg:min-h-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Policies
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/85">
            {footerLinks.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center transition hover:text-white lg:min-h-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm text-white/85">
            <a href={SITE.phone.href} className="flex min-h-11 items-center gap-3 transition hover:text-white lg:min-h-0 lg:items-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
              <span>{SITE.phone.display}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex min-h-11 items-center gap-3 transition hover:text-white lg:min-h-0 lg:items-start"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
              <span className="min-w-0 break-all">{SITE.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
              <span>
                {ADDRESS_LINES[0]}
                <br />
                {ADDRESS_LINES[1]}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-center text-xs leading-6 text-white/55 sm:text-left">
          Mobile grooming across Nassau County • Resort services for dogs across Long Island
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="inline-flex min-h-11 items-center transition hover:text-white lg:min-h-0">
              Instagram
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="inline-flex min-h-11 items-center transition hover:text-white lg:min-h-0">
              Facebook
            </a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="inline-flex min-h-11 items-center transition hover:text-white lg:min-h-0">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
