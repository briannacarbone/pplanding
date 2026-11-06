import Image from "next/image";
import Link from "next/link";
import planetPoochLogo from "../../public/planet-pooch-logo.png";
import { desktopNavItems } from "../lib/nav";
import { NavDropdown } from "./nav-dropdown";
import { MobileMenu } from "./mobile-menu";
import { BookNowModal } from "./book-now-modal";

type SiteHeaderProps = {
  /** Where the Book Now modal's "Get Started" link points. Defaults to /book/. */
  ctaHref?: string;
};

/**
 * Site-wide header. Renders the logo, primary nav, and Book Now CTA.
 *
 * Assumes a dark background behind it (handled by the parent — either a
 * dark hero image with overlay, or a solid dark band). Text is white.
 *
 * Use this in every page so the navigation is identical across the site.
 */
export function SiteHeader({ ctaHref = "/book/" }: SiteHeaderProps = {}) {
  return (
    <header className="flex items-center justify-between border-b border-white/15 pb-5 lg:pb-6">
      <Link className="flex items-center" href="/" aria-label="Planet Pooch — Home">
        <Image
          src={planetPoochLogo}
          alt="Planet Pooch Pet Resort"
          sizes="(min-width: 640px) 220px, 180px"
          className="h-auto w-[180px] brightness-0 invert sm:w-[220px]"
        />
      </Link>
      <nav
        aria-label="Primary"
        className="ml-auto mr-8 hidden items-center gap-x-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 lg:flex"
      >
        {desktopNavItems.map((item) =>
          "items" in item ? (
            <NavDropdown key={item.label} label={item.label} items={item.items} />
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link transition hover:text-white"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
      <div className="hidden shrink-0 items-center gap-2 whitespace-nowrap lg:flex">
        <BookNowModal ctaHref={ctaHref} className="pp-cta pp-cta-sm" />
      </div>
      <MobileMenu ctaHref={ctaHref} />
    </header>
  );
}
