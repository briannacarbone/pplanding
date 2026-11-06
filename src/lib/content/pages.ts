import { groomingAddons, groomingPackages } from "./grooming-packages";
import type { ContentPage } from "./types";

/**
 * Standalone ContentPage entries — pages that aren't a main service and
 * aren't consolidated into one. Main service pages live in main-services.ts.
 *
 * Sub-page URLs (pricing, packages, day-in-the-life, events) used to live
 * here as their own entries; they're now 301-redirected to their parent
 * main service page. See next.config.ts for the redirect map.
 */
export const contentPages = {
  // Geo: Hamptons keeps its own URL because it has a distinct keyword
  // target ("Mobile Pet Grooming Hamptons") and a separate pricing tier.
  "pet-grooming-hamptons": {
    slug: "pet-grooming-hamptons",
    title: "Mobile Pet Grooming in the Hamptons",
    eyebrow: "Hamptons Service",
    hero: "We bring the luxury pet spa to your Hamptons home.",
    metaTitle: "Mobile Pet Grooming Hamptons | Planet Pooch",
    metaDescription:
      "Mobile dog and cat grooming throughout the Hamptons. Planet Pooch brings a luxury pet spa to your door — call to set up your pet's next appointment.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "prose",
        title: "We'll make your pets look their best.",
        paragraphs: [
          "At Planet Pooch, we are devoted to providing you and your pets the absolute best service. We understand how important your pet is to your family — and when they come to Planet Pooch, we make them a part of ours.",
          "Planet Pooch is the total solution for all of your pet grooming needs: a mobile pet grooming company that brings a luxury pet spa to your door. Call us today to set up your pet's next grooming appointment.",
        ],
      },
      {
        type: "pricing",
        title: "Hamptons Full Groom with Haircut",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$275"],
          ["16–25 lbs", "$335–$375"],
          ["26–40 lbs", "$375–$425"],
          ["41–60 lbs", "$425–$475"],
          ["61–80 lbs", "$475–$525"],
          ["81 lbs & up", "$525 & up"],
        ],
        note:
          "Hamptons pricing reflects extended travel and service area. Extra charges may apply for matted or impacted coats, special handling, or aggressive behavior.",
      },
      {
        type: "pricing",
        title: "Hamptons Long-Haired Bath",
        intro: "Golden Retriever, Husky, German Shepherd, Pomsky, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["0–20 lbs", "$275"],
          ["21–40 lbs", "$325–$375"],
          ["41–60 lbs", "$375–$425"],
          ["61–80 lbs", "$425–$475"],
          ["81 lbs & up", "$475 & up"],
        ],
      },
      {
        type: "pricing",
        title: "Hamptons Short-Haired Bath",
        intro: "Pug, Beagle, Boxer, Labrador, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 25 lbs", "$220"],
          ["26–45 lbs", "$225–$275"],
          ["46–65 lbs", "$275–$325"],
          ["66–85 lbs", "$325–$375"],
          ["86 lbs & up", "$375 & up"],
        ],
      },
      {
        type: "callout",
        title: "Book your Hamptons appointment",
        body: "Call us to confirm coverage for your specific Hamptons address and schedule.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
    ],
  },

  "cat-experience": {
    slug: "cat-experience",
    title: "The Planet Pooch Cat Experience",
    eyebrow: "Cat Grooming",
    hero: "Specialty 2-on-1 cat grooming brought to your door.",
    metaTitle: "Cat Grooming Long Island | Planet Pooch",
    metaDescription:
      "Mobile cat grooming across Long Island — baths, full grooms, Furminator de-shed, dental care, and Soft Claws application. Two groomers work together for a calm, safe session.",
    image: "/hero-dog.jpg",
    heroCtas: {
      primary: { label: "Book Now", href: "/book/" },
    },
    sections: [
      {
        type: "prose",
        eyebrow: "How it works",
        title: "Two groomers. One calm session.",
        paragraphs: [
          "Cat grooming can be tricky — that's why Planet Pooch sends two cat grooming professionals to work 2-on-1 with your cat. Services are limited to 1–2 days a month, and our grooming unit is set up specifically for cat grooming that day.",
          "Call today for more information and to make your appointment.",
        ],
      },
      {
        type: "iconBullets",
        eyebrow: "Benefits",
        title: "Why cat grooming?",
        icon: "PawPrint",
        items: [
          "Reduces loose fur, decreasing hairballs",
          "Helps prevent matting in long-haired breeds",
          "Replenishes skin and coat",
          "Nail trimming to avoid nails growing into pads",
          "Clean ears to help avoid infections",
          "Cats with medical issues may need grooming help",
          "Our groomers have the skills to wash your cat safely",
        ],
      },
      {
        type: "pricing",
        eyebrow: "Pricing",
        title: "Cat Grooming Services",
        columns: ["Service", "Price"],
        rows: [
          ["Short-Haired Cat Bath", "$225"],
          ["Long-Haired Cat Bath", "$250"],
          ["Short-Haired Cat Groom w/ Haircut", "$250"],
          ["Long-Haired Cat Groom w/ Haircut", "$275"],
          ["Furminator De-shed Treatment", "$50"],
          ["Dental Care", "$50"],
          ["Soft Claws Application", "$50"],
        ],
        note:
          "Additional fees may apply for matted fur, aggressive cats, or fleas/ticks. Most of these fees can be prevented with a regular grooming schedule and flea/tick prevention.",
      },
      {
        type: "callout",
        title: "Ready to book your cat's appointment?",
        body: "Call us today to schedule your cat's grooming session. Services are limited to 1–2 days a month.",
        cta: { label: "Book Now", href: "/book/" },
      },
    ],
  },

  "nassau-pricing": {
    slug: "nassau-pricing",
    title: "Nassau County Grooming Pricing",
    eyebrow: "Mobile Grooming",
    hero: "Full pricing for mobile grooming across Nassau County.",
    metaTitle: "Mobile Grooming Pricing — Nassau County | Planet Pooch",
    metaDescription:
      "Mobile dog and cat grooming pricing for Nassau County — full grooms, baths, Plus and Premium spa upgrades, and à la carte add-ons.",
    image: "/hero-dog.jpg",
    heroCtas: {
      primary: { label: "Book Now", href: "/book/" },
    },
    sections: [
      {
        type: "pricing",
        eyebrow: "Pricing",
        title: "Full Groom Pricing",
        intro: "Shihtsu, Yorkie, Doodle, Poodle, and similar breeds. The Hamptons uses a separate rate card.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$150–$165"],
          ["16–25 lbs", "$165–$200"],
          ["26–40 lbs", "$200–$235"],
          ["41–60 lbs", "$235–$270"],
          ["61–80 lbs", "$270–$305"],
          ["81 lbs & up", "$305 & up"],
        ],
        note:
          "Prices are based on pets groomed on a regular basis. Extra charges may apply for matted or impacted coats, special handling, or aggressive behavior.",
        cta: { label: "Check Out Our Add-on Packages", href: "#spa-upgrades" },
      },
      {
        type: "pricingPair",
        eyebrow: "Bath pricing",
        title: "Bath Services",
        tables: [
          {
            title: "Long-Haired Baths",
            intro: "Golden Retriever, Husky, German Shepherd, Pomsky, and similar breeds.",
            columns: ["Weight", "Price"],
            rows: [
              ["Up to 20 lbs", "$150–$165"],
              ["21–40 lbs", "$165–$200"],
              ["41–60 lbs", "$200–$235"],
              ["61–80 lbs", "$235–$270"],
              ["81 lbs & up", "$270 & up"],
            ],
          },
          {
            title: "Short-Haired Baths",
            intro: "Pug, Beagle, Boxer, Labrador, and similar breeds.",
            columns: ["Weight", "Price"],
            rows: [
              ["Up to 25 lbs", "$110"],
              ["26–45 lbs", "$110–$140"],
              ["46–65 lbs", "$140–$170"],
              ["66–85 lbs", "$170–$200"],
              ["86 lbs & up", "$200 & up"],
            ],
          },
        ],
        cta: { label: "Check Out Our Add-on Packages", href: "#spa-upgrades" },
      },
      groomingPackages,
      groomingAddons,
    ],
  },
  "were-hiring": {
    slug: "were-hiring",
    title: "We're Hiring",
    eyebrow: "Careers",
    hero: "Want to spend your day with dogs? Let's talk.",
    metaTitle: "Careers at Planet Pooch | Long Island Pet Resort",
    metaDescription:
      "Join the Planet Pooch team in Franklin Square, NY. Reach out about grooming, daycare, boarding, training, and front-of-house roles.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "We're always looking for people who love dogs as much as we do. If you're interested in joining our team — whether as a groomer, daycare specialist, boarding caretaker, trainer, or front-of-house staff — get in touch.",
        ],
      },
      {
        type: "list",
        title: "How to apply",
        items: [
          "Email planetpoochpetservices@gmail.com with your resume and the role you're interested in",
          "Or call (516) 993-3603 — ask for the manager on duty",
          "Or stop by 1114 Hempstead Turnpike, Franklin Square, NY 11010",
        ],
      },
      {
        type: "callout",
        title: "Follow us first",
        body:
          "See what a day with us looks like before you apply — Instagram, Facebook, and YouTube under @planetpoochpetservices.",
        cta: { label: "Email us", href: "mailto:planetpoochpetservices@gmail.com" },
      },
    ],
  },

  partners: {
    slug: "partners",
    title: "Partners & Resources",
    eyebrow: "Resources",
    hero: "Trusted local pet businesses we recommend.",
    metaTitle: "Pet Care Partners & Resources | Planet Pooch",
    metaDescription:
      "Trusted local veterinary care, animal rescues, and pet shops Planet Pooch partners with on Long Island.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Pet care is bigger than any one business. We partner with vetted local veterinarians, rescues, and pet shops to make sure our clients have a full network of support.",
        ],
      },
      {
        type: "list",
        title: "Veterinary care",
        items: [
          "A & A Veterinary Hospital — 414 Franklin Ave, Franklin Square, NY 11010 — (516) 437-7222",
        ],
      },
      {
        type: "callout",
        title: "Run a pet business and want to partner?",
        body:
          "Veterinary offices, pet stores, rescues, and pet service providers — reach out about being featured on our resource page.",
        cta: { label: "Email us", href: "mailto:planetpoochpetservices@gmail.com" },
      },
    ],
  },

  "thank-you": {
    slug: "thank-you",
    title: "Thank you!",
    eyebrow: "Confirmation",
    hero: "We'll be in touch shortly.",
    metaTitle: "Thank You | Planet Pooch Pet Resort",
    metaDescription:
      "We've received your inquiry. Our team will reach out to confirm scheduling and next steps.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Thanks for reaching out. We've received your message and our team will get back to you as soon as possible during business hours.",
        ],
      },
      {
        type: "callout",
        title: "Need us sooner?",
        body: "Call us directly at (516) 993-3603 or email planetpoochpetservices@gmail.com.",
        cta: { label: "Back to home", href: "/" },
      },
    ],
  },

  blog: {
    slug: "blog",
    title: "Planet Pooch Blog",
    eyebrow: "Blog",
    hero: "Notes on grooming, daycare, training, and life with dogs.",
    metaTitle: "Planet Pooch Blog | Mobile Grooming, Daycare, Training",
    metaDescription:
      "Stories and how-tos from the Planet Pooch team — grooming tips, daycare advice, seasonal pet care, and behind-the-scenes from our Franklin Square resort.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Our team writes about what we see day to day — grooming questions we get asked again and again, the science behind enrichment, seasonal pet care, and stories from the resort.",
          "Individual posts are coming back online soon. In the meantime, you can follow us for everyday updates.",
        ],
      },
      {
        type: "callout",
        title: "Follow along while we rebuild the archive",
        body:
          "Find us on Instagram, Facebook, and YouTube as @planetpoochpetservices for daily updates from the resort and the road.",
      },
    ],
  },

} satisfies Record<string, ContentPage>;

export type ContentPageSlug = keyof typeof contentPages;
