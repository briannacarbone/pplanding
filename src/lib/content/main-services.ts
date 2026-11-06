import { groomingAddons, groomingPackages } from "./grooming-packages";
import type { ContentPage } from "./types";

/**
 * The five main service pages, with content from former sub-pages
 * consolidated into single rich pages. Sub-page URLs (e.g., /grooming-pricing/,
 * /boarding-add-ons/, /our-events/) are 301 redirected to these in
 * next.config.ts.
 *
 * Each main service uses ContentPageTemplate so it can render the rich
 * section types (pricing tables, comparison tables, definitions, timelines,
 * FAQs, callouts) that the consolidated content needs.
 */
export const mainServicePages = {
  "mobile-grooming": {
    slug: "mobile-grooming",
    title: "Mobile Grooming",
    eyebrow: "Mobile Grooming",
    hero:
      "Luxury one-on-one grooming brought to your driveway across Long Island and the Hamptons.",
    metaTitle: "Mobile Pet Grooming Long Island | Mobile Dog Groomer",
    metaDescription:
      "Mobile dog and cat grooming across Long Island and the Hamptons — full grooms, baths, Plus and Premium spa upgrades, and in-house grooming for daycare and boarding clients.",
    image: "/Grooming.png",
    serviceType: "Mobile Pet Grooming",
    heroCtas: {
      primary: { label: "Book Now", href: "/book/" },
      tertiary: { label: "View Pricing", href: "#pricing" },
    },
    sections: [
      {
        type: "benefitSplit",
        eyebrow: "Why mobile?",
        title: "Luxury grooming without leaving home.",
        body: "A private, one-on-one grooming experience right outside your door — no car rides, no cages, no stressful salon visit.",
        image: "/grooming-fresh.jpg",
        imageAlt: "Freshly groomed Yorkie with a bow tie at Planet Pooch",
        items: [
          { icon: "Heart", title: "No salon stress", description: "One-on-one grooming right outside your home." },
          { icon: "PawPrint", title: "Great for anxious dogs", description: "A calmer experience for pets who hate the groomer." },
          { icon: "Wind", title: "Hand-dried only", description: "Never cage-dried. Never rushed." },
          { icon: "Truck", title: "Fully equipped van", description: "No hookups needed. Most appointments take about 90 minutes." },
        ],
        calloutCard: {
          id: "pricing",
          eyebrow: "Pricing",
          title: "See Pricing For Your Area.",
          body: "",
          ctas: [
            { label: "Nassau Pricing", href: "/nassau-pricing" },
            { label: "Hamptons Pricing", href: "/pet-grooming-hamptons/" },
            { label: "Cat Pricing", href: "/cat-experience/" },
          ],
        },
      },
      {
        type: "groupedServices",
        eyebrow: "What's included",
        title: "Everything your dog needs to look, feel, and smell amazing.",
        cards: [
          { icon: "Bath", title: "Bath & Clean", description: "Two shampoos, conditioner, ear cleaning, and sanitary care upon request." },
          { icon: "Scissors", title: "Coat & Cut", description: "Breed-appropriate haircut, brushing, fluffing, and hand blow dry." },
          { icon: "Sparkles", title: "Finishing Touches", description: "Nail trim and grind, bow or bandana, and a polished send-home look." },
        ],
        cta: { label: "Book Mobile Grooming", href: "/book/" },
      },
      {
        type: "checklist",
        eyebrow: "Our vans",
        title: "Built for hygiene, climate, and safety.",
        intro:
          "We partner with Wag N Tails and Hanvey Engineering to outfit our grooming vehicles.",
        image: "/van1.jpg",
        imageAlt: "Planet Pooch mobile grooming van",
        items: [
          "Cleaned between every appointment",
          "Built-in equipment, fresh water, and power — you don't need to provide anything.",
          "Built-in restraints and harnesses keep pets secure",
          "Climate Controlled so your pet is completely comfortable on summer and winter",
        ],
      },
      {
        type: "faq",
        eyebrow: "Common questions",
        title: "Mobile grooming FAQs",
        items: [
          {
            question: "Why does mobile grooming cost more than a salon?",
            answer:
              "Mobile grooming is a personalized, attentive session with the highest-quality products and professional groomers — delivered to your driveway. We are not simply a mobile version of an average storefront.",
          },
          {
            question: "How long does an appointment take?",
            answer:
              "Most appointments are finished in 1 to 1½ hours, so your pet is back to their family quickly without sitting in a cage between steps.",
          },
          {
            question: "Will you need to plug into our home?",
            answer:
              "No. Our vans are fully equipped with fresh water and electricity — no hookups required.",
          },
          {
            question: "What is your service area?",
            answer:
              "We service all of Nassau County and the Hamptons.",
          },
          {
            question: "Is there a weight or size limit?",
            answer: "No. Planet Pooch loves and accommodates dogs of all weights and sizes.",
          },
          {
            question: "What if my dog is matted or aggressive?",
            answer:
              "Tell us in advance. Severely matted dogs may need to be shaved for their safety (additional fees apply). Overly aggressive dogs hindering the grooming process may incur additional fees, or in rare cases be refused service.",
          },
          {
            question: "Do we need to be home for the appointment?",
            answer:
              "No. Established clients may leave keys or access codes for convenient service.",
          },
        ],
      },
      {
        type: "townLinks",
        eyebrow: "Service area",
        title: "Mobile grooming towns we cover",
        intro: "Pick your town for local notes, parking specifics, and what our route looks like on the ground. The Hamptons uses a separate rate card.",
        services: ["mobile-grooming", "spa-services"],
      },
      {
        type: "callout",
        title: "Ready to book?",
        body: "Tell us your pet's coat, sensitivities, and preferred haircut style.",
        cta: { label: "Book Now", href: "/book/" },
      },
    ],
  },

  "in-house-grooming": {
    slug: "in-house-grooming",
    title: "In-House Grooming",
    eyebrow: "Grooming",
    hero:
      "Spa-quality grooming for our daycare and boarding guests.",
    metaTitle: "In-House Dog Grooming | Daycare & Boarding | Planet Pooch",
    metaDescription:
      "Professional in-house grooming at our Franklin Square resort, available exclusively to dogs enrolled in daycare or boarding. 20% off when added to a 2+ night stay.",
    image: "/Grooming.png",
    serviceType: "Dog Grooming",
    heroCtas: {
      primary: { label: "Book Now", href: "/book/" },
      tertiary: { label: "View Pricing", href: "#pricing" },
    },
    sections: [
      {
        type: "featureGrid",
        eyebrow: "Services",
        title: "What every groom includes.",
        items: [
          { icon: "PawPrint", title: "Nails", description: "Nail cut and grind for a comfortable, healthy length." },
          { icon: "Dog", title: "Ears Cleaned", description: "Gentle cleaning and plucking upon request." },
          { icon: "Bath", title: "Bath", description: "Two shampoos and a conditioner for a deep clean." },
          { icon: "Droplets", title: "Anal Glands", description: "Expressed upon request for your pet's comfort." },
          { icon: "Wind", title: "Dry", description: "Hand blow dry — never cage-dried." },
          { icon: "BrushCleaning", title: "Brushing", description: "Thorough fluffing and brushing for a polished coat." },
          { icon: "Scissors", title: "Haircut", description: "Wide range of breed-appropriate haircut options." },
          { icon: "BowIcon", title: "Bow", description: "A signature finishing touch before pickup." },
        ],
        calloutCard: {
          title: "Already booked daycare or boarding?",
          body: "Call us anytime to add a groom to an upcoming stay — we'll schedule the appointment around their daycare or boarding day.",
          cta: { label: "Contact us", href: "/contact/" },
        },
      },
      {
        type: "pricing",
        id: "pricing",
        eyebrow: "Pricing",
        title: "Full Groom with Haircut",
        intro: "Shihtsu, Yorkie, Doodle, Poodle, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$95–$115"],
          ["16–25 lbs", "$115–$135"],
          ["26–40 lbs", "$135–$155"],
          ["41–60 lbs", "$155–$175"],
          ["61–80 lbs", "$175–$195"],
          ["81 lbs & up", "$195 & up"],
        ],
        note:
          "Prices are based on pets groomed on a regular basis. Extra charges may apply for matted or impacted coats, special handling, or aggressive behavior.",
      },
      {
        type: "pricing",
        eyebrow: "Pricing",
        title: "In-Between Clean",
        intro: "Dogs must be on a regular 4–6 week grooming schedule to qualify for this service.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$75"],
          ["16–25 lbs", "$75–$95"],
          ["26–45 lbs", "$95–$115"],
          ["46–65 lbs", "$115–$135"],
          ["66–85 lbs", "$135–$155"],
          ["86 lbs & up", "$155 & up"],
        ],
        note:
          "Includes nail cut and grind, ears cleaned, bath, shampoo and conditioner, anal glands expressed upon request, blow dry, brushing, signature bow and bandana, eye trim, paw trim, and sanitary trim.",
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
              ["Up to 20 lbs", "$95–$115"],
              ["21–40 lbs", "$115–$135"],
              ["41–60 lbs", "$135–$155"],
              ["61–80 lbs", "$155–$175"],
              ["81 lbs & up", "$175 & up"],
            ],
          },
          {
            title: "Short-Haired Baths",
            intro: "Pug, Beagle, Boxer, Labrador, and similar breeds.",
            columns: ["Weight", "Price"],
            rows: [
              ["Up to 15 lbs", "$55"],
              ["16–25 lbs", "$55–$75"],
              ["26–45 lbs", "$75–$95"],
              ["46–65 lbs", "$95–$115"],
              ["66–85 lbs", "$115–$135"],
              ["86–105 lbs", "$135–$155"],
              ["106 lbs & up", "$155 & up"],
            ],
          },
        ],
      },
      groomingPackages,
      groomingAddons,
      {
        type: "callout",
        eyebrow: "Stay & save",
        title: "20% off in-house grooming on stays of 2 or more nights",
        body:
          "Add a fresh-from-the-bath finish to any boarding stay of 2+ nights and save 20% off the standard groom price. Just mention grooming when you book.",
        cta: { label: "View boarding", href: "/dog-boarding/" },
      },
      {
        type: "townLinks",
        eyebrow: "Where in-house clients come from",
        title: "In-house grooming for these areas",
        intro: "Dogs from across Nassau visit our Franklin Square resort for in-house grooming bundled with daycare or boarding. A few of the towns we see most often:",
        services: ["in-house-grooming"],
      },
    ],
  },

  "dog-daycare": {
    slug: "dog-daycare",
    title: "Dog Daycare",
    eyebrow: "Daycare",
    hero:
      "A space where your dog feels as relaxed and at home as they do with you.",
    metaTitle: "Dog Daycare Long Island | Group Play & Enrichment | Planet Pooch",
    metaDescription:
      "Interactive dog daycare in Franklin Square, NY. Group play, one-on-one enrichment, puppy socialization, and day-pack pricing for Long Island families.",
    image: "/Daycare.png",
    serviceType: "Dog Daycare",
    heroCtas: {
      primary: { label: "Get Started", href: "/new-client/" },
    },
    sections: [
      {
        type: "featureGrid",
        eyebrow: "Why daycare?",
        title: "More than a drop-off point.",
        intro:
          "Regularly attending an interactive doggy daycare can benefit your dog's health and wellbeing — better social skills, healthy weight, less separation anxiety, and a confidence boost, all just from playing with friends. Our goal is to create a space where your dog feels as relaxed and at home as they do with you.",
        items: [
          {
            icon: "Trees",
            title: "Outdoor Play Yard",
            description:
              "Fresh air, sunshine, and room to run — our outdoor yard gives dogs the open space they crave between rest periods.",
          },
          {
            icon: "Users",
            title: "Small, Hand-Selected Groups",
            description:
              "We match dogs by size, temperament, and play style — never an unstructured free-for-all, so every dog feels safe and comfortable.",
          },
          {
            icon: "Sparkles",
            title: "Enrichment Services",
            description:
              "Treadmill, scent work, agility, and nutrition puzzles for dogs who thrive on one-on-one mental stimulation.",
            cta: { label: "Learn more", href: "/enrichment/" },
          },
        ],
      },
      {
        type: "slideshow",
        eyebrow: "Inside our daycare",
        title: "Room to run, play, and make friends.",
        intro:
          "Our indoor playrooms and secure outdoor yard give every group space for supervised play, fresh air, and comfortable breaks throughout the day.",
        images: [
          {
            src: "/gallery/daycare-playroom.webp",
            alt: "Dogs enjoying supervised play in the spacious Planet Pooch daycare room",
          },
          {
            src: "/gallery/outdoor-dog-play.webp",
            alt: "Dogs running together in the fenced outdoor play yard at Planet Pooch",
          },
          {
            src: "/gallery/indoor-daycare-play.webp",
            alt: "Dogs of different sizes enjoying supervised indoor daycare at Planet Pooch",
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "How It Works",
        title: "From first visit to regular client",
        items: [
          {
            time: "Step 1",
            label: "Free evaluation + first daycare day",
            body:
              "We start with a complimentary evaluation. Staff observe your dog's behavior in our evaluation room as they acclimate to the space, then bring in another dog from a distance and progressively close the gap as comfort increases. Dogs who pass continue into their first day of daycare at no charge.",
            cta: { label: "Get Started", href: "/new-client/" },
          },
        ],
      },
      {
        type: "definitions",
        eyebrow: "Step 2 — Care begins",
        title: "Group Play or Enrichment",
        intro:
          "Based on our evaluation your dog will either be eligible to join Group Play or will have the option to do Enrichment Play.",
        items: [
          {
            term: "Group Play (if your dog thrives socially)",
            definition:
              "Supervised social play with size-and-temperament-matched groups. Separate play areas organized by dog size, with adjustments based on individual play style and energy level.",
          },
          {
            term: "Enrichment Play (if your dog prefers quieter time)",
            definition:
              "One-on-one activities for dogs who don't thrive in group settings. Sensory play, gentle problem-solving, scent work, and treadmill or agility activities tailored to your dog.",
            cta: { label: "Learn more about Enrichment", href: "/enrichment/" },
          },
        ],
      },
      {
        type: "tieredPricing",
        eyebrow: "Pricing",
        title: "Full Day Daycare",
        intro: "Drop off any time during operating hours and stay until 7pm.",
        tiers: [
          {
            name: "Single day",
            price: "$51",
            cadence: "per day",
            features: ["Full day (7am–7pm)", "Group play with daily rest periods"],
          },
          {
            name: "5-Day Pack",
            price: "$226.95",
            cadence: "$45.39 per day",
            features: ["5 full days of daycare", "Expires 30 days after purchase"],
          },
          {
            name: "10-Day Pack",
            price: "$433.50",
            cadence: "$43.35 per day",
            features: ["10 full days of daycare", "Expires 60 days after purchase"],
            featured: true,
            badge: "Most Popular",
          },
          {
            name: "20-Day Pack",
            price: "$846.60",
            cadence: "$42.33 per day",
            features: ["20 full days of daycare", "Expires 90 days after purchase"],
          },
        ],
        secondaryCard: {
          eyebrow: "Half-Day Daycare",
          title: "$41 per day — morning session",
          body:
            "Morning session only (7am–12:30pm). If your pet is not picked up by 12:30pm, the full day rate applies.",
        },
      },
      {
        type: "callout",
        eyebrow: "Puppies (4 months – 1 year)",
        title: "Puppy Socialization Program",
        body:
          "$79 per session, three one-hour sessions. Supervised play with dogs of various sizes, enrichment activities (snuffle mats, frozen Kongs, treat hide-and-seek), outdoor potty breaks, and resource-guarding guidance. Requires Rabies vaccine plus current vaccination paperwork. Graduates receive a Certificate of Completion and become eligible for Group Play daycare.",
        cta: { label: "Get Started", href: "/new-client/" },
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        items: [
          {
            question: "Is daycare right for every dog?",
            answer:
              "Daycare is best for dogs who enjoy social settings or benefit from structured activity. If group play isn't a fit, our Enrichment program offers one-on-one alternatives.",
          },
          {
            question: "What vaccines are required?",
            answer:
              "Rabies, Distemper (DAPP/DHPP or DA2PP), and Bordetella must be up to date every visit. Influenza is highly recommended.",
          },
          {
            question: "Are there breaks during the day?",
            answer:
              "Yes — every dog gets a quiet rest period between 12:30pm and 1:30pm so they can recharge and avoid overstimulation.",
          },
          {
            question: "Does my dog need to be spayed/neutered?",
            answer:
              "Dogs over 1 year old must be spayed or neutered (unless a vet advises otherwise).",
          },
        ],
      },
      {
        type: "townLinks",
        eyebrow: "Where our daycare dogs come from",
        title: "Dog daycare for these areas",
        intro: "Families across Nassau drop their dogs at our Franklin Square resort for group play, enrichment, and boarding. A few of the towns we see most often:",
        services: ["daycare-boarding"],
      },
    ],
  },

  "dog-boarding": {
    slug: "dog-boarding",
    title: "Dog Boarding",
    eyebrow: "Boarding",
    hero:
      "Overnight care that feels like a natural extension of your dog's day — not a kennel stay.",
    metaTitle: "Dog Boarding Long Island | Suite Pricing | Planet Pooch",
    metaDescription:
      "Overnight dog boarding at our Franklin Square pet resort. Express, Classic, XL, and Luxury suites with Group Play or 1-on-1 care, plus enrichment activities, snacks, and bedding add-ons.",
    image: "/boarding/boarding_hero.jpg",
    serviceType: "Dog Boarding",
    heroCtas: {
      primary: { label: "Book Now", href: "/book/" },
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Why board with us?",
        title: "Overnight care that feels like home.",
        cta: { label: "Pricing", href: "#pricing" },
        image: "/boarding/moon.JPG",
        imageAlt: "Dogs enjoying their boarding stay at Planet Pooch",
        paragraphs: [
          "Leaving your dog overnight can be stressful — for both of you. At Planet Pooch, our boarding program is designed to feel like a natural extension of your dog's day. They'll enjoy playtime with our daycare pack and settle in for a cozy night of rest.",
        ],
        highlights: [
          { icon: "Sparkles", label: "Clean, comfortable suites" },
          { icon: "PawPrint", label: "Daycare included" },
          { icon: "Utensils", label: "Custom feeding and meds" },
          { icon: "Heart", label: "Bring their favorite toy" },
          { icon: "Camera", label: "Daily photo updates" },
        ],
        calloutCard: {
          title: "How Early Should I Book?",
          body: "Holiday weekends and summer fill up fast. Booking early — especially for Memorial Day, July 4th, Labor Day, and the December holidays — is the surest way to lock in your spot.",
          theme: "mint",
        },
      },
      {
        type: "splitCards",
        eyebrow: "Choose your style",
        title: "Group Play or 1-on-1 care",
        cta: { label: "Pricing", href: "#pricing" },
        intro:
          "Every boarding stay includes one of two care styles. Pick the one that fits your dog's personality — social butterfly or solo explorer.",
        cards: [
          {
            title: "Group Play",
            body: "Your dog joins our supervised daycare pack during the day — ideal for social dogs who love meeting new friends and staying active.",
            items: [
              "Full-day group socialization",
              "Structured play with matched groups",
              "Great for outgoing, high-energy dogs",
            ],
          },
          {
            title: "1-on-1",
            body: "Dedicated one-on-one time with staff for dogs who prefer a quieter pace or need individualized attention throughout their stay.",
            items: [
              "Six private outdoor relief periods with staff",
              "One enrichment activity per day",
              "Nighttime snack included",
              "Ideal for shy, anxious, or senior dogs",
            ],
          },
        ],
        footerCards: [
          {
            title: "Add-ons & Treats",
            subtitle: "Upgrade your pup's stay with add-ons including in-house grooming, special treats, enrichment activities, & much more! Can be added à la carte or in an upgrade package (see below).",
            theme: "mint",
          },
        ],
      },
      {
        type: "comparison",
        id: "pricing",
        theme: "mint",
        eyebrow: "Pricing",
        title: "Boarding Suite Pricing",
        intro: "Suite type and care style determine the nightly rate.",
        columns: ["Suite Type", "Group Play", "1-on-1"],
        rows: [
          { label: "Express (under 25 lbs)", values: ["$77", "$105"] },
          { label: "Express (under 40 lbs)", values: ["$88", "$115"] },
          { label: "Classic (4×6)", values: ["$110", "$135"] },
          { label: "XL (4.5×8)", values: ["$120", "$145"] },
          { label: "Luxury (6×6)", values: ["$155", "$180"] },
        ],
        note: "* An additional $5 per night will be applied during holiday periods. Holiday periods include 7 days before and after each major holiday.",
        cta: { label: "Upgrade Options", href: "#upgrades" },
      },
      {
        type: "tieredPricing",
        id: "upgrades",
        eyebrow: "Upgrades",
        title: "Boarding Upgrade Options",
        intro:
          "Give your dog an even more comfortable, enriching, and personalized stay with one of our enhanced care packages.",
        tiers: [
          {
            name: "Comfort Care",
            price: "+$18",
            cadence: "/day",
            description:
              "A cozy, enriched stay with added comfort and mental stimulation.",
            features: [
              "Orthopedic bed topper, comfort floor mat, and cozy blanket for ultimate relaxation",
              "Daily nutritional enrichment puzzle to keep minds engaged and stimulated",
              "Evening tuck-in time with a special treat and one-on-one wind-down time with our staff",
            ],
          },
          {
            name: "Comfort Plus Care",
            price: "+$29",
            cadence: "/day",
            description:
              "An enhanced stay with added enrichment, one-on-one attention, and extra daily engagement.",
            features: [
              "Orthopedic bed topper, comfort floor mat, and cozy blanket for ultimate relaxation",
              "Daily nutritional enrichment puzzle to keep minds engaged and stimulated",
              "Evening tuck-in time with a special treat and one-on-one wind-down time with our staff",
              "Daily enrichment activity",
            ],
          },
          {
            name: "Premium Care",
            price: "+$39",
            cadence: "/day",
            badge: "High Demand",
            description:
              "Limited to 5 Dogs. Perfect for extra attention and peace of mind while you're away.",
            featured: true,
            features: [
              "Orthopedic bed topper, comfort floor mat, and cozy blanket for ultimate relaxation",
              "Daily nutritional enrichment puzzle to keep minds engaged and stimulated",
              "Evening tuck-in time with a special treat and one-on-one wind-down time with our staff",
              "Daily enrichment activity",
              "First walk in the morning & last walk at night to minimize the time between the nighttime walk and the morning walk",
            ],
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "A day in the life",
        title: "A tail-wagging day at Planet Pooch",
        image: "/boarding/day-in-the-life.png",
        imageAlt: "Planet Pooch boarding accommodations",
        imagePosition: "left",
        items: [
          {
            time: "6:00 AM",
            label: "Wake-up call",
            body:
              "Outdoor potty breaks and breakfast served in individual suites to help dogs feel at home.",
          },
          {
            time: "7:00 AM – 12:30 PM",
            label: "Morning group play",
            body:
              "Group daycare and socialization. For dogs who prefer something quieter, we offer enrichment activities and one-on-one time in a cozy private area.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            label: "Rest and recharge",
            body:
              "Quiet time in their suites with personal items.",
          },
          {
            time: "1:30 PM – 7:00 PM",
            label: "Afternoon group play",
            body: "More play and socialization, with optional quieter enrichment activities.",
          },
          {
            time: "7:00 PM",
            label: "Dinner",
            body: "Owner-provided meals served in their suites.",
          },
          {
            time: "9:00 PM",
            label: "Last call",
            body:
              "Final potty break and bedtime preparation for a comfortable night's rest.",
          },
        ],
      },
      {
        type: "callout",
        title: "Preparing for your dog's stay",
        body: "Please pre-package your dog's food and label each meal for morning or night. Include medication details, including the medication name, dosage, and when it should be given.",
      },
      {
        type: "callout",
        title: "Reserve your dog's stay",
        body: "Tell us about their routine, comfort needs, and feeding schedule.",
        cta: { label: "Book Now", href: "/book/" },
      },
      {
        type: "townLinks",
        eyebrow: "Where our boarders come from",
        title: "Overnight boarding for these areas",
        intro: "Same daycare clients often turn into boarding clients — they already know the team and the routine. A few of the towns we see most often:",
        services: ["daycare-boarding"],
      },
    ],
  },

  "dog-training": {
    slug: "dog-training",
    title: "Dog Training",
    eyebrow: "Training",
    hero:
      "Thoughtful training that builds confidence, manners, and clearer communication between you and your dog.",
    metaTitle: "Dog Training Long Island | AKC Evaluator | Planet Pooch",
    metaDescription:
      "Compassionate, results-driven dog training with our AKC Evaluator Trainer. Private sessions, 6-week programs, and free consultations for dogs of every age.",
    image: "/tour-space.jpg",
    serviceType: "Dog Training",
    heroCtas: {
      primary: { label: "Book FREE Consultation", href: "/book/" },
    },
    sections: [
      {
        type: "iconBullets",
        eyebrow: "Why train?",
        title: "A bridge between dogs and humans.",
        icon: "PawPrint",
        items: [
          "AKC Evaluator Trainer leading every program",
          "FREE Consultation prior to training",
          "Coaching for owners on reinforcing skills at home",
          "Positive, relationship-minded handling",
        ],
        cta: { label: "Pricing", href: "#group-training" },
      },
      {
        type: "groupTraining",
        id: "group-training",
        eyebrow: "Training Classes",
        title: "Drop-In Group Dog Training",
        intro:
          "Train on your schedule — no fixed six-week commitment. Just drop in when you're ready.",
        pricing: [
          {
            name: "One-Day Drop-In",
            price: "$60",
            description: "Single session, pay as you go",
          },
          {
            name: "4-Session Package",
            price: "$174.99",
            originalPrice: "$200",
            note: "Limited-time offer",
            description: "Use anytime within 2 months",
          },
        ],
        levels: [
          {
            name: "Puppy Level 1",
            requirement: "For puppies 8 weeks to 1 year old.",
            classTitles: [
              "Communication Foundations",
              "Focus, Stay & Grooming",
              "Leash Skills & Body Language",
              "Down, Recall & Real-World Practice",
            ],
          },
          {
            name: "Puppy Level 2",
            requirement: "For puppies 8 weeks to 1 year old.",
            classTitles: [
              "Name Game, Come with Distractions, Puppy Push-Ups & Grooming",
              "Leave It, Stay with Distance, Come with Distance and Distraction & Body Language",
              "Leave It and Loose-Leash Walking, Heel, Stay with Distance and Distraction & Polite Leash Greetings",
              "Distance Down, Emergency Stop, Stand & Come",
            ],
          },
          {
            name: "Adult",
            requirement: "For dogs 1 year and older.",
            classTitles: [
              "Communication Foundations",
              "Stay, Down & Grooming",
              "Leash Skills & Polite Greetings",
              "Distance, Focus & Loose-Leash Practice",
            ],
          },
          {
            name: "Advanced",
            requirement:
              "For dogs ready to build reliable obedience, focus, and confidence around real-world distractions.",
            classTitles: [
              "Focus & Distraction Proofing",
              "Duration, Distance & Polite Greetings",
              "Heelwork & Neutral Dog Passing",
              "Distance Commands & Real-World Control",
            ],
          },
        ],
        bookingNotes: [
          "Classes must be booked at least 24 hours in advance.",
          "Classes can be taken out of order.",
          "4-session packages expire 60 days after purchase.",
          "Sessions start at the scheduled time. We allow a 15-minute grace period; if you're 15 minutes late or more, contact us or we can't accommodate you.",
        ],
        schedule: [
          {
            day: "Wednesday",
            rotationStartDate: "2026-10-14",
            sessions: [
              { time: "6:00 PM", className: "Puppy Level 1", classNumber: 1 },
              { time: "7:00 PM", className: "Adult", classNumber: 1 },
              { time: "8:00 PM", className: "Advanced", classNumber: 4 },
            ],
          },
          {
            day: "Saturday",
            rotationStartDate: "2026-10-31",
            sessions: [
              { time: "8:00 AM", className: "Adult", classNumber: 1 },
              { time: "11:30 AM", className: "Puppy Level 2", classNumber: 4, rotationDirection: -1 },
              { time: "12:30 PM", className: "Puppy Level 1", classNumber: 1 },
            ],
          },
          {
            day: "Sunday",
            rotationStartDate: "2026-10-11",
            sessions: [
              { time: "10:00 AM", className: "Puppy Level 2", classNumber: 4, rotationDirection: -1 },
              { time: "11:00 AM", className: "Adult", classNumber: 2 },
              { time: "3:00 PM", className: "Puppy Level 1", classNumber: 2 },
            ],
          },
        ],
        scheduleOverrides: [
          { date: "2026-08-16", sessions: [] },
          {
            date: "2026-08-19",
            sessions: [
              { time: "5:00 PM", className: "Puppy 1" },
              { time: "6:00 PM", className: "Adult Class 1" },
            ],
          },
          { date: "2026-08-20", sessions: [] },
          { date: "2026-08-22", sessions: [] },
          { date: "2026-08-23", sessions: [] },
          {
            date: "2026-08-26",
            sessions: [
              { time: "5:00 PM", className: "Puppy Class 2" },
              { time: "6:00 PM", className: "Adult Class 2" },
            ],
          },
          { date: "2026-08-27", sessions: [] },
          { date: "2026-08-29", sessions: [] },
          { date: "2026-08-30", sessions: [] },
          {
            date: "2026-09-02",
            sessions: [
              { time: "5:00 PM", className: "Puppy Class 3" },
              { time: "6:00 PM", className: "Adult Class 3" },
            ],
          },
          {
            date: "2026-09-03",
            sessions: [
              { time: "6:00 PM", className: "Puppy Class 2" },
              { time: "7:00 PM", className: "Adult Class 2" },
              { time: "8:00 PM", className: "Advanced Class 2" },
            ],
          },
          {
            date: "2026-09-05",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 1" },
              { time: "11:30 AM", className: "Puppy Class 1" },
              { time: "12:30 PM", className: "Adult Class 1" },
              { time: "1:30 PM", className: "Advanced Class 1" },
              { time: "2:30 PM", className: "Puppy Class 1" },
            ],
          },
          {
            date: "2026-09-06",
            sessions: [
              { time: "10:00 AM", className: "Puppy Class 1" },
              { time: "11:00 AM", className: "Adult Class 1" },
              { time: "12:00 PM", className: "Advanced Class 1" },
              { time: "1:00 PM", className: "Puppy Class 1" },
              { time: "2:00 PM", className: "Adult Class 1" },
            ],
          },
          {
            date: "2026-09-09",
            sessions: [
              { time: "5:00 PM", className: "Adult Class 4" },
              { time: "6:00 PM", className: "Puppy Class 4" },
            ],
          },
          {
            date: "2026-09-10",
            sessions: [
              { time: "6:00 PM", className: "Puppy Class 3" },
              { time: "7:00 PM", className: "Adult Class 3" },
              { time: "8:00 PM", className: "Advanced Class 3" },
            ],
          },
          {
            date: "2026-09-12",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 2" },
              { time: "11:30 AM", className: "Puppy Class 2" },
              { time: "12:30 PM", className: "Adult Class 2" },
              { time: "1:30 PM", className: "Advanced Class 2" },
              { time: "2:30 PM", className: "Puppy Class 2" },
            ],
          },
          {
            date: "2026-09-13",
            sessions: [
              { time: "10:00 AM", className: "Puppy Class 2" },
              { time: "11:00 AM", className: "Adult Class 2" },
              { time: "12:00 PM", className: "Advanced Class 2" },
              { time: "1:00 PM", className: "Puppy Class 2" },
              { time: "2:00 PM", className: "Adult Class 2" },
            ],
          },
          {
            date: "2026-09-16",
            sessions: [
              { time: "5:00 PM", className: "Adult Class 1" },
              { time: "6:00 PM", className: "Puppy Class 1" },
            ],
          },
          {
            date: "2026-09-17",
            sessions: [
              { time: "5:00 PM", className: "Puppy Level 2 Class 1" },
              { time: "6:00 PM", className: "Puppy Class 4" },
              { time: "7:00 PM", className: "Adult Class 4" },
              { time: "8:00 PM", className: "Advanced Class 4" },
            ],
          },
          {
            date: "2026-09-19",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 3" },
              { time: "11:30 AM", className: "Puppy Class 3" },
              { time: "12:30 PM", className: "Adult Class 3" },
              { time: "1:30 PM", className: "Advanced Class 3" },
              { time: "2:30 PM", className: "Puppy Class 3" },
              { time: "3:30 PM", className: "Puppy Level 2 Class 2" },
            ],
          },
          {
            date: "2026-09-20",
            sessions: [
              { time: "10:00 AM", className: "Puppy Class 3" },
              { time: "11:00 AM", className: "Adult Class 3" },
              { time: "12:00 PM", className: "Advanced Class 3" },
              { time: "1:00 PM", className: "Puppy Class 3" },
              { time: "2:00 PM", className: "Adult Class 3" },
              { time: "3:00 PM", className: "Puppy Level 2 Class 3" },
            ],
          },
          {
            date: "2026-09-23",
            sessions: [
              { time: "5:00 PM", className: "Adult Class 2" },
              { time: "6:00 PM", className: "Puppy Class 2" },
            ],
          },
          {
            date: "2026-09-24",
            sessions: [
              { time: "5:00 PM", className: "Puppy Level 2 Class 4" },
              { time: "6:00 PM", className: "Puppy Class 1" },
              { time: "7:00 PM", className: "Adult Class 1" },
              { time: "8:00 PM", className: "Advanced Class 1" },
            ],
          },
          {
            date: "2026-09-26",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 4" },
              { time: "11:30 AM", className: "Puppy Class 4" },
              { time: "12:30 PM", className: "Adult Class 4" },
              { time: "1:30 PM", className: "Advanced Class 4" },
              { time: "2:30 PM", className: "Puppy Class 4" },
              { time: "3:30 PM", className: "Puppy Level 2 Class 1" },
            ],
          },
          {
            date: "2026-09-27",
            sessions: [
              { time: "10:00 AM", className: "Puppy Class 4" },
              { time: "11:00 AM", className: "Adult Class 4" },
              { time: "12:00 PM", className: "Advanced Class 4" },
              { time: "1:00 PM", className: "Puppy Class 4" },
              { time: "2:00 PM", className: "Adult Class 4" },
              { time: "3:00 PM", className: "Puppy Level 2 Class 2" },
            ],
          },
          {
            date: "2026-09-30",
            sessions: [
              { time: "5:00 PM", className: "Adult Class 3" },
              { time: "6:00 PM", className: "Puppy Class 3" },
            ],
          },
          {
            date: "2026-10-01",
            sessions: [
              { time: "5:00 PM", className: "Puppy Level 2 Class 3" },
              { time: "6:00 PM", className: "Puppy Class 2" },
              { time: "7:00 PM", className: "Adult Class 2" },
              { time: "8:00 PM", className: "Advanced Class 2" },
            ],
          },
          {
            date: "2026-10-03",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 1" },
              { time: "11:30 AM", className: "Puppy Class 1" },
              { time: "12:30 PM", className: "Adult Class 1" },
              { time: "1:30 PM", className: "Advanced Class 1" },
              { time: "2:30 PM", className: "Puppy Class 1" },
              { time: "3:30 PM", className: "Puppy Level 2 Class 4" },
            ],
          },
          {
            date: "2026-10-04",
            sessions: [
              { time: "10:00 AM", className: "Puppy Class 1" },
              { time: "11:00 AM", className: "Adult Class 1" },
              { time: "12:00 PM", className: "Advanced Class 1" },
              { time: "1:00 PM", className: "Puppy Class 1" },
              { time: "2:00 PM", className: "Adult Class 1" },
              { time: "3:00 PM", className: "Puppy Level 2 Class 1" },
            ],
          },
          {
            date: "2026-10-07",
            sessions: [
              { time: "5:00 PM", className: "Adult Class 4" },
              { time: "6:00 PM", className: "Puppy Class 4" },
            ],
          },
          {
            date: "2026-10-08",
            sessions: [
              { time: "5:00 PM", className: "Puppy Level 2 Class 2" },
              { time: "6:00 PM", className: "Puppy Class 2" },
              { time: "7:00 PM", className: "Adult Class 2" },
              { time: "8:00 PM", className: "Advanced Class 2" },
            ],
          },
          {
            date: "2026-10-10",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 1" },
              { time: "11:30 AM", className: "Puppy Class 1" },
              { time: "12:30 PM", className: "Adult Class 1" },
              { time: "1:30 PM", className: "Advanced Class 1" },
              { time: "2:30 PM", className: "Puppy Class 1" },
              { time: "3:30 PM", className: "Puppy Level 2 Class 3" },
            ],
          },
          {
            date: "2026-10-17",
            sessions: [
              { time: "8:00 AM", className: "Adult Class 3" },
              { time: "11:30 AM", className: "Puppy Level 2 Class 2" },
              { time: "12:30 PM", className: "Puppy Level 1 Class 3" },
            ],
          },
          { date: "2026-10-24", sessions: [] },
          { date: "2026-10-25", sessions: [] },
        ],
        recurringScheduleAdditions: [
          {
            startDate: "2026-09-03",
            endDate: "2026-10-08",
            day: "Thursday",
            sessions: [{ time: "5:00 PM", className: "Puppy Level 2" }],
          },
          {
            startDate: "2026-09-06",
            endDate: "2026-10-04",
            day: "Sunday",
            sessions: [{ time: "3:00 PM", className: "Puppy Level 2" }],
          },
        ],
        callout: {
          title: "Ready to Book?",
          body: "Drop in for a single session or grab the 4-session package and save.",
          ctas: [
            { label: "Contact Us", href: "/contact/" },
            { label: "Call 516-993-3603", href: "tel:+15169933603" },
          ],
        },
      },
      {
        type: "tieredPricing",
        id: "private-sessions",
        eyebrow: "1:1 Training Sessions",
        title: "Private Training",
        intro:
          "Personalized guidance shaped around your dog's age, temperament, and learning style — especially valuable for dogs who feel overwhelmed, distracted, or anxious in group settings. Each program runs six 45-minute sessions.",
        uniformStyle: "dark",
        tiers: [
          {
            name: "Level 1",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Foundational skills",
            features: [
              "Sit, stay, and come",
              "Loose leash walking",
              "Potty training",
            ],
          },
          {
            name: "Level 2",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Advanced techniques",
            features: [
              "Builds on Level 1 skills",
              "Reliability with distractions",
              "Confidence in busier environments",
            ],
          },
          {
            name: "Level 3",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Customizable curriculum",
            features: [
              "Curriculum tailored to your goals",
              "Behaviors specific to your dog",
              "Owner coaching to maintain results",
            ],
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Common training questions",
        items: [
          {
            question: "What kinds of goals can we work on?",
            answer:
              "Common goals include puppy foundations, basic obedience, leash manners, focus, confidence-building, and addressing behaviors like jumping, barking, or pulling.",
          },
          {
            question: "Is private training better than a group class?",
            answer:
              "Private sessions are especially valuable for dogs who feel overwhelmed, distracted, or anxious around other dogs. They learn in a calm, focused environment where they can succeed.",
          },
          {
            question: "Will I get coaching too?",
            answer:
              "Yes — training works best when owners understand how to reinforce the skills outside the resort. We make sure you leave each session knowing what to practice.",
          },
        ],
        cta: { label: "Pricing", href: "#group-training" },
      },
      {
        type: "callout",
        title: "Free 20-minute consultation",
        body:
          "Every dog starts with a free 20-minute consultation so we can understand their age, temperament, and your goals before training begins.",
        cta: { label: "Book a consultation", href: "/book/" },
      },
    ],
  },

  enrichment: {
    slug: "enrichment",
    title: "Enrichment",
    eyebrow: "Enrichment",
    hero:
      "One-on-one enrichment days for dogs who shine away from the pack — sensory play, scent work, agility, and gentle challenges tailored to each dog.",
    metaTitle: "Dog Enrichment Long Island | One-on-One Activities | Planet Pooch",
    metaDescription:
      "One-on-one enrichment activities at Planet Pooch in Franklin Square — sensory play, agility, treadmill, scent work, and nutrition puzzles for dogs who thrive away from the pack.",
    image: "/enrichment_hero.jpg",
    serviceType: "Dog Enrichment Activities",
    heroCtas: {
      primary: { label: "Get Started", href: "/book/" },
    },
    sections: [
      {
        type: "iconBullets",
        eyebrow: "Enrichment",
        title: "The five pillars of enrichment.",
        intro:
          "Some dogs do best individually. Our enrichment program offers thoughtful, supervised activities that keep your dog engaged, curious, and happily stimulated without the energy of a group setting — addressing behavioral issues including destruction, barking, escaping, anxiety, hyperactivity, and depression.",
        icon: "PawPrint",
        items: [
          "Social — one-on-one trust-building at your dog's pace",
          "Cognitive — puzzles and games that combat boredom",
          "Physical — low-impact movement matched to energy",
          "Sensory — scent work, textures, and new stimuli",
          "Nutritional — food puzzles and lick mats that slow eating",
        ],
        wide: true,
      },
      {
        type: "callout",
        eyebrow: "Pricing",
        title: "$82 per day for one-on-one Enrichment Play",
        body:
          "A personalized program where your dog engages in structured activities designed around their individual needs, personality, and comfort level. Sessions are customized to each dog's responses, allowing staff to adjust pace and focus based on engagement.",
        wide: true,
      },
      {
        type: "definitions",
        eyebrow: "Add-ons",
        title: "Enrichment activities",
        intro: "Each activity is 20 minutes and costs $25 per session — add to any daycare or boarding day.",
        highContrast: true,
        items: [
          {
            term: "Treadmill Enrichment",
            definition:
              "A unique outlet for burning off excess energy without excessive strain on muscles and joints — while engaging something different than they're used to.",
          },
          {
            term: "Agility Enrichment",
            definition:
              "Physical and mental stimulation through fun challenges: fetch, tug-of-war, obstacle courses, and a rotating set of interesting toys.",
          },
          {
            term: "Nutritional Enrichment",
            definition:
              "Snuffle mats and food puzzles that stimulate natural foraging instincts. Dogs use their sense of smell to search for hidden treats.",
          },
          {
            term: "Scent Enrichment",
            definition:
              "Sensory activities using artificial flowers in snuffle mats or sensory bins to encourage natural curiosity and sniffing instincts.",
          },
          {
            term: "Buddy Play Enrichment",
            definition:
              "A thoughtfully curated experience for dogs who thrive in smaller social settings — each group hand-selected based on temperament, play style, and comfort level.",
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "A day in the life",
        title: "What a one-on-one enrichment day looks like",
        image: "/enrichment_home.jpg",
        imageAlt: "Dog practicing agility with a Planet Pooch team member",
        imagePosition: "left",
        items: [
          {
            time: "7:00 AM – 9:00 AM",
            label: "Arrival and settle-in",
            body:
              "We welcome your dog and let them explore the space at their own pace before any structured activity begins.",
          },
          {
            time: "9:00 AM – 12:30 PM",
            label: "Morning enrichment block",
            body:
              "One or two 20-minute enrichment sessions matched to your dog — treadmill, scent, nutrition, or agility — separated by quiet rest.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            label: "Rest period",
            body: "Every dog gets a quiet break in a cozy private area.",
          },
          {
            time: "1:30 PM – 6:00 PM",
            label: "Afternoon activity",
            body:
              "An afternoon enrichment session with optional Buddy Play if your dog enjoys small-group settings.",
          },
          {
            time: "By 7:00 PM",
            label: "Pickup",
            body:
              "Your dog goes home tired in the best way — mentally engaged, physically exercised, and calm.",
          },
        ],
      },
      {
        type: "callout",
        title: "Book a one-on-one enrichment day",
        body:
          "Tell us about your dog's energy level, sensitivities, and what kinds of activities engage them best.",
        cta: { label: "Book Now", href: "/book/" },
      },
    ],
  },

  events: {
    slug: "events",
    title: "Events",
    eyebrow: "Events",
    hero:
      "Birthday parties, field trips, themed daycare days, and signature seasonal events — celebrating the whole pack year-round.",
    metaTitle: "Dog Events Long Island | Birthday Parties & Themed Days | Planet Pooch",
    metaDescription:
      "Upcoming dog events at Planet Pooch in Franklin Square — Foam Party, Paws, Luau, Pupsicle Party, birthday parties, and themed daycare days.",
    image: "/event_hero.jpg",
    heroCtas: {
      primary: { label: "Book an Event", href: "/book/" },
    },
    sections: [
      {
        type: "eventCalendar",
        id: "calendar",
        eyebrow: "Calendar",
        title: "Upcoming events",
        intro:
          "These are the only events currently planned. The four-week calendar shows the dates that fall inside the current window.",
        cta: { label: "Call to Reserve", href: "tel:+15169933603" },
        events: [
          {
            title: "Bobbing for Apples",
            dateLabel: "Tuesday, October 6, 2026",
            description: "A fall themed daycare event for the pack.",
            location: "Planet Pooch resort",
            badge: "Theme day",
            date: "2026-10-06",
          },
          {
            title: "Halloween Event",
            dateLabel: "Costume Contest & Haunted House",
            description: "A Halloween costume contest and haunted house for the pack.",
            location: "Planet Pooch resort",
            badge: "Contest",
            date: "2026-10-30",
          },
          {
            title: "Pumpkin Patch Event",
            dateLabel: "Thursday, November 19, 2026",
            description: "Pumpkin Patch Event",
            location: "Planet Pooch resort",
            badge: "Theme day",
            date: "2026-11-19",
          },
          {
            title: "Santa Paws Photo Day",
            dateLabel: "Holiday Portraits with Santa",
            description: "Holiday Portraits with Santa",
            location: "Planet Pooch resort",
            badge: "Photo day",
            date: "2026-12-22",
          },
          {
            title: "New Year's Eve Pawty",
            dateLabel: "Party, photos, ball-drap, & special treats!",
            description: "Party, photos, ball-drap, & special treats!",
            location: "Planet Pooch resort",
            badge: "Party",
            date: "2026-12-30",
          },
          {
            title: "Foam Party",
            dateLabel: "Wednesday, July 15, 2026",
            description:
              "A bubbly summer daycare party with supervised foam play, playful enrichment, and photo moments.",
            location: "Planet Pooch resort",
            badge: "Party",
            note: "Reserve",
            date: "2026-07-15",
          },
          {
            title: "Paws",
            dateLabel: "Tuesday, July 28, 2026",
            description:
              "A Jaws-themed Shark Week daycare event with splashy enrichment and themed photo moments.",
            location: "Planet Pooch resort",
            badge: "Shark Week",
            note: "Jaws theme",
            date: "2026-07-28",
          },
          {
            title: "Luau",
            dateLabel: "Thursday, August 13, 2026",
            description:
              "A tropical daycare celebration with festive enrichment, photo moments, and summer party energy.",
            location: "Planet Pooch resort",
            badge: "Theme day",
            note: "Luau",
            date: "2026-08-13",
          },
          {
            title: "Pupsicle Party",
            dateLabel: "Wednesday, August 26, 2026",
            description:
              "A cool summer daycare party with pupsicle-style treats, supervised fun, and themed photos.",
            location: "Planet Pooch resort",
            badge: "Party",
            note: "Summer treat",
            date: "2026-08-26",
          },
        ],
      },
      {
        type: "tieredPricing",
        eyebrow: "Birthdays",
        title: "Birthday Parties",
        intro: "Celebrate your dog's big day at the resort.",
        tiers: [
          {
            name: "Standard Party",
            price: "$189",
            features: [
              "Photoshoot to capture the fun",
              "Personalized birthday card",
              "Birthday shout-out on our social media",
              "Decorative balloons and custom signage",
              "Pup cups for your dog and their friends",
            ],
          },
          {
            name: "Premium Party",
            price: "$349",
            features: [
              "Bone-shaped birthday cake",
              "Goodie bags for their friends",
              "Photoshoot to capture the fun",
              "Personalized birthday card",
              "Birthday shout-out on our social media",
              "Decorative balloons and custom signage",
              "Pup cups for your dog and their friends",
            ],
            featured: true,
          },
        ],
        note:
          "Add-ons available — goodie bags, dog-friendly birthday cake, specialty treats, and more.",
        secondaryCard: {
          title: "Ready to celebrate?",
          body: "Call us to book your dog's birthday party.",
          cta: { label: "Call to Book", href: "tel:+15169933603" },
        },
      },
      {
        type: "slideshow",
        eyebrow: "Throughout the year",
        title: "Themed daycare days",
        intro:
          "Check out our planned themed daycare days, including Foam Party, Paws, Luau, and Pupsicle Party.",
        images: [
          { src: "/kissing-booth.png", alt: "Themed daycare event setup at Planet Pooch" },
          { src: "/events/IMG_3976.PNG", alt: "Dog wearing a party hat during a Planet Pooch event" },
          { src: "/events/IMG_3981.jpg", alt: "Birthday party table and cake for a dog at Planet Pooch" },
          { src: "/events/IMG_5076.jpg", alt: "Dogs playing in a splash pool during a Planet Pooch daycare event" },
          { src: "/events/Untitled design-23.png", alt: "Dog cooling off in a pool during a Planet Pooch daycare event" },
        ],
      },
      {
        type: "callout",
        title: "Want to host or join an event?",
        body: "Call us about availability, dates, and how to book your dog into a themed day or party.",
        cta: { label: "Book Now", href: "/book/" },
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type MainServiceSlug = keyof typeof mainServicePages;
