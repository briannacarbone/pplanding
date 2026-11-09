import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Gift, ShieldCheck, Sparkles } from "lucide-react";
import planetPoochLogo from "../../../public/planet-pooch-logo.png";
import trainingHero from "../../../public/training_home.jpeg";
import {
  GIVEAWAY,
  GIVEAWAY_BUSINESS_CONFIGURED,
  GIVEAWAY_DISPLAY,
  getEntryPeriodState,
} from "../../lib/giveaway-config";
import { SITE } from "../../lib/site";
import { GiveawayCta } from "./giveaway-cta";
import { GiveawayPageView } from "./giveaway-page-view";
import { HighLevelGiveawayForm } from "./highlevel-giveaway-form";

const title = "Win $800 in Dog Training";
const description =
  "Enter for a chance to win a 4-class Planet Pooch dog training package worth $800. No purchase necessary.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Planet Pooch` },
  description,
  alternates: { canonical: "/training-giveaway/" },
  openGraph: {
    type: "website",
    url: "/training-giveaway/",
    title: `${title} | Planet Pooch`,
    description,
    images: [{ url: "/training_home.jpeg", alt: "Dog training at Planet Pooch Pet Resort" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Planet Pooch`,
    description,
    images: ["/training_home.jpeg"],
  },
  robots: GIVEAWAY_BUSINESS_CONFIGURED ? { index: true, follow: true } : { index: false, follow: false },
};

function getAvailability() {
  if (!GIVEAWAY_BUSINESS_CONFIGURED) {
    return {
      canEnter: false,
      message: "Giveaway dates and eligibility details are being finalized. Entry will open once the Official Rules are complete.",
    };
  }
  const period = getEntryPeriodState();
  if (period === "upcoming") return { canEnter: false, message: "This giveaway is not open yet." };
  if (period === "closed") return { canEnter: false, message: "This giveaway has ended." };
  if (period !== "open") return { canEnter: false, message: "Giveaway timing is not configured." };
  return { canEnter: true, message: null };
}

export default function TrainingGiveawayPage() {
  const availability = getAvailability();

  return (
    <>
      <GiveawayPageView />
      <main id="main" className="overflow-hidden">
        <section className="pp-page-hero relative isolate  bg-[var(--pp-night)] px-5  pt-6 text-white sm:px-8 lg:px-10">
          <Image
            src={trainingHero}
            alt="A dog participating in training at Planet Pooch"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
            placeholder="blur"
          />
          <div className="pp-hero-image-overlay absolute inset-0 -z-10" />
          <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/15 pb-5">
            <Link href="/" aria-label="Planet Pooch home">
              <Image src={planetPoochLogo} alt="Planet Pooch Pet Resort" sizes="(min-width: 640px) 220px, 180px" className="h-auto w-[180px] brightness-0 invert sm:w-[220px]" />
            </Link>
            <a className="hidden min-h-11 items-center text-xs font-semibold uppercase tracking-[0.18em] text-white/80 underline-offset-4 hover:text-white hover:underline sm:flex" href="#official-rules">
              Official Rules
            </a>
          </header>

          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--pp-mint)]">Instagram Giveaway</p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">Win $800 in Dog Training</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">
                Enter for a chance to win a 4-class Planet Pooch dog training package.
              </p>
              <div className="mt-7 inline-flex items-center gap-3 border border-white/22 bg-black/15 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                <Gift className="h-5 w-5 text-[var(--pp-mint)]" aria-hidden="true" />
                4 Training Classes <span aria-hidden="true">•</span> $800 Value
              </div>
              <div className="mt-8"><GiveawayCta /></div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-white/82">
                No purchase necessary. A purchase will not increase your chances of winning.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">How It Works</p>
              <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">Three easy steps. One very good prize.</h2>
              <ol className="mt-8 space-y-5">
                {[
                  "Enter your contact information.",
                  "Submit your free entry.",
                  "One eligible winner will be selected at random.",
                ].map((item, index) => (
                  <li className="flex items-start gap-4 text-base leading-7 text-[rgba(47,42,39,0.78)]" key={item}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--pp-main-deep)] text-sm font-bold text-white">{index + 1}</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-9 flex items-start gap-3 border-l-4 border-[var(--pp-gold-deep)] bg-white/65 px-5 py-4 text-sm font-semibold leading-6 text-[var(--pp-ink)]">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[var(--pp-gold-deep)]" aria-hidden="true" />
                No purchase necessary. Entering does not enroll you in promotional text messages.
              </div>
            </div>

            <div id="entry-form" className="scroll-mt-6 rounded-sm border border-[rgba(50,73,83,0.12)] bg-white p-3 shadow-[0_24px_70px_rgba(47,63,71,0.1)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">Free Entry</p>
              <h2 className="mt-3 text-3xl text-[var(--pp-ink)] sm:text-4xl">Enter to win</h2>
              <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.7)]">All fields are required. No information about your dog is needed to enter.</p>
              <div className="mt-7">
                {availability.canEnter ? (
                  <HighLevelGiveawayForm />
                ) : (
                  <div className="rounded-sm bg-[rgba(229,192,137,0.24)] px-5 py-6 text-sm leading-7 text-[var(--pp-ink)]" role="status">
                    {availability.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--pp-main-deep)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">The Prize</p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Four classes. More confident days together.</h2>
              <p className="mt-5 text-lg leading-8 text-white/78">Prize: One 4-Class Planet Pooch Dog Training Package</p>
              <p className="mt-2 text-lg font-bold text-[var(--pp-mint)]">Approximate Retail Value: $800</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "No cash alternative or cash exchange",
                "Normal training eligibility requirements apply",
                "Health, vaccination, behavior, temperament, and safety requirements apply",
                "Training agreement and waiver required before services begin",
                `Prize use-by: ${GIVEAWAY_DISPLAY.prizeExpiration}`,
                `Transferability: ${GIVEAWAY_DISPLAY.transferability}`,
              ].map((item) => (
                <li className="flex items-start gap-3 border border-white/14 bg-white/[0.05] px-5 py-4 text-sm leading-6 text-white/82" key={item}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--pp-mint)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="official-rules" className="scroll-mt-6 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <article className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-[var(--pp-main)]" aria-hidden="true" /><p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]">Official Rules</p></div>
            <h2 className="mt-4 text-4xl text-[var(--pp-ink)] sm:text-5xl">{GIVEAWAY.name}</h2>
            <p className="mt-5 border-y border-[rgba(47,42,39,0.12)] py-5 text-sm font-bold uppercase leading-7 tracking-[0.08em] text-[var(--pp-ink)]">No purchase necessary. A purchase will not increase your chances of winning.</p>
            <p className="mt-5 text-sm leading-7 text-[rgba(47,42,39,0.7)]">Rules version: {GIVEAWAY_DISPLAY.rulesVersion}</p>

            <div className="mt-10 space-y-9 text-base leading-8 text-[rgba(47,42,39,0.8)]">
              <Rule title="1. Sponsor"><p>{GIVEAWAY.sponsor.legalName}, {GIVEAWAY.sponsor.address}. Email: {GIVEAWAY.sponsor.email}. Phone: {GIVEAWAY.sponsor.phone}.</p></Rule>
              <Rule title="2. Eligibility"><p>Open only to legal residents of {GIVEAWAY_DISPLAY.eligibleArea} who are 18 years of age or older at the time of entry. Limit one entry per person.</p></Rule>
              <Rule title="3. Entry Period"><p>The promotion begins {GIVEAWAY_DISPLAY.start} and ends {GIVEAWAY_DISPLAY.end}. All times are Eastern Time. Entries received outside this period are void.</p></Rule>
              <Rule title="4. Method of Entry"><p>Complete and submit the giveaway form on this page during the Entry Period. No purchase or payment is required. Automated, duplicate, incomplete, or otherwise invalid entries may be disqualified.</p></Rule>
              <Rule title="5. Prize"><p>One eligible winner will receive {GIVEAWAY.prize.name}, approximate retail value $800. There is no cash alternative, and the prize cannot be exchanged for cash. Transferability: {GIVEAWAY_DISPLAY.transferability}.</p></Rule>
              <Rule title="6. Winner Selection and Odds"><p>One winner will be selected at random from all eligible entries received. Odds of winning depend on the total number of eligible entries received.</p></Rule>
              <Rule title="7. Winner Notification"><p>The potential winner will be contacted using the email address or phone number submitted with the entry and must respond within {GIVEAWAY_DISPLAY.winnerResponseDeadline}. If the potential winner does not respond within that period, cannot be contacted, does not meet the eligibility requirements, or does not satisfy the prize conditions, the Sponsor may select an alternate winner.</p></Rule>
              <Rule title="8. Prize Conditions"><p>The winner and dog must satisfy Planet Pooch&apos;s normal training eligibility, health, vaccination, behavioral, temperament, and safety requirements. Before services begin, the winner must complete the normal training agreement and waiver. The prize use-by requirement is {GIVEAWAY_DISPLAY.prizeExpiration}. The Sponsor may refuse or discontinue services when safety or eligibility requirements are not met.</p></Rule>
              <Rule title="9. Taxes"><p>Any applicable taxes associated with the prize are the responsibility of the winner.</p></Rule>
              <Rule title="10. Fraud and Disqualification"><p>The Sponsor may disqualify duplicate, fraudulent, automated, manipulated, tampered-with, or otherwise invalid entries, as well as anyone who interferes with the fair operation of the promotion.</p></Rule>
              <Rule title="11. Modification or Cancellation"><p>If circumstances outside the Sponsor&apos;s reasonable control prevent the promotion from operating as intended, the Sponsor may modify, suspend, or cancel it, subject to applicable law, and may award the prize from eligible entries received before the interruption when reasonable.</p></Rule>
              <Rule title="12. Instagram"><p>This promotion is in no way sponsored, endorsed, administered by, or associated with Instagram. By entering, participants release Instagram from any responsibility related to this promotion.</p></Rule>
              <Rule title="13. Privacy"><p>Entry information will be used to administer the giveaway and contact entrants regarding it. Promotional SMS messages require the separate optional consent on the entry form. Review the <Link className="font-semibold underline underline-offset-4" href="/privacy-policy/">Planet Pooch Privacy Policy</Link> for more information.</p></Rule>
            </div>
          </article>
        </section>
      </main>

      <footer className="bg-[var(--pp-night)] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/68 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {GIVEAWAY.sponsor.legalName}</p>
          <div className="flex flex-wrap gap-5"><Link className="hover:text-white" href="/privacy-policy/">Privacy Policy</Link><Link className="hover:text-white" href="/terms/">Terms</Link><a className="hover:text-white" href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div>
      </footer>
    </>
  );
}

function Rule({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h3 className="text-2xl text-[var(--pp-ink)]">{title}</h3><div className="mt-3">{children}</div></section>;
}
