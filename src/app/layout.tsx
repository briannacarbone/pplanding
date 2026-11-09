import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Lora, Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "../lib/site";
import { Analytics } from "./analytics";
import { MetaPixel } from "./meta-pixel";
import "./globals.css";

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const displaySerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const heroSerif = Lora({
  subsets: ["latin"],
  style: "normal",
  weight: "variable",
  variable: "--font-hero-description",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaults.homeTitle,
    template: SITE.defaults.titleTemplate,
  },
  description: SITE.defaults.homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    locale: "en_US",
    url: SITE.url,
    title: SITE.defaults.homeTitle,
    description: SITE.defaults.homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaults.homeTitle,
    description: SITE.defaults.homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { email: false, telephone: false, address: false },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#324953",
  width: "device-width",
  initialScale: 1,
};

const businessDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: SITE.name,
  description: SITE.defaults.homeDescription,
  url: SITE.url,
  telephone: SITE.phone.e164,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image.png`,
  logo: `${SITE.url}/planet-pooch-logo.png`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Andy Gonzaga",
    url: `${SITE.url}/andy/`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.legalName}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`
  )}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: businessDays,
      opens: "07:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: businessDays,
      opens: "13:30",
      closes: "19:00",
    },
  ],
  areaServed: [
    ...SITE.serviceArea.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: `${county}, NY`,
    })),
    { "@type": "Place", name: "The Hamptons" },
    { "@type": "Place", name: "Long Island, NY" },
  ],
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.youtube,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.reviews.rating,
    reviewCount: SITE.reviews.count,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className={`${displaySerif.variable} ${bodySans.variable} ${heroSerif.variable} min-h-full flex flex-col`}>
        <a
          href="#page-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#324953] focus:shadow-lg"
        >
          Skip to content
        </a>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-608173544"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-608173544');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Analytics />
        <MetaPixel />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
