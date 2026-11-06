import { restoredPosts } from "./blog-restored";

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hasFullContent: boolean;
  intro?: string;
  sections?: BlogSection[];
  /** ISO-8601 publish date (YYYY-MM-DD). Used in Article JSON-LD. */
  datePublished: string;
  /** ISO-8601 last-modified date (YYYY-MM-DD). Defaults to datePublished. */
  dateModified?: string;
  /** Display name of the author. Defaults to the brand. */
  author?: string;
  /** Optional hero image path used by Article schema. */
  image?: string;
};

// Backfilled dates use the first full-content commit when no original publication
// date was recorded. Existing publication dates are preserved.
const fullPosts: Record<string, BlogPost> = {
  "all-in-one-dog-care-daycare-boarding-training-grooming": {
    slug: "all-in-one-dog-care-daycare-boarding-training-grooming",
    title: "Looking for Trusted, All-in-One Care for Your Dog? Meet Planet Pooch Pet Resort",
    metaTitle: "All-in-One Dog Care — Daycare, Boarding, Training & Grooming | Planet Pooch Blog",
    metaDescription:
      "Daycare, boarding, training, and professional grooming under one roof. See how Planet Pooch Pet Resort keeps your dog happy, safe, and thriving every step of the way.",
    hasFullContent: true,
    datePublished: "2026-07-29",
    intro:
      "Finding a place where your dog can feel safe, happy, and cared for is important. At Planet Pooch Pet Resort, we provide trusted, all-in-one pet care designed to keep your pup comfortable, engaged, and thriving. From fun-filled days of play to relaxing overnight stays, training sessions, and professional grooming, our experienced team is dedicated to providing exceptional care in a safe, fun, and enriching environment.",
    sections: [
      {
        heading: "Dog Daycare: Play, Socialize & Have Fun",
        paragraphs: [
          "Our supervised dog daycare program gives your pup the opportunity to stay active, socialize, and enjoy their day with friends. Our team carefully monitors playgroups to ensure a safe and positive experience for every dog.",
          "Every daycare visit includes daily updates so you can see how much fun your pup is having — including report cards with photos!",
        ],
      },
      {
        heading: "Dog Boarding: A Comfortable Stay Away From Home",
        paragraphs: [
          "When your dog stays with us, they're treated like family. Our spacious boarding suites provide a comfortable place to relax after a day of activities, while our team provides personalized attention throughout their stay.",
          "For an even more special experience, our premium boarding upgrades offer additional enrichment, comfort, and one-on-one care to make your dog's vacation extra memorable.",
        ],
      },
      {
        heading: "Dog Training: Building Confidence & Good Manners",
        paragraphs: [
          "Whether you have a new puppy or want to improve your dog's obedience and behavior, our training programs are designed to help dogs learn important skills while building confidence.",
          "From puppy basics to obedience and behavior training, our experienced trainers work with dogs of all ages and abilities to create a positive learning experience.",
        ],
      },
      {
        heading: "Professional Grooming: Look Good, Feel Good",
        paragraphs: [
          "Our professional grooming services help your dog look and feel their best. From routine maintenance to full grooming appointments, our team provides quality care with your dog's comfort as the top priority.",
        ],
      },
      {
        heading: "One Trusted Place for All Your Dog's Needs",
        paragraphs: [
          "Whether your dog is joining us for a day of play, enjoying a relaxing boarding stay, learning new skills, or getting pampered with a spa day, Planet Pooch Pet Resort is here to provide top-tier care every step of the way.",
          "We're proud to offer a complete pet care experience where dogs can play, learn, relax, and feel right at home.",
          "Ready to experience the Planet Pooch difference? Book your dog's next visit today!",
        ],
      },
    ],
  },

  "summer-events-paws-shark-week-celebration": {
    slug: "summer-events-paws-shark-week-celebration",
    title: "Summer Events at Planet Pooch: PAWS Shark Week Celebration",
    metaTitle: "PAWS Shark Week & Summer Events at Planet Pooch | Blog",
    metaDescription:
      "Summer is in full swing at Planet Pooch Pet Resort. Join us for PAWS Shark Week on Tuesday, July 28th — a shark-themed day of enrichment, treats, and tail wags.",
    hasFullContent: true,
    datePublished: "2026-07-22",
    intro:
      "Summer is in full swing at Planet Pooch Pet Resort, and we've been making it extra special for our furry guests! From fun activities to themed celebrations, our summer events are designed to keep dogs happy, engaged, and having the best time while they're with us.",
    sections: [
      {
        heading: "Upcoming Event: PAWS Shark Week — Tuesday, July 28th",
        paragraphs: [
          "Get ready for a fin-tastic day at Planet Pooch! We're celebrating Shark Week with our very own PAWS Shark Week event on Tuesday, July 28th.",
          "Our pups will enjoy a shark-themed experience filled with fun, enrichment, and plenty of tail wags. From creative activities to special treats, we're bringing the excitement of Shark Week to the resort — with a dog-friendly twist!",
          "At Planet Pooch, we believe enrichment and play are an important part of every dog's stay. Our themed events give our guests opportunities to socialize, explore new experiences, and create fun memories while they're here.",
        ],
      },
      {
        heading: "More summer fun ahead",
        paragraphs: [
          "This is just one of the many ways we keep summer exciting at Planet Pooch Pet Resort. Throughout the season, our team plans special events, enrichment activities, and unique experiences that go beyond the ordinary.",
          "Whether your dog is joining us for daycare, boarding, or a fun-filled resort experience, they'll always have something exciting to look forward to!",
          "Stay tuned for more upcoming events, photos, and behind-the-scenes fun from Planet Pooch. We can't wait to celebrate summer with your pups!",
        ],
      },
    ],
  },

  "boarding-upgrade-options-comfort-plus-premium-care": {
    slug: "boarding-upgrade-options-comfort-plus-premium-care",
    title: "Boarding Upgrade Options: A Little Extra Comfort for Your Dog's Stay",
    metaTitle: "Dog Boarding Upgrade Options | Planet Pooch Blog",
    metaDescription:
      "Give your dog a cozier, more enriching boarding stay with Planet Pooch upgrade packages — Comfort Care, Comfort Plus Care, and our most popular Premium Care.",
    hasFullContent: true,
    datePublished: "2026-07-15",
    intro:
      "Every dog boards a little differently. Some settle right in and nap the afternoon away; others do their best when they've got extra enrichment, a softer place to sleep, and a bit more one-on-one time with our team. That's exactly why we offer boarding upgrade packages at Planet Pooch — simple add-ons that make your dog's stay more comfortable, more engaging, and more personalized. Here's a look at each one, so you can pick what fits your pup best.",
    sections: [
      {
        heading: "Comfort Care (+$18/day)",
        paragraphs: [
          "A cozy, enriched stay with added comfort and mental stimulation. This is a great starting point for dogs who love a soft place to land and a little something to keep their minds busy.",
        ],
        bullets: [
          "Orthopedic bed topper, comfort floor mat, and blanket",
          "Daily nutritional enrichment puzzle",
          "Tuck-in time with a treat — a calm wind-down with our staff before bed",
        ],
      },
      {
        heading: "Comfort Plus Care (+$29/day)",
        paragraphs: [
          "An enhanced stay with extra enrichment, one-on-one attention, and increased daily engagement. Comfort Plus includes everything in Comfort Care, plus more hands-on time throughout the day.",
        ],
        bullets: [
          "Orthopedic bed topper, comfort floor mat, and blanket",
          "Daily nutritional enrichment puzzle",
          "Tuck-in time with a treat before bed",
          "An additional daily enrichment activity",
        ],
      },
      {
        heading: "Premium Care (+$39/day) — our most popular option",
        paragraphs: [
          "Ideal for dogs who benefit from extra attention, structure, and outdoor time. Premium Care builds on everything in Comfort Plus and adds a little more of the routine active dogs thrive on.",
        ],
        bullets: [
          "Orthopedic bed topper, comfort floor mat, and blanket",
          "Daily nutritional enrichment puzzle",
          "Tuck-in time with a treat before bed",
          "An additional daily enrichment activity",
          "First out in the morning and last in at night, for extra time outside the suite",
        ],
      },
      {
        heading: "Which upgrade is right for your dog?",
        paragraphs: [
          "There's no wrong choice — it comes down to your dog's personality and what makes them happiest. Comfort Care suits easygoing dogs who mostly want a cozier bed and a little mental stimulation. Comfort Plus is a great fit for social pups who love extra interaction and activity. And Premium Care is the pick for high-energy or routine-loving dogs who do best with more structure, engagement, and time outside the suite.",
          "Not sure? Just ask us. We get to know every dog who stays with us, and we're always happy to recommend the package that fits your pup best.",
        ],
      },
      {
        heading: "Prefer to keep it simple?",
        paragraphs: [
          "You don't have to commit to a full daily package to spoil your dog. You can also choose a one-time treat or an extra special activity during their stay — a nice way to add a little something without an everyday upgrade.",
        ],
      },
      {
        heading: "Add an upgrade to your dog's next stay",
        paragraphs: [
          "Boarding upgrades are easy to add when you book, and they're a simple way to make your dog's time with us even more comfortable and fun.",
          "Call us at 516-993-3603 or visit planet-pooch.com to reserve your dog's stay and choose the package that's right for them.",
          "We're committed to making your dog's stay happy, healthy, and tail-waggingly fun.",
        ],
      },
    ],
  },

  "why-august-is-our-busiest-boarding-month": {
    slug: "why-august-is-our-busiest-boarding-month",
    title: "Why August Is Our Busiest Boarding Month — and Why You'll Want to Book Early",
    metaTitle: "Why August Is Our Busiest Boarding Month | Planet Pooch Blog",
    metaDescription:
      "August is our busiest dog boarding month at Planet Pooch. Here's why demand spikes — and why booking early gets you the best suite for your dog's stay.",
    hasFullContent: true,
    datePublished: "2026-07-08",
    intro:
      "Every year it happens like clockwork. The calendar flips to August, and the phone at Planet Pooch starts ringing off the hook. Suites fill up, the daycare floor buzzes, and by mid-month we're often turning away last-minute requests we'd have loved to say yes to. If you're planning a trip before summer winds down, here's the honest truth: August is the busiest boarding month of the year for us, and the best suites go first.",
    sections: [
      {
        heading: "What makes August so busy?",
        paragraphs: ["A few things collide all at once:"],
        bullets: [
          "Last hurrah summer travel — families squeeze in one more beach week, road trip, or long weekend before the school-year routine takes over.",
          "Back-to-school prep — parents heading out to get kids settled, from dorm move-ins and college drop-offs to quick getaways before the chaos starts.",
          "Labor Day weekend — the unofficial end of summer is one of the single most-requested boarding stretches of the entire year.",
        ],
      },
      {
        heading: "Booking early isn't just about getting a spot",
        paragraphs: ["Reserving ahead does more than guarantee availability. It also means:"],
        bullets: [
          "Your pick of suite — the layout and size that fits your dog best is far more likely to be open when you book early.",
          "A calmer check-in — no last-minute paperwork rush, no scrambling to get records in order the day before you leave.",
          "Peace of mind — you get to focus on your trip instead of wondering whether your dog has a place to stay.",
        ],
      },
      {
        heading: "A quick pre-trip checklist",
        paragraphs: ["To make your August stay smooth, take care of these ahead of time:"],
        bullets: [
          "Confirm vaccinations are current — we require dogs to be up to date on their core vaccines, and some vaccines need to be given a set number of days before arrival, so don't leave it to the last minute. Check with us on timing if you're unsure.",
          "Reserve your dates now — even if your plans aren't 100% locked, getting on the calendar early is far easier than finding an opening in a full week.",
          "Ask about add-ons — boarding stays are a great time for an exit groom or a little extra enrichment, but those book up during busy stretches too.",
        ],
      },
      {
        heading: "Don't wait — reserve your dog's spot today",
        paragraphs: [
          "August is already moving fast. If you know you'll need boarding this month, the smartest thing you can do is get on the calendar now, while the suites you want are still open.",
          "Call us at 516-993-3603 or visit planet-pooch.com to book your dog's August stay.",
          "Your dog gets a comfortable, well-run home away from home. You get to travel knowing they're in good hands. Everybody wins — as long as you don't wait until the suites are gone.",
        ],
      },
    ],
  },

  "planning-a-summer-getaway-book-your-dogs-stay-before-the-dates-are-gone": {
    slug: "planning-a-summer-getaway-book-your-dogs-stay-before-the-dates-are-gone",
    title: "Planning a Summer Getaway? Book Your Dog's Stay Before the Dates Are Gone",
    metaTitle: "Book Summer Dog Boarding Before Dates Fill Up | Planet Pooch Blog",
    metaDescription:
      "Summer boarding dates at Planet Pooch fill up fast. Here's why to book early, how the Bordetella 14-day rule works, and how to lock in your dog's stay.",
    hasFullContent: true,
    datePublished: "2026-06-17",
    intro:
      "Summer is here, and if you've got a trip on the calendar, here's the honest truth from our front desk: we're already turning people away.",
    sections: [
      {
        paragraphs: [
          "Not because we want to. It's because the most popular summer dates — long holiday weekends, the back half of August, the start and end of every school break — fill up faster than people expect. Someone calls a few days before they leave, asks for boarding, and we have to tell them we're full for exactly the nights they need. It's one of the hardest parts of the job, because by then there's nothing we can do.",
          "So consider this your friendly heads-up: if you're going away this summer, book now. Don't wait until the last minute.",
        ],
      },
      {
        heading: "Why summer fills up so fast",
        paragraphs: [
          "Franklin Square and the surrounding Nassau County towns clear out in the summer. Families head to the beach, the mountains, weddings out of state, a week on the Cape. Everyone's traveling in the same windows — and everyone needs somewhere safe and loving for their dog at the same time.",
          "We keep our capacity intentionally comfortable rather than packing dogs in, which is great for your pup and great for the quality of their stay, but it also means spots are genuinely limited. When a popular weekend books out, it's out. Calling early isn't about being overly cautious — it's the difference between your dog having a confirmed spot and you scrambling the night before your flight.",
        ],
      },
      {
        heading: "Your dog isn't just “parked” here — they're thriving",
        paragraphs: [
          "A boarding stay at Planet Pooch isn't a kennel where dogs wait out the week. Between supervised daycare play, enrichment sessions, comfortable suites, and a team that actually knows your dog by name, most of our long-stay guests settle in and have a genuinely great time. Two weeks away? They'll be busy, social, and tired in the best way by the time you're back.",
          "That's exactly why we'd hate for you to miss the dates — your dog deserves the good version of being away from home, not whatever's left over at the last minute somewhere else.",
        ],
      },
      {
        heading: "A couple of things to handle now, not later",
        paragraphs: [
          "Two quick items that catch people off guard when they wait:",
          "Vaccines, especially Bordetella. We require the Bordetella (kennel cough) vaccine to be administered at least 14 days before arrival. Because it's a live vaccine, dogs can shed it for a short window afterward, so the 14-day buffer protects every dog in the building. If your pup is due, get to the vet now — a last-minute shot won't meet the requirement, and that alone can cost you the reservation.",
          "Locking in the dates. A reservation is held with a $25 non-refundable booking deposit, with 50% of the stay due one week before arrival. Booking early means you secure your exact dates and get the vaccine timing sorted with room to spare — no stress, no surprises.",
        ],
      },
      {
        heading: "How to book",
        paragraphs: [
          "Reserving a spot takes just a few minutes. Call us, stop by the resort at 1114 Hempstead Turnpike, or book through your client portal — and if you're not sure your dog's vaccines are current, ask us when you reach out and we'll help you check.",
          "Summer dates are already going. If you know you're traveling, the best time to book was last week — the second-best time is right now.",
        ],
      },
    ],
  },

  "planning-summer-travel-how-to-give-your-dog-a-getaway-too": {
    slug: "planning-summer-travel-how-to-give-your-dog-a-getaway-too",
    title: "Planning Summer Travel? Here's How to Give Your Dog a Getaway Too",
    metaTitle: "Planning Summer Travel? Give Your Dog a Getaway Too | Planet Pooch Blog",
    metaDescription:
      "Summer boarding spots fill up fast on Long Island. Here's how to choose the right place, plan vaccinations ahead, and make drop-off easy at Planet Pooch.",
    hasFullContent: true,
    datePublished: "2026-06-10",
    intro:
      "Summer on Long Island has a rhythm to it. Beach weekends, family trips upstate, a wedding in another state, that long-awaited week away. The calendar fills up fast — and if you're a dog owner, every one of those plans comes with the same quiet question in the back of your mind: what about the dog?",
    sections: [
      {
        paragraphs: [
          "It's a bigger question than people give it credit for. Leaving your dog somewhere isn't a logistics problem to solve at the last minute. It's a decision about who you trust with a member of your family. And the truth most boarding ads won't tell you is this: not all boarding is equal. It's the reason we built Planet Pooch Pet Resort in Franklin Square the way we did — as a place we'd actually feel good leaving our own dogs.",
        ],
      },
      {
        heading: "Summer Spots Fill Up Faster Than People Expect",
        paragraphs: [
          "Here's the part that catches a lot of owners off guard. The weeks around the 4th of July, the back half of August, and Labor Day are the busiest stretch of the entire year for boarding. Everyone is traveling at the same time, which means the best facilities book up first — sometimes weeks in advance.",
          "If you already know you're traveling this summer, the single best thing you can do for your dog is reserve early. Waiting until the week before often means scrambling, settling for whoever has an opening, or stitching together a patchwork of neighbors and pet sitters who may or may not show up. Booking ahead means your dog has a confirmed suite at a place you actually chose — not a fallback. At Planet Pooch, our summer suites move quickly, so the earlier you're on our calendar, the better.",
        ],
      },
      {
        heading: "What “Good” Boarding Actually Looks Like",
        paragraphs: [
          "When people picture boarding, they sometimes imagine a row of kennels and a dog waiting out the week alone. That image is exactly why so many owners feel guilty leaving — and it's exactly what good boarding isn't. Here's how we think about it at Planet Pooch:",
        ],
        bullets: [
          "Real engagement, not just containment. A dog who spends the day playing, getting enrichment, and interacting with people and other dogs comes home happy and tired — not stressed and pent up. Our boarding guests aren't sitting out the week; their days are built around supervised play, enrichment sessions, and real human attention. Ask any facility what a typical day actually looks like, hour by hour. The answer tells you everything.",
          "Clean, controlled environments. Cleanliness isn't a detail; it's the whole foundation. We use pet-safe disinfectants and follow strict cleaning protocols between every use, because the dogs are in those spaces all day. If a place is vague about how they handle sanitation, that's a signal.",
          "Health requirements that protect every dog. A facility that requires up-to-date vaccinations is protecting your dog, not creating busywork. It means the dogs your pup will be around are held to the same standard — which is exactly why we require them too.",
          "People who treat it like more than a job. You can feel the difference between a team that's counting down to close and a team that genuinely lights up around dogs. The second kind is what we hire for, and it's what you want.",
        ],
      },
      {
        paragraphs: [
          "Because Planet Pooch is a full-service resort — boarding, daycare, grooming, and training all under one roof — your dog can come home not just happy, but freshly bathed and ready to go. A lot of our boarding families add a groom to the end of a stay so their pup walks back through the door looking and smelling their best.",
        ],
      },
      {
        heading: "A Quick Word on Vaccinations — Plan Ahead Here",
        paragraphs: [
          "This is the one piece of summer prep that trips owners up most, so it's worth saying plainly: like most quality facilities, we require a Bordetella (kennel cough) vaccine, and it needs to be administered at least 14 days before your dog's stay.",
          "That two-week window matters. If your trip is three weeks out and your dog isn't current, you still have time — but if you wait until a few days before, you'll be stuck. Check your dog's records now, and if anything's expired or coming due, get it handled early. Your vet's summer schedule fills up too.",
        ],
      },
      {
        heading: "A Little Prep Makes Drop-Off Easy",
        paragraphs: [
          "To make the whole thing smooth when the day comes:",
        ],
        bullets: [
          "Book early — especially for holiday weekends.",
          "Confirm vaccinations are current, with Bordetella at least 14 days ahead.",
          "Pack their food if your dog has a sensitive stomach or a specific diet; consistency keeps tummies happy.",
          "Bring a familiar comfort item — a blanket or toy that smells like home can ease the transition.",
          "Share the details that matter — medications, quirks, fears, favorite games. The more our team knows, the better we can care for your dog.",
        ],
      },
      {
        heading: "Travel With Peace of Mind This Summer",
        paragraphs: [
          "You've earned your time off. Your dog shouldn't be the reason you spend the whole trip worrying. The right boarding choice turns “I hope they're okay” into “I know they're having a blast” — and that's the difference between a vacation you half-enjoy and one you actually relax into.",
          "At Planet Pooch Pet Resort, located at 1114 Hempstead Turnpike in Franklin Square, we treat summer boarding the way we'd want our own dogs treated: active days, clean spaces, attentive people, and a whole lot of genuine love for the dogs in our care. We serve families across Nassau County and Long Island — and summer suites go quickly.",
          "Planning travel this summer? Reserve your dog's stay at Planet Pooch early — book online or give us a call, and let's get them on the calendar before the spots are gone.",
        ],
      },
    ],
  },

  "summer-boarding-at-planet-pooch-why-booking-early-matters-more-than-ever": {
    slug: "summer-boarding-at-planet-pooch-why-booking-early-matters-more-than-ever",
    title: "Summer Boarding at Planet Pooch Pet Resort: Why Booking Early Matters More Than Ever",
    metaTitle: "Summer Dog Boarding: Why Booking Early Matters | Planet Pooch Blog",
    metaDescription:
      "Summer boarding spots fill up fast. Here's why reserving your dog's stay early means less stress, more flexibility, and a smoother experience for everyone.",
    hasFullContent: true,
    datePublished: "2026-06-03",
    intro:
      "Summer is one of the busiest seasons of the year for pet boarding, and spots at Planet Pooch Pet Resort fill up faster than most pet parents expect. Between vacations, weekend getaways, weddings, and last-minute travel plans, availability can shrink weeks — or even months — in advance. If you're planning any time away this summer, the biggest mistake you can make is waiting too long to book your dog's stay.",
    sections: [
      {
        heading: "Why summer boarding books up so quickly",
        paragraphs: [
          "Summer isn't just “busy” — it's peak demand. Most boarding facilities operate near or at capacity during:",
        ],
        bullets: [
          "Memorial Day to Labor Day weekends",
          "School vacation periods",
          "Extended family trips and holidays",
          "Last-minute travel deals people jump on quickly",
        ],
      },
      {
        heading: "The risk of waiting too long",
        paragraphs: [
          "At Planet Pooch Pet Resort, we consistently see prime dates — especially weekends and holiday weeks — reserved far in advance. Once those spots are gone, they're gone.",
          "Delaying your reservation doesn't just limit options — it can completely change your dog's experience. Waiting often means:",
        ],
        bullets: [
          "Limited or no availability for your preferred dates",
          "Splitting stays across multiple facilities or caretakers",
          "Less flexibility in room type or playgroup scheduling",
          "Added stress trying to “figure it out last minute”",
        ],
      },
      {
        heading: "Why early booking is better for your dog",
        paragraphs: [
          "And for dogs who thrive on routine, rushed decisions can make the experience harder on everyone. Booking early at Planet Pooch Pet Resort ensures your dog gets:",
        ],
        bullets: [
          "A reserved spot in a structured, supervised environment",
          "Time to acclimate before their stay if needed",
          "Proper scheduling for playgroups and enrichment",
          "A smoother, lower-stress drop-off experience",
        ],
      },
      {
        heading: "Summer should be stress-free — for you and your dog",
        paragraphs: [
          "Early reservations also give our team time to prepare for your dog's individual needs, whether that includes feeding instructions, medications, or personality-based group placement.",
          "Vacations are supposed to be relaxing. The last thing you want is scrambling at the last minute trying to find availability or settling for a less-than-ideal boarding option. Planning ahead means you can travel confidently, knowing your dog is safe, comfortable, and cared for.",
        ],
      },
      {
        heading: "Final reminder: don't wait",
        paragraphs: [
          "If you already know you'll be traveling this summer, now is the time to book. Even “just checking dates” early can make the difference between getting your ideal stay and missing out entirely. At Planet Pooch Pet Resort, summer spots are limited and consistently fill fast.",
          "Secure your reservation early — your future self (and your dog) will thank you.",
        ],
      },
    ],
  },

  "treat-your-dog-to-a-summer-staycation-at-planet-pooch-pet-resort": {
    slug: "treat-your-dog-to-a-summer-staycation-at-planet-pooch-pet-resort",
    title: "Treat Your Dog to a Summer Staycation at Planet Pooch Pet Resort",
    metaTitle: "Summer Staycation for Your Dog | Planet Pooch Blog",
    metaDescription:
      "Planning summer travel? Give your pup a vacation of their own with spacious suites, supervised backyard play, climate-controlled indoor spaces, and daily report cards.",
    hasFullContent: true,
    datePublished: "2026-06-02",
    intro:
      "Planning a summer vacation? Your dog deserves a vacation too. At Planet Pooch Pet Resort, our boarding experience is designed to keep dogs comfortable, active, and cared for while you're away.",
    sections: [
      {
        heading: "Spacious suites for a comfortable stay",
        paragraphs: [
          "We know every dog is different, which is why we offer comfortable boarding suites designed to help your pup feel relaxed during their stay. Whether they're staying for a weekend getaway or a longer summer vacation, our goal is to create a safe and welcoming environment that feels like a second home.",
        ],
      },
      {
        heading: "Backyard play area for safe outdoor fun",
        paragraphs: [
          "Summer means more playtime. Dogs staying with us get to enjoy our spacious backyard play area where they can run, explore, and socialize under staff supervision. Outdoor time gives pups the chance to burn energy, enjoy fresh air, and have fun with their furry friends.",
        ],
      },
      {
        heading: "Indoor temperature-controlled comfort",
        paragraphs: [
          "Hot summer days are no problem at Planet Pooch Pet Resort. Our indoor spaces are temperature controlled to help keep dogs comfortable no matter how warm it gets outside. After outdoor play sessions, pups can relax and cool off indoors in a safe, clean environment.",
        ],
      },
      {
        heading: "Daily report cards with photos",
        paragraphs: [
          "We know being away from your dog can be tough — that's why we keep pet parents updated with daily report cards and photos during their stay. You'll get to see what your pup has been up to and how much fun they're having while you're away.",
          "From playtime snapshots to updates from our staff, we love helping owners stay connected to their dogs throughout their visit.",
        ],
      },
      {
        heading: "A summer vacation your dog will love",
        paragraphs: [
          "At Planet Pooch Pet Resort, boarding is more than just a place to stay — it's a place to play, relax, and be cared for by a team that truly loves dogs.",
          "If you're planning summer travel, now's the perfect time to reserve your pup's stay with us.",
        ],
      },
    ],
  },

  "memorial-day-weekend-dog-boarding-what-pet-parents-should-know-before-traveling": {
    slug: "memorial-day-weekend-dog-boarding-what-pet-parents-should-know-before-traveling",
    title: "Memorial Day Weekend Dog Boarding: What Pet Parents Should Know Before Traveling",
    metaTitle: "Memorial Day Weekend Dog Boarding | Planet Pooch Blog",
    metaDescription:
      "Memorial Day Weekend boarding books up fast. Here's what to pack, how to prepare your dog, and why reserving early matters for a stress-free holiday.",
    hasFullContent: true,
    datePublished: "2026-05-20",
    intro:
      "Memorial Day Weekend is one of the busiest travel weekends of the year — and that means dog boarding reservations fill up fast. If you're planning a getaway, now is the perfect time to make sure your pup has a safe, comfortable place to stay while you're away.",
    sections: [
      {
        heading: "Why holiday boarding books early",
        paragraphs: [
          "Holiday weekends are high-demand times for our pet resort. Many families travel at the same time, which means limited availability for overnight stays. Booking early helps ensure your dog gets a spot and gives you time to prepare everything they'll need for a smooth stay.",
        ],
      },
      {
        heading: "What to bring for your dog's boarding stay",
        paragraphs: [
          "To help your dog feel comfortable during Memorial Day Weekend boarding, be sure to pack:",
        ],
        bullets: [
          "Enough food for their entire stay",
          "Any medications with clear instructions",
          "Emergency contact information",
          "Comfort items like a blanket or favorite toy",
        ],
      },
      {
        heading: "Tips to prepare your dog for boarding",
        paragraphs: [
          "If your dog is new to boarding, consider scheduling a daycare visit beforehand. This gives them a chance to get familiar with the environment, staff, and daily routine before an overnight stay.",
          "Other helpful tips:",
        ],
        bullets: [
          "Keep drop-offs calm and positive",
          "Maintain your dog's feeding schedule before arrival",
          "Update any care instructions with staff ahead of time",
        ],
      },
      {
        heading: "Reserve your spot early",
        paragraphs: [
          "Booking ahead helps ensure your pup has a fun, safe place to stay while you enjoy your holiday plans. Whether your dog loves group play, extra cuddles, or relaxing in a cozy suite, planning early makes all the difference for a stress-free holiday weekend.",
        ],
      },
    ],
  },

  "why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety": {
    slug: "why-you-should-have-your-dog-socialized-and-how-not-socializing-them-can-lead-to-separation-anxiety",
    title: "Why You Should Have Your Dog Socialized — And How Not Socializing Them Can Lead to Separation Anxiety",
    metaTitle: "Why You Should Socialize Your Dog | Planet Pooch Blog",
    metaDescription:
      "Socialization is one of the most important parts of raising a well-adjusted dog — and it's a key factor in preventing separation anxiety.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "When we bring a dog into our homes, we want them to be happy, well-behaved, and comfortable in all environments. Socialization is one of the most important aspects of raising a well-adjusted dog. It's not just about letting your dog play with other dogs or people — it's about exposing them to various experiences, environments, and situations so they can learn how to navigate the world confidently. But what happens when a dog isn't properly socialized? One common consequence is separation anxiety — a condition that can lead to destructive behaviors, excessive barking, and emotional distress when left alone.",
    sections: [
      {
        heading: "What is socialization?",
        paragraphs: [
          "Socialization involves exposing your dog to different people, animals, environments, and situations in a controlled and positive way. It starts as early as possible — ideally during puppyhood — but it can also be done successfully with older dogs.",
        ],
        bullets: [
          "Become comfortable around other dogs, people, and new environments",
          "Learn proper behavior cues, like how to play nicely with other dogs",
          "Overcome fear of new things or situations",
          "Build confidence in unfamiliar circumstances",
          "Improve their relationship with you by understanding boundaries and expectations",
        ],
      },
      {
        heading: "How socialization reduces separation anxiety",
        paragraphs: [
          "Separation anxiety occurs when a dog becomes distressed when separated from their owner or primary caregiver. It's more than whining or barking when you head out the door — it's a serious emotional condition that can manifest in destructive behaviors, excessive drooling, house soiling, and even self-injury. While there are many factors that contribute to separation anxiety, socialization — or the lack of it — plays a significant role.",
          "Building confidence in different environments. Dogs that aren't socialized often become overly reliant on their owners. Without exposure to other people, animals, and places, they feel insecure when left alone. Early, frequent socialization teaches them to be confident in a variety of situations, which directly translates to handling alone time better.",
          "Reducing dependency. Dogs who haven't had exposure to other people or animals can become extremely attached to their owners. This dependence increases the likelihood of separation anxiety when the owner is away. Socialization helps dogs form positive associations with other dogs, pets, and strangers.",
          "Positive associations with being alone. During socialization, a dog learns to manage different situations both with you and without you. Whether it's being left with a family member or spending time at doggy daycare, positive experiences with alone time help dogs understand that separation doesn't always lead to negative outcomes.",
        ],
      },
      {
        heading: "The risks of not socializing your dog",
        paragraphs: [
          "Failing to socialize your dog can lead to over-attachment, fear-based behaviors, destructive behavior, and unpredictable reactions. Without socialization, dogs may not be able to predict how to respond in various situations — making leaving them alone harder, since you may worry about how they'll react when you're not around.",
        ],
      },
      {
        heading: "How to socialize your dog effectively",
        paragraphs: [
          "The good news: it's never too late. Whether you have a puppy or an adult dog, there are ways to introduce them to new experiences that build confidence and reduce the risk of separation anxiety.",
        ],
        bullets: [
          "Start early — puppies have critical socialization windows between 3–14 weeks",
          "Take it slow — expose your dog to new experiences one at a time, with positive associations",
          "Use positive reinforcement — treats, praise, and play create good associations",
          "Attend puppy classes or playgroups — structured, supervised environments are safest",
          "Introduce new environments — parks, pet-friendly stores, different walking routes",
        ],
      },
    ],
  },

  "why-dog-daycare-is-beneficial-for-your-pup-during-the-winter": {
    slug: "why-dog-daycare-is-beneficial-for-your-pup-during-the-winter",
    title: "Why Dog Daycare is a Better Option Than Hiring a Dog Sitter",
    metaTitle: "Dog Daycare vs. Dog Sitter — Why Daycare Wins | Planet Pooch Blog",
    metaDescription:
      "Dog daycare beats hiring a sitter for socialization, structure, professional supervision, and ongoing exercise. Here's why.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "When deciding between dog daycare and a dog sitter, daycare emerges as the superior choice for most pet owners. Here are the key advantages.",
    sections: [
      {
        heading: "Socialization benefits",
        paragraphs: [
          "Dog daycare provides opportunities for your pet to interact with other dogs, which helps prevent aggression, fear-based behaviors, and anxiety. A dog sitter cannot offer this group dynamic and controlled peer interaction.",
        ],
      },
      {
        heading: "Structured environment",
        paragraphs: [
          "Daycares offer scheduled activities, playtime, rest periods, and mental stimulation sessions. This consistency creates a sense of security and reduces behavioral issues stemming from boredom or lack of exercise.",
        ],
      },
      {
        heading: "Professional supervision",
        paragraphs: [
          "Trained daycare staff understand how to manage various dog personalities and behaviors. They can handle emergencies and address behavioral concerns more effectively than typical sitters who lack specialized training.",
        ],
      },
      {
        heading: "Physical exercise",
        paragraphs: [
          "Daycare provides extensive opportunities for dogs to run and play throughout the day, promoting better health, reduced anxiety, and improved behavior at home — far beyond what a standard walk with a sitter offers.",
        ],
      },
      {
        heading: "Continuous supervision",
        paragraphs: [
          "Unlike sitters who may leave or become distracted, daycare facilities maintain constant on-site supervision, ensuring your dog remains safe and monitored throughout the day.",
        ],
      },
      {
        heading: "Cost effectiveness",
        paragraphs: [
          "For frequent care needs, daycare packages typically offer better value than repeated sitter bookings, making it a more economical long-term solution.",
        ],
      },
      {
        heading: "Peace of mind",
        paragraphs: [
          "Daily updates and transparent care practices allow owners to feel confident their dogs receive quality care in a safe, managed environment.",
        ],
      },
    ],
  },

  "what-is-dog-daycare-a-complete-guide-for-pet-parents": {
    slug: "what-is-dog-daycare-a-complete-guide-for-pet-parents",
    title: "What is Dog Daycare? A Complete Guide for Pet Parents",
    metaTitle: "What is Dog Daycare? A Complete Guide | Planet Pooch Blog",
    metaDescription:
      "Dog daycare provides a safe, supervised environment for your dog while you're away. Here's what it includes, why it works, and how to choose the right one.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "Dog daycare is a service that provides a safe, supervised environment where your dog can spend the day while you're away. Like daycare for children, dog daycare offers a place for dogs to socialize, play, and receive attention when their owners are at work, traveling, or otherwise occupied.",
    sections: [
      {
        heading: "The basics",
        paragraphs: [
          "Dog daycare is designed to offer a structured environment where your dog interacts with other dogs, gets plenty of exercise, and enjoys companionship. Most facilities have large indoor or outdoor play areas where dogs are grouped by size, age, or temperament to ensure a safe, enjoyable experience.",
          "During their time at daycare, dogs play with toys, run and fetch, participate in group play, or relax in a comfortable setting. Trained staff oversee the playtime, ensuring all dogs are well-matched and behave appropriately.",
        ],
      },
      {
        heading: "Why dogs benefit from daycare",
        paragraphs: [
          "While some pet owners can dedicate significant time to their dogs, others may struggle to meet their pets' needs due to work, social commitments, or travel. Daycare is great for busy owners who want to make sure their dog gets the exercise, socialization, and mental stimulation they need.",
          "For active dogs — especially high-energy breeds — daycare is an excellent way to burn off energy that might otherwise lead to destructive behaviors at home. For social dogs, it's a valuable opportunity to interact with other dogs in a controlled setting. For dogs with separation anxiety, daycare can help them get used to being away from their owners in a positive, enriching environment.",
        ],
      },
      {
        heading: "What to expect",
        bullets: [
          "Socialization — dogs grouped by size, temperament, and play style for safe interaction",
          "Exercise — group play and interactive games provide significant physical activity",
          "Supervision — trained staff monitor at all times; some facilities offer video monitoring",
          "Mental stimulation — games, puzzle toys, and training sessions",
          "Add-on services — many daycares offer grooming, nail trimming, or basic health checks",
        ],
      },
      {
        heading: "How to choose the right daycare",
        paragraphs: [
          "Look at staff experience, safety measures, facility cleanliness, how dogs are matched into playgroups, and reviews from other dog owners. The right daycare provides a fulfilling and enriching experience while giving you peace of mind.",
        ],
      },
    ],
  },

  "pedestrian-safety-and-walking-dogs-a-guide-to-staying-safe-on-the-streets": {
    slug: "pedestrian-safety-and-walking-dogs-a-guide-to-staying-safe-on-the-streets",
    title: "Pedestrian Safety and Walking Dogs: A Guide to Staying Safe on the Streets",
    metaTitle: "Walking Dogs Safely on Long Island Streets | Planet Pooch Blog",
    metaDescription:
      "Ten tips for keeping you and your dog safe on Long Island streets — proper equipment, visibility, traffic awareness, weather, and street smarts.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "Walking your dog is one of life's simple pleasures, but as pedestrian traffic and roadways get busier, safety should always be top of mind. Whether you're strolling through the park or heading to the corner store, here are key steps to keep you and your dog safe.",
    sections: [
      {
        heading: "Use proper equipment",
        paragraphs: [
          "Make sure your dog is on a sturdy leash that gives you control without being too long. A long leash near busy roads can give your dog too much freedom to dart into traffic. A harness is often a better choice than a collar — especially for pullers — since it prevents neck injury and gives more control.",
        ],
      },
      {
        heading: "Obey traffic signals and crosswalks",
        paragraphs: [
          "Always use crosswalks and obey pedestrian signals. It's safer for you, sets a good example, and reinforces good habits. Dogs pick up on your behavior.",
        ],
      },
      {
        heading: "Be visible, especially at night",
        paragraphs: [
          "Wear reflective clothing or use lights for early-morning or after-dark walks. Reflective or LED collars and leashes keep your dog visible to drivers.",
        ],
      },
      {
        heading: "Mind your dog's pace and behavior",
        paragraphs: [
          "Adjust your walking pace to your dog's comfort. On busy streets, keep your dog close. Stay aware of distractions — other animals, pedestrians, or loud noises that might cause sudden movements.",
        ],
      },
      {
        heading: "Be aware of traffic and road hazards",
        paragraphs: [
          "Distracted walking — checking your phone, long conversations — can lead to missed warning signs. Watch oncoming traffic, especially in poor visibility or narrow sidewalks. Be cautious at intersections; drivers may not yield even on a green pedestrian light.",
        ],
      },
      {
        heading: "Watch for unsafe conditions and weather",
        paragraphs: [
          "Potholes, cracked sidewalks, ice, and wet leaves can cause falls. On hot days, avoid peak sun hours — pavement can burn paw pads. In cold weather, salt and ice melt can irritate your dog's paws; consider protective boots.",
        ],
      },
      {
        heading: "Train your dog to be street smart",
        paragraphs: [
          "Teach your dog to stop at curbs and wait for your signal before crossing. Positive reinforcement helps them understand boundaries. Stay calm and collected if you encounter an off-leash dog or anxious situation — panic can make your dog react unpredictably.",
        ],
      },
    ],
  },

  "the-benefits-of-socializing-dogs-and-avoiding-loneliness-at-home": {
    slug: "the-benefits-of-socializing-dogs-and-avoiding-loneliness-at-home",
    title: "The Benefits of Socializing Dogs and Avoiding Loneliness at Home",
    metaTitle: "Socializing Dogs & Preventing Loneliness | Planet Pooch Blog",
    metaDescription:
      "Socialization and preventing loneliness are two of the biggest factors in a happy, balanced dog. Eight ways they make a difference.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "When it comes to raising a happy, healthy, well-adjusted dog, socialization and preventing loneliness are two key factors. Whether you're a first-time dog owner or a seasoned pet parent, understanding these can significantly improve your dog's quality of life.",
    sections: [
      {
        heading: "Reduced behavioral problems",
        paragraphs: [
          "Properly socialized dogs are less likely to develop anxiety, aggression, or fear-based behaviors. Exposure to a variety of people, dogs, and environments helps dogs learn to interact appropriately and feel comfortable in different situations.",
        ],
      },
      {
        heading: "Better emotional health",
        paragraphs: [
          "Like people, dogs need emotional stimulation and positive experiences to stay balanced. Dogs left isolated for long periods often experience loneliness and boredom — which can lead to depression, anxiety, and destructive behavior. Socialization gives them the bonds and security they crave.",
        ],
      },
      {
        heading: "Preventing separation anxiety",
        paragraphs: [
          "Dogs are social animals; prolonged isolation can cause anxiety or fear when left alone. Socializing your dog and providing regular engagement helps reduce this stress. Over time, regularly socialized dogs are more comfortable spending time without their owners.",
        ],
      },
      {
        heading: "Improved confidence and adaptability",
        paragraphs: [
          "Dogs exposed to a variety of people, dogs, and situations handle new experiences with more ease — whether it's a vet visit or meeting a new person. They're more adaptable to changes like moves, travel, or new pets in the household.",
        ],
      },
      {
        heading: "Enhanced physical and mental health",
        paragraphs: [
          "Socializing dogs often involves play and exercise with other dogs, providing both mental and physical stimulation. This helps prevent obesity, lethargy, and pent-up energy that can lead to destructive behaviors.",
        ],
      },
      {
        heading: "Stronger bond with you, longer life for them",
        paragraphs: [
          "Regular socialization deepens the bond between you and your dog. Dogs who are socially engaged and not left alone for long periods are often healthier and live longer. Mental and emotional stimulation keeps a dog's mind sharp; regular play keeps their body fit.",
        ],
      },
    ],
  },

  "how-owning-a-pet-can-reduce-stress-the-healing-power-of-pets": {
    slug: "how-owning-a-pet-can-reduce-stress-the-healing-power-of-pets",
    title: "How Owning a Pet Can Reduce Stress: The Healing Power of Pets",
    metaTitle: "How Pets Reduce Stress | Planet Pooch Blog",
    metaDescription:
      "Pets provide unconditional love, encourage activity, lower blood pressure, and help us live in the moment. Ten ways they reduce stress.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "Stress has become part of daily life for many people — but one of the simplest and most effective ways to alleviate it is by having a pet. Whether it's a playful dog, a serene cat, or even a calming fish tank, animals can have a profound impact on your mental and emotional well-being.",
    sections: [
      {
        heading: "Unconditional love and companionship",
        paragraphs: [
          "Pets offer steady comfort and emotional support. Coming home to an excited puppy or a contented cat after a stressful day can be soothing — and the bond reduces feelings of loneliness, a major contributor to stress.",
        ],
      },
      {
        heading: "Physical activity and lower blood pressure",
        paragraphs: [
          "Walking or playing with your pet releases endorphins and lowers blood pressure and heart rate. Petting a dog or cat activates the parasympathetic nervous system, helping reduce stress and promote relaxation.",
        ],
      },
      {
        heading: "Routine, mindfulness, and emotional support",
        paragraphs: [
          "Pets create daily structure — feeding, walking, grooming, and playing — which is comforting for people overwhelmed by unpredictability. They also keep us in the present moment, redirecting our minds from past worries or future uncertainties.",
        ],
      },
      {
        heading: "Laughter, distraction, and connection",
        paragraphs: [
          "The sheer unpredictability of a pet's behavior brings genuine laughter, which releases tension and improves mood. Pets are also bridges to social connections — bonding with other dog owners at the park or sharing experiences with fellow pet parents.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Pets aren't just animals — they're healers, stress relievers, and lifelong friends. If you're feeling stressed, consider spending more time with your pet, or adopting one if you don't already have one.",
        ],
      },
    ],
  },

  "why-dog-daycare-is-great-for-both-small-and-large-breeds": {
    slug: "why-dog-daycare-is-great-for-both-small-and-large-breeds",
    title: "Why Dog Daycare is Great for Both Small and Large Breeds",
    metaTitle: "Dog Daycare for Small & Large Breeds | Planet Pooch Blog",
    metaDescription:
      "Whether your dog is the size of a teacup or a gentle giant, dog daycare offers socialization, exercise, mental stimulation, and peace of mind.",
    hasFullContent: true,
    datePublished: "2026-05-06",
    intro:
      "If you're a dog parent, you've probably wondered if dog daycare is right for your furry friend. Whether your dog is the size of a teacup or a gentle giant, dog daycare can be a fantastic option for both small and large breeds.",
    sections: [
      {
        heading: "Socialization opportunities for all sizes",
        paragraphs: [
          "Small dogs gain confidence around dogs of all sizes in a controlled environment. Larger breeds engage in active play with dogs their size — burning off energy in a healthy, supervised way.",
        ],
      },
      {
        heading: "Tailored playtime for different energy levels",
        paragraphs: [
          "We have dedicated play areas for different sized dogs. Small breeds aren't overwhelmed by larger, more boisterous dogs; larger breeds get the physically demanding play they need.",
        ],
      },
      {
        heading: "Mental and physical stimulation",
        paragraphs: [
          "Both small and large breeds need both kinds of stimulation. Small dogs get toys, puzzles, and gentle play; larger breeds get the space to run, jump, and play that keeps them healthy and out of trouble.",
        ],
      },
      {
        heading: "Peace of mind for owners",
        paragraphs: [
          "Whether you have a tiny pup or a massive dog, daycare provides a safe, supervised environment. Trained staff monitor behavior so dogs don't get into trouble or feel overwhelmed.",
        ],
      },
      {
        heading: "Building trust and confidence",
        paragraphs: [
          "Daycare helps dogs feel comfortable in new environments and around other dogs — making them more adaptable and less likely to develop anxiety or fear in unfamiliar situations.",
        ],
      },
    ],
  },

  "how-often-should-you-get-your-dog-groomed": {
    slug: "how-often-should-you-get-your-dog-groomed",
    title: "How Often Should You Get Your Dog Groomed?",
    metaTitle: "How Often Should You Get Your Dog Groomed? | Planet Pooch Blog",
    metaDescription:
      "Dog grooming frequency depends on breed and coat type. Most dogs benefit from professional grooming every 4–6 weeks to maintain health and comfort.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "One of the most common questions we hear from pet parents is how often their dog actually needs to be groomed. The answer depends on your dog's breed, coat type, lifestyle, and skin sensitivity — but a good baseline is every 4–6 weeks for most dogs.",
    sections: [
      {
        heading: "General grooming guidelines by coat type",
        paragraphs: [
          "Short-coated dogs like Labs, Beagles, and Frenchies can typically go 6–8 weeks between grooming sessions. They don't need frequent haircuts, but they still benefit from baths, deshedding, nail trims, and ear cleaning.",
          "Medium to long-coated breeds like Golden Retrievers and Aussies should be groomed every 4–6 weeks. Regular brushing and professional grooming prevent matting and keep the coat manageable.",
          "Curly or doodle-type coats — Poodles, Goldendoodles, Labradoodles — need grooming every 3–5 weeks. These coats mat quickly and require consistent grooming to stay comfortable and healthy.",
          "Double-coated breeds like Huskies and German Shepherds do well on a 4–8 week schedule depending on shedding season, with deshedding treatments to manage undercoat blowouts.",
        ],
      },
      {
        heading: "Why routine grooming matters",
        paragraphs: [
          "Grooming isn't just about appearance — it's a health practice. Skipping regular grooming can lead to discomfort, skin irritation, and even behavioral changes due to pain.",
        ],
        bullets: [
          "Prevents painful matting that pulls on the skin",
          "Maintains skin health and catches issues early",
          "Reduces shedding and allergens in your home",
          "Enables early detection of lumps, bumps, or skin conditions",
          "Keeps nails at a healthy length for proper joint alignment",
          "Prevents ear infections through regular cleaning",
        ],
      },
      {
        heading: "Lifestyle considerations",
        paragraphs: [
          "Some dogs need more frequent grooming based on how they spend their time. Dogs that swim often, play outside daily, attend daycare, or have allergies or sensitive skin will benefit from a shorter grooming cycle.",
        ],
      },
      {
        heading: "When should puppies start?",
        paragraphs: [
          "Puppies should begin professional grooming around 12–16 weeks old, after their initial vaccinations. Starting early builds positive associations with grooming and makes future sessions much easier.",
        ],
      },
      {
        heading: "The sweet spot",
        paragraphs: [
          "For most dogs, every 4–6 weeks is the ideal routine. Staying consistent keeps your dog comfortable, healthy, and looking their best — and helps avoid the need for drastic interventions like shaving out severe mats.",
        ],
      },
    ],
  },

  "is-it-bad-to-shave-my-goldendoodle-what-you-need-to-know": {
    slug: "is-it-bad-to-shave-my-goldendoodle-what-you-need-to-know",
    title: "Is It Bad to Shave My Goldendoodle? What You Need to Know",
    metaTitle: "Is It Bad to Shave My Goldendoodle? | Planet Pooch Blog",
    metaDescription:
      "Shaving a Goldendoodle is sometimes necessary for health and comfort, but regular professional grooming is the best way to prevent matting and skin issues.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Goldendoodles have beautiful, thick coats — but they can also be high-maintenance. If your doodle's coat has gotten out of hand, you might be wondering whether shaving is the right call. Here's what you need to know.",
    sections: [
      {
        heading: "Why Goldendoodles might need a shave",
        paragraphs: [
          "Severe matting is the most common reason. Goldendoodle coats tangle easily, and when mats get tight, they pull on the skin and cause pain. In these cases, shaving is often the most humane option.",
          "Hot weather and skin issues can also make a shorter coat the better choice. A dense coat traps heat, and shaving improves airflow. If your dog has a skin condition, a shorter coat makes treatment easier and more effective.",
          "Some owners also find that a shaved coat simplifies day-to-day maintenance, especially for dogs that resist frequent brushing.",
        ],
      },
      {
        heading: "The importance of regular grooming",
        paragraphs: [
          "The best way to avoid an unnecessary shave is regular professional grooming. Consistent brushing, trims, and baths prevent the mats and tangles that lead to a full shave in the first place.",
          "Our groomers evaluate each dog's coat and recommend the right approach — whether that's a full shave, a trim, or a detangling treatment. Regular visits every 3–5 weeks keep Goldendoodle coats healthy, comfortable, and mat-free.",
        ],
      },
    ],
  },

  "flea-and-tick-treatment-for-dogs-why-its-crucial-for-your-pups-health": {
    slug: "flea-and-tick-treatment-for-dogs-why-its-crucial-for-your-pups-health",
    title: "Flea and Tick Treatment for Dogs: Why It's Crucial for Your Pup's Health",
    metaTitle: "Flea & Tick Treatment for Dogs | Planet Pooch Blog",
    metaDescription:
      "Regular flea and tick treatments protect your dog from parasites, disease, and discomfort — and safeguard your home and family too.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Fleas and ticks are more than a nuisance — they're a genuine health risk for your dog and your household. Regular prevention is one of the most important things you can do as a pet parent, especially on Long Island where tick-borne diseases are common.",
    sections: [
      {
        heading: "Why flea and tick treatment is essential",
        paragraphs: [
          "Fleas feed on your dog's blood, causing intense itching, skin irritation, and inflammation. Left untreated, infestations lead to secondary infections, hair loss, and allergic reactions — and they spread quickly throughout your home.",
          "Ticks carry serious diseases including Lyme disease, Rocky Mountain spotted fever, and ehrlichiosis. These illnesses can cause joint pain, organ failure, and in severe cases can be fatal. Even a single tick bite poses a disease risk.",
          "Treating your dog also protects your home and family. Fleas spread rapidly indoors, and ticks occasionally attach to humans. Consistent prevention keeps your entire household safe.",
        ],
      },
      {
        heading: "Treatment options",
        paragraphs: [
          "There are several effective approaches, and your vet can help you choose the right one for your dog's age, breed, and health history.",
        ],
        bullets: [
          "Topical treatments — applied to the skin, effective for a month or longer",
          "Oral medications — pills that eliminate fleas and ticks within hours, lasting up to a month",
          "Flea and tick collars — worn continuously, releasing repellent chemicals for several months",
          "Medicated shampoos and sprays — best for treating active infestations, though they require more frequent use",
        ],
      },
      {
        heading: "When to start treatment",
        paragraphs: [
          "Begin treatments before warm weather arrives — spring and summer are peak season for fleas and ticks. On Long Island, many vets recommend year-round protection since mild winters can keep parasites active longer than expected.",
        ],
      },
    ],
  },

  "why-regular-grooming-is-more-than-just-keeping-your-pet-looking-their-best": {
    slug: "why-regular-grooming-is-more-than-just-keeping-your-pet-looking-their-best",
    title: "Why Regular Grooming Is More Than Just Keeping Your Pet Looking Their Best",
    metaTitle: "Why Regular Grooming Matters for Health | Planet Pooch Blog",
    metaDescription:
      "Regular grooming isn't just cosmetic — it promotes healthy skin, prevents health issues, and keeps your pet comfortable. Here's why it matters.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "A lot of pet parents think of grooming as a way to keep their dog looking good — and it does — but the health benefits are just as important. Regular grooming is one of the simplest ways to keep your pet comfortable and catch problems early.",
    sections: [
      {
        heading: "Promotes healthy skin and coat",
        paragraphs: [
          "Brushing removes dirt, reduces shedding, and stimulates the natural oils that keep your dog's coat shiny and their skin healthy. Without regular brushing, those oils build up unevenly, leading to dry patches or greasy spots.",
        ],
      },
      {
        heading: "Helps prevent health issues",
        paragraphs: [
          "Routine grooming gives us a chance to check for things you might not notice at home — skin conditions, lumps, ticks, ear infections, or dental issues. Catching these early means simpler, less expensive treatment and less discomfort for your dog.",
        ],
      },
      {
        heading: "Improves comfort",
        paragraphs: [
          "Overgrown nails, matted fur, and dirty ears aren't just unsightly — they're painful. Long nails alter your dog's gait and stress their joints. Mats pull on the skin. Regular grooming keeps your dog physically comfortable and happier day to day.",
        ],
      },
      {
        heading: "Controls odor and cleanliness",
        paragraphs: [
          "Regular baths and coat maintenance reduce odor and keep your home fresher too. If you've noticed your dog smelling more than usual, it's often a sign they're overdue for a grooming session.",
        ],
      },
    ],
  },

  "the-importance-of-regular-nail-trimming-for-your-dog": {
    slug: "the-importance-of-regular-nail-trimming-for-your-dog",
    title: "The Importance of Regular Nail Trimming for Your Dog",
    metaTitle: "Why Regular Dog Nail Trimming Matters | Planet Pooch Blog",
    metaDescription:
      "Regular nail trimming prevents pain, injury, and mobility issues in dogs. Learn why it matters and tips for keeping nails at a healthy length.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Nail trimming is one of those grooming tasks that's easy to put off — but overgrown nails can cause real problems for your dog. Here's why staying on top of it matters more than you might think.",
    sections: [
      {
        heading: "Prevents pain and discomfort",
        paragraphs: [
          "When nails get too long, they press into the paw pad with every step. This changes your dog's gait and puts strain on their joints, which can contribute to arthritis and other musculoskeletal problems over time.",
        ],
      },
      {
        heading: "Reduces the risk of injury",
        paragraphs: [
          "Long nails can snag on carpet, furniture, or outdoor surfaces, causing painful breaks or splits that sometimes require veterinary attention. Keeping nails trimmed reduces this risk significantly.",
        ],
      },
      {
        heading: "Protects your home",
        paragraphs: [
          "Long nails scratch hardwood floors, furniture, and skin during play. Regular trims protect both your dog and your belongings.",
        ],
      },
      {
        heading: "Promotes better paw health and mobility",
        paragraphs: [
          "Overgrown nails cause toes to splay unnaturally, putting pressure on ligaments and joints. This can lead to paw deformities and infections. Dogs also rely on their nails for traction — nails that are too long actually reduce grip and confidence, especially on slippery surfaces.",
        ],
      },
      {
        heading: "Tips for safe nail trimming",
        bullets: [
          "Use sharp, high-quality dog nail clippers or a grinding tool",
          "Trim gradually when nails are dark and the quick isn't visible",
          "Reward your dog with praise or treats to build positive associations",
          "If you're unsure, let a professional groomer or vet handle it",
        ],
      },
    ],
  },

  "why-mobile-grooming-is-good-for-your-pet": {
    slug: "why-mobile-grooming-is-good-for-your-pet",
    title: "Why Mobile Grooming Is Good for Your Pet",
    metaTitle: "Why Mobile Grooming Is Good for Your Pet | Planet Pooch Blog",
    metaDescription:
      "Mobile grooming brings professional care to your door — less stress for your pet, more convenience for you, and one-on-one attention every session.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Mobile grooming has become a go-to for pet parents who want a calmer, more personalized grooming experience for their dog. Instead of a busy salon, the groomer comes to you — and the difference in your pet's comfort is noticeable.",
    sections: [
      {
        heading: "Less stress for your pet",
        paragraphs: [
          "Traditional grooming salons can overwhelm dogs — the sounds of other pets, unfamiliar smells, and the bustle of a busy shop. Mobile grooming removes all of that. Your dog is groomed in a quiet, controlled environment with no other animals around, which makes a huge difference for anxious or reactive dogs.",
        ],
      },
      {
        heading: "Convenience for you",
        paragraphs: [
          "No driving, no drop-off, no waiting room. The groomer arrives at your home on a schedule that works for you. This is especially helpful for owners with busy schedules, elderly individuals, or anyone with mobility challenges.",
        ],
      },
      {
        heading: "One-on-one attention",
        paragraphs: [
          "Mobile groomers work with one pet at a time, providing undivided focus. Services can be customized to your dog's specific needs and preferences without the distractions of a busy salon.",
        ],
      },
      {
        heading: "Ideal for senior or special needs pets",
        paragraphs: [
          "Older dogs and those with health issues benefit from the calm, quiet environment of a mobile van. There's less physical strain, and experienced mobile groomers take the extra time these pets need.",
        ],
      },
      {
        heading: "Safer and more hygienic",
        paragraphs: [
          "Mobile vans are sanitized between every appointment, reducing cross-contamination risks. Your pet isn't exposed to the germs or parasites that can circulate in crowded facilities.",
        ],
      },
      {
        heading: "No long waits",
        paragraphs: [
          "Unlike salons that may keep your dog for hours, mobile grooming operates by appointment. Your dog isn't sitting in a crate waiting — the session starts when the groomer arrives and your dog is back inside shortly after.",
        ],
      },
      {
        heading: "Great for dogs with grooming anxiety",
        paragraphs: [
          "For dogs who've had negative grooming experiences, a quiet and familiar setting makes all the difference. One-on-one interaction helps dogs build trust with their groomer, making each session easier than the last.",
        ],
      },
    ],
  },

  "how-to-manage-your-pets-coat-during-the-shedding-season": {
    slug: "how-to-manage-your-pets-coat-during-the-shedding-season",
    title: "How to Manage Your Pet's Coat During the Shedding Season",
    metaTitle: "Managing Your Dog's Coat During Shedding Season | Planet Pooch Blog",
    metaDescription:
      "Spring shedding is natural — here's how to manage it with the right tools, brushing routine, and professional deshedding treatments.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Every spring, pet parents notice the same thing: fur everywhere. Shedding is a natural process driven by changes in daylight and temperature, and it's your dog's way of swapping their thick winter coat for something lighter. Here's how to stay on top of it.",
    sections: [
      {
        heading: "Why shedding increases in spring",
        paragraphs: [
          "As the weather warms, dogs shed their dense undercoat to prepare for summer. Double-coated breeds like Huskies, German Shepherds, and Golden Retrievers experience the most noticeable shedding, sometimes called a coat blowout. Even shorter-coated breeds shed more during this transition.",
        ],
      },
      {
        heading: "How to manage spring shedding",
        paragraphs: [
          "Increase your brushing routine during peak shedding. Short-haired dogs should be brushed at least once a week; long-haired and double-coated breeds benefit from brushing 2–3 times a week. Regular brushing removes loose hair before it ends up on your furniture.",
        ],
      },
      {
        heading: "Use the right tools",
        bullets: [
          "Deshedding tools like FURminators reach deep into double coats to remove loose undercoat",
          "Slicker brushes untangle mats and remove loose hair from long-haired breeds",
          "Deshedding gloves are a gentle option for sensitive dogs who don't love brushing",
        ],
      },
      {
        heading: "Bathing and diet",
        paragraphs: [
          "A spring bath with a deshedding shampoo loosens dead hair and preps the coat for brushing. Follow up with a thorough brush-out to catch everything the bath loosened.",
          "Proper nutrition also plays a role — foods rich in omega fatty acids support coat health and can reduce excessive shedding. Ask your vet about supplements if shedding seems unusually heavy.",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "If your dog's shedding is overwhelming or their coat has developed mats, a professional deshedding treatment can make a huge difference. Our groomers use specialized tools and techniques to remove loose undercoat safely and thoroughly — leaving your dog more comfortable and your home much cleaner.",
        ],
      },
    ],
  },

  "why-dog-boarding-is-a-great-choice-for-pet-owners-and-their-dogs": {
    slug: "why-dog-boarding-is-a-great-choice-for-pet-owners-and-their-dogs",
    title: "Why Dog Boarding Is a Great Choice for Pet Owners and Their Dogs",
    metaTitle: "Why Dog Boarding Is a Great Choice | Planet Pooch Blog",
    metaDescription:
      "Dog boarding provides peace of mind, professional care, socialization, and structured routines — a better option than leaving your dog at home alone.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "When you need to travel or be away for an extended period, boarding your dog at a professional facility gives both of you a better experience. Here's why it works.",
    sections: [
      {
        heading: "Peace of mind",
        paragraphs: [
          "Professional staff and established routines give your dog consistent daily care — meals, outdoor breaks, attention, and activity — without relying on a friend or neighbor who may not know your dog's needs.",
        ],
      },
      {
        heading: "A safe, secure environment",
        paragraphs: [
          "Boarding facilities are designed for dogs. Secure play areas, proper fencing, climate control, and staff trained in canine behavior mean your dog is in a space built specifically for their safety and comfort.",
        ],
      },
      {
        heading: "Socialization and stimulation",
        paragraphs: [
          "Dogs at boarding facilities interact with other dogs, enjoy structured playtime, and get mental stimulation throughout the day. Instead of sitting at home alone, your dog gets a mini vacation of their own.",
        ],
      },
      {
        heading: "Routine and structure",
        paragraphs: [
          "Dogs thrive on consistency. Boarding provides a reliable daily schedule — meals, bathroom breaks, exercise, and rest — that keeps your dog calm and comfortable even when you're not around.",
        ],
      },
      {
        heading: "Specialized care when needed",
        paragraphs: [
          "Good boarding facilities accommodate individual needs. Whether your dog has a specific diet, takes medication, or needs extra attention, trained staff handle these details so nothing gets missed.",
        ],
      },
    ],
  },

  "why-enrichment-activities-matter-for-your-dog": {
    slug: "why-enrichment-activities-matter-for-your-dog",
    title: "Why Enrichment Activities Matter for Your Dog",
    metaTitle: "Why Enrichment Activities Matter for Dogs | Planet Pooch Blog",
    metaDescription:
      "Enrichment activities provide mental and physical stimulation that reduce anxiety, build confidence, and strengthen the bond between you and your dog.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "Most dogs get plenty of physical exercise, but mental stimulation is just as important. Enrichment activities are structured games and exercises designed to keep your dog's mind sharp and their body active — and the benefits go well beyond keeping them busy.",
    sections: [
      {
        heading: "What enrichment looks like",
        paragraphs: [
          "Enrichment comes in many forms, and the best programs combine several types to keep dogs engaged.",
        ],
        bullets: [
          "Puzzle feeders and snuffle mats — dogs use their nose to hunt for treats, engaging natural foraging instincts",
          "Agility challenges — small jumps, tunnels, and balance work that build coordination and confidence",
          "Scent games — dogs learn to follow their nose and find hidden objects, tapping into their strongest sense",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Enrichment reduces boredom and anxiety. A mentally stimulated dog is less likely to develop destructive habits at home — chewing, barking, digging — because their need for engagement is already met.",
          "It builds confidence, especially in shy or nervous dogs. Successfully completing a new challenge gives dogs a sense of accomplishment that carries over into other situations.",
          "Group enrichment supports social skills too. Dogs learn to work around other dogs, share space, and engage in polite play.",
        ],
      },
      {
        heading: "The bond benefit",
        paragraphs: [
          "Many enrichment activities can be continued at home, giving you and your dog a new way to connect. It's not just about keeping them busy — it's about strengthening the relationship through shared experiences and problem-solving.",
        ],
      },
    ],
  },

  "training-puppies-and-adult-dogs-why-its-important-at-every-age": {
    slug: "training-puppies-and-adult-dogs-why-its-important-at-every-age",
    title: "Training Puppies and Adult Dogs: Why It's Important at Every Age",
    metaTitle: "Dog Training at Every Age — Puppies & Adults | Planet Pooch Blog",
    metaDescription:
      "Dog training isn't just for puppies. Whether you're building a foundation or correcting old habits, training improves communication and quality of life at any age.",
    hasFullContent: true,
    datePublished: "2026-05-19",
    intro:
      "There's a common misconception that training is only for puppies — but dogs benefit from structured training at every stage of life. Whether you're starting with a brand-new puppy or working with an adult dog, training builds communication, trust, and a better relationship.",
    sections: [
      {
        heading: "Training a puppy: building the foundation",
        paragraphs: [
          "Puppies are constantly learning, which makes early training especially impactful. Teaching basic commands like sit, stay, and come establishes good habits and prevents problem behaviors before they start.",
          "Early training also includes socialization — introducing puppies to new people, places, and sounds so they grow into confident adult dogs. Commands like 'come' and 'leave it' aren't just about obedience; they're safety tools.",
          "Short, positive sessions work best for puppies. Keep it fun, use plenty of rewards, and keep sessions brief enough that your puppy stays engaged rather than frustrated.",
        ],
      },
      {
        heading: "Training an adult dog: it's never too late",
        paragraphs: [
          "Adult dogs are fully capable of learning new behaviors and improving existing ones. In fact, they often have longer attention spans than puppies, which can make certain types of training easier.",
        ],
        bullets: [
          "Correct unwanted behaviors like jumping, pulling on leash, or excessive barking",
          "Provide mental stimulation that prevents boredom and destructive habits",
          "Improve communication so your dog understands what you expect",
          "Build confidence in shy or anxious dogs through structured, positive experiences",
        ],
      },
      {
        heading: "Why training matters at any age",
        paragraphs: [
          "Training is about more than obedience — it improves quality of life for both you and your dog. A trained dog is safer in public, calmer at home, and better equipped to handle new situations. And the process of working together strengthens the bond between you.",
          "With patience, consistency, and positive reinforcement, every dog can become a more confident, well-mannered companion.",
        ],
      },
    ],
  },
  "book-now-dont-let-labor-day-weekend-sneak-up-on-you": {
    slug: "book-now-dont-let-labor-day-weekend-sneak-up-on-you",
    title: "Book Now: Don't Let Labor Day Weekend Sneak Up on You",
    metaTitle: "Book Labor Day Weekend Dog Boarding Early | Planet Pooch Blog",
    metaDescription:
      "Labor Day is one of the busiest boarding weekends of the year and spots fill up fast. Here's why boarding beats the alternatives — and how to prepare for drop-off.",
    hasFullContent: true,
    datePublished: "2026-08-11",
    intro:
      "Summer always seems to end faster than we expect. One minute you're planning beach days, and the next you're staring down Labor Day weekend with a road trip on the calendar and no plan for your pup. If that sounds familiar, you're not alone — and now is the time to get ahead of it.",
    sections: [
      {
        heading: "The last big getaway of the season",
        paragraphs: [
          "Labor Day is one of the busiest travel weekends of the year, which means it's also one of our busiest boarding weekends. Families squeeze in that final lake trip, cabin stay, or long drive to see relatives before school schedules take over. It's the perfect send-off to summer — as long as your dog has a comfortable, safe place to stay while you're away.",
          "Here's the catch: those spots fill up fast. Every year we have wonderful clients call us the week before the holiday, hoping to snag a kennel, only to find we're fully booked. We hate turning anyone away, so consider this your friendly nudge to reserve early.",
        ],
      },
      {
        heading: "Why boarding beats the alternatives",
        paragraphs: [
          "Leaving your dog with a boarding facility isn't just convenient — it's often the best thing for them. Instead of being alone at home for long stretches or shuffled between friends who mean well but have busy lives, your dog gets:",
        ],
        bullets: [
          "Round-the-clock supervision from people who know how to spot when something's off",
          "A consistent routine with regular meals, potty breaks, and rest",
          "Plenty of playtime and social time to burn off that end-of-summer energy",
          "Peace of mind for you, so you can actually relax on your trip",
        ],
      },
      {
        paragraphs: [
          "Many dogs come home from boarding happily tired and a little more social than when they left. It turns out a weekend of new friends and supervised play is pretty good for them, too.",
        ],
      },
      {
        heading: "A few tips before you go",
        paragraphs: [
          "To make drop-off smooth, make sure your dog's vaccinations are current — we'll need those records on file. Pack their regular food to avoid an upset stomach, and feel free to bring a favorite toy or blanket that smells like home. And if your pup has never boarded before, ask us about a short trial stay so their first real visit feels familiar.",
        ],
      },
      {
        heading: "Reserve your spot today",
        paragraphs: [
          "Summer's not over yet, but the calendar moves quickly. Give your dog a fun, safe staycation while you enjoy your last big weekend — and give yourself the gift of not scrambling at the last minute.",
          "Call us or book online today to lock in Labor Day boarding before we fill up. We can't wait to spoil your best friend one more time before the season ends.",
        ],
      },
    ],
  },

  "the-last-weeks-of-summer-booking-boarding-before-the-rush": {
    slug: "the-last-weeks-of-summer-booking-boarding-before-the-rush",
    title: "The Last Weeks of Summer: Booking Boarding Before the Rush",
    metaTitle: "Book Late-Summer Dog Boarding Before It Fills | Planet Pooch Blog",
    metaDescription:
      "The last two weeks of summer are our busiest stretch of the year. Here's why late-August boarding fills up fast, plus a short pre-boarding checklist.",
    hasFullContent: true,
    datePublished: "2026-08-19",
    intro:
      "Labor Day weekend is closer than it feels. If there's one more trip on your calendar before the school year swallows everything — a long weekend at the lake, a family wedding, a final drive to the coast — now is the moment to sort out where your dog is staying.",
    sections: [
      {
        heading: "Why late August fills up fast",
        paragraphs: [
          "The last two weeks of summer are the busiest stretch of our year, and it isn't close. Everyone is squeezing in the same trip at the same time, which means the runs and suites that sit open in February are spoken for by mid-August. Holiday weekends book out first, and the requests we hate turning down most are the ones that come in three days ahead.",
          "If you already know your dates, get them on the calendar. If you think you might travel, reserve anyway — it's far easier to cancel a spot than to find one.",
        ],
      },
      {
        heading: "A short pre-boarding checklist",
        paragraphs: [
          "A little prep makes the stay smoother for everyone, especially your dog.",
        ],
        bullets: [
          "Check vaccine records now, not the morning of drop-off — rabies, distemper, and Bordetella all need to be current, and vet offices book up in late summer too. Bordetella in particular can take a few days to take effect.",
          "Bring their own food — sudden diet changes are the number one cause of an upset stomach away from home. Pre-portion meals into labeled bags if you can.",
          "Send something that smells like home — a worn t-shirt or a familiar blanket does more for a nervous dog than any toy.",
          "Write down the details — medications, quirks, the command that actually works, what they do during thunderstorms. There is no such thing as too much information.",
          "Keep drop-off short — a long, emotional goodbye tells your dog something is wrong. A quick handoff and a confident exit works better than you'd expect.",
        ],
      },
      {
        heading: "Thinking past the trip",
        paragraphs: [
          "Once fall hits, the rhythm at home changes — kids back at school, longer workdays, less midday attention. A lot of families use the end of summer as a natural moment to add a regular daycare day or two. If that's on your mind, mention it at pickup and we'll talk through what makes sense for your dog.",
        ],
      },
      {
        heading: "Ready when you are",
        paragraphs: [
          "Give us a call or book online to lock in your dates. We'd love to have your pup for one more summer stay before the leaves start turning.",
        ],
      },
    ],
  },

  "columbus-day-weekend-dog-boarding": {
    slug: "columbus-day-weekend-dog-boarding",
    title: "Columbus Day Weekend Dog Boarding in Franklin Square, Long Island",
    metaTitle: "Columbus Day Weekend Dog Boarding | Planet Pooch Blog",
    metaDescription:
      "Boarding your dog Columbus Day weekend (Oct 10–12)? Private suites, daily play and free medication at Planet Pooch in Franklin Square, NY. Book early.",
    hasFullContent: true,
    datePublished: "2026-09-30",
    intro:
      "Columbus Day weekend runs Saturday, October 10 through Monday, October 12 this year, and for a lot of Long Island families it's the last real getaway before the holidays take over. Apple picking upstate, a foliage drive through Vermont, a wedding out of state, or just three quiet days to recharge.",
    sections: [
      {
        paragraphs: [
          "Whatever your plans, your dog deserves a long weekend too. At Planet Pooch Pet Resort in Franklin Square, your pup gets a fall getaway of their own: playtime with friends, a comfortable private suite, and a team that treats them like family while you're away.",
        ],
      },
      {
        heading: "Holiday weekends fill fast, so book now",
        paragraphs: [
          "Three-day weekends are some of our busiest stretches of the year, and Columbus Day is no exception. Suites go quickly once October starts, and families who wait until the week of often end up on a waitlist.",
          "Mark Saturday, October 3 on your calendar. For a Saturday, October 10 check-in, it's the deadline for two things:",
        ],
        bullets: [
          "Bordetella (kennel cough) vaccine: we require it at least 7 days before arrival. If your pup is due, call your vet this week.",
          "Your 50% payment: it's due one week before arrival.",
        ],
      },
      {
        heading: "What your dog's long weekend looks like",
        paragraphs: [
          "Not all boarding is equal. A Planet Pooch stay is built to keep dogs active, social and relaxed, not just housed.",
        ],
        bullets: [
          "A private suite to rest and sleep between activities, cleaned daily to our sanitation standards",
          "Daytime play and enrichment with our trained attendants, so your dog comes home tired and happy instead of stir-crazy",
          "Their own food and routine, prepared the way you do it at home",
          "Medications at no extra charge, given on your schedule",
          "Staff on site seven days a week, including Sunday, when the resort is dedicated to our boarding guests",
        ],
      },
      {
        heading: "Make it a real getaway: upgrades and savings",
        paragraphs: [
          "Want to spoil them a little? Our boarding upgrade packages, Comfort Care, Comfort Plus and Premium, add extra comfort and attention to any stay. Ask our front desk which one fits your dog best.",
          "Two ways to save this weekend:",
        ],
        bullets: [
          "Bringing two dogs? Get 20% off the second dog (Classic suite or higher).",
          "Staying 2+ nights? Get 20% off an exit groom, so your pup comes home fresh, clean and ready for fall.",
        ],
      },
      {
        heading: "Your Columbus Day boarding checklist",
        bullets: [
          "Reserve your suite. A $25 non-refundable booking deposit holds your spot.",
          "Update Bordetella by October 3, along with your dog's other required vaccines.",
          "Pay 50% by October 3 (one week before arrival). This payment is also non-refundable.",
          "Pack their food, portioned by meal if you can, plus any medications with clear instructions.",
          "Bring a familiar item like a t-shirt or small blanket that smells like home.",
        ],
      },
      {
        heading: "Columbus Day boarding FAQ",
        paragraphs: [
          "Do you charge extra to give my dog medication? No. We give medications at no extra charge, on the schedule you provide.",
          "Is the deposit refundable if my plans change? No. The $25 booking deposit and the 50% payment due one week before arrival are both non-refundable, so book once your dates are set.",
          "Can I get a discount for boarding two dogs? Yes. The second dog gets 20% off when staying in a Classic suite or higher.",
          "Is someone with the dogs on Sunday? Yes. Our team is on site seven days a week, and Sundays are dedicated entirely to our boarding guests.",
        ],
      },
      {
        heading: "Reserve your dog's Columbus Day getaway",
        paragraphs: [
          "You've got plans for the long weekend. Let us handle the rest. Call or book online today to lock in your suite before we fill up.",
          "Planet Pooch Pet Resort, 1114 Hempstead Turnpike, Franklin Square, NY. Proudly serving Franklin Square, Garden City, Roslyn and families across Nassau County.",
        ],
      },
    ],
  },
};

// Note on previously-stubbed slugs: the original WP slug
// `beat-the-summer-heat-...-%e2%98%80%ef%b8%8f%f0%9f%90%be` had URL-encoded
// emojis (☀️🐾) and 0 GSC clicks. Next.js can't reliably static-generate a
// route from a literal with percent-encoded bytes; this intentionally 404s.
// See seo/MIGRATION-NOTES.md.

export const blogPosts: Record<string, BlogPost> = {
  ...fullPosts,
  ...restoredPosts,
};

// Fail the build rather than publish a post with a missing or invalid sort date.
for (const post of Object.values(blogPosts)) {
  const date = post.datePublished;
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(Date.parse(date)) ||
    new Date(date).toISOString().slice(0, 10) !== date
  ) {
    throw new Error(`Blog post "${post.slug}" requires a valid datePublished (YYYY-MM-DD).`);
  }
}

export type BlogSlug = string;
