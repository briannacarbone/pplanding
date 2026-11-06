"use client";

import { useRef, useState } from "react";
import { Check, PawPrint, Plus, UserRound, X } from "lucide-react";
import { CONSENT_TEXT, SERVICES } from "../../lib/new-client";
import { SITE } from "../../lib/site";
import styles from "./new-client.module.css";

const BREEDS = ["Mixed Breed", "Unknown", "Australian Shepherd", "Beagle", "Bernedoodle", "Bichon Frise", "Border Collie", "Boston Terrier", "Boxer", "Cavapoo", "Cavalier King Charles Spaniel", "Chihuahua", "Cockapoo", "Cocker Spaniel", "Dachshund", "Doberman Pinscher", "English Bulldog", "French Bulldog", "German Shepherd", "Golden Retriever", "Goldendoodle", "Great Dane", "Havanese", "Labradoodle", "Labrador Retriever", "Maltese", "Maltipoo", "Miniature Schnauzer", "Pomeranian", "Poodle", "Pug", "Rottweiler", "Shih Tzu", "Siberian Husky", "Yorkshire Terrier"];

export function NewClientForm() {
  const [pets, setPets] = useState([0]);
  const nextPet = useRef(1);
  const submissionId = useRef<string | null>(null);
  const submitting = useRef(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const success = useRef<HTMLDivElement>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setBusy(true); setError("");
    const fields = new FormData(event.currentTarget);
    submissionId.current ??= crypto.randomUUID();
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].map(key => [key, query.get(key) ?? ""]));
    try {
      const response = await fetch("/api/new-client/", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: fields.get("firstName"), lastName: fields.get("lastName"), email: fields.get("email"), phone: fields.get("phone"),
          pets: pets.map(id => ({ name: fields.get(`pet-name-${id}`), breed: fields.get(`pet-breed-${id}`), type: fields.get(`pet-type-${id}`) })),
          services: fields.getAll("services"), marketingConsent: fields.get("marketingConsent") === "on", website: fields.get("website"),
          submissionId: submissionId.current, attribution }) });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "We couldn’t confirm your submission. Please try again or call us.");
      setDone(true);
      // An analytics failure must never turn a saved inquiry into a form error.
      try { window.fbq?.("track", "Lead", { content_name: "New client form" }, { eventID: result.eventId }); } catch { /* non-blocking */ }
      try {
        window.gtag?.("event", "conversion", {
          send_to: "AW-608173544/2p8eCKzY0IIdEOj7_6EC",
          transaction_id: result.eventId,
        });
      } catch { /* non-blocking */ }
      requestAnimationFrame(() => { success.current?.focus(); success.current?.scrollIntoView({ behavior: "smooth", block: "center" }); });
    } catch (error) { setError(error instanceof Error ? error.message : "Please try again or call us."); }
    finally { submitting.current = false; setBusy(false); }
  }

  if (done) return <div className={styles.success} ref={success} tabIndex={-1} role="status">
    <span className={styles.successIcon}><Check size={30} /></span><h2>You’re on our list!</h2>
    <p>Thanks for introducing your pup. Your information has been received, and our team will be in touch soon.</p>
    <p className={styles.immediateService}>For immediate service call us at <a href={SITE.phone.href}>{SITE.phone.display}</a>.</p>
  </div>;

  return <form onSubmit={submit} className={styles.form}>
    <p className={styles.required}>Fields marked <span>*</span> are required.</p>
    <fieldset disabled={busy} className={styles.section}>
      <legend><PawPrint size={22} aria-hidden="true" /> Your dog&apos;s profile</legend>
      {pets.map((id, index) => <div key={id} className={styles.pet}>
        {pets.length > 1 && <div className={styles.petHeading}><h3>Dog {index + 1}</h3>{index > 0 && <button type="button" onClick={() => setPets(pets.filter(p => p !== id))} aria-label={`Remove dog ${index + 1}`}><X size={17} /> Remove</button>}</div>}
        <div className={styles.grid}>
          <label>Dog type <span>*</span><select name={`pet-type-${id}`} required defaultValue="DOG"><option value="DOG">Dog</option></select></label>
          <label>Dog breed <span>*</span><input name={`pet-breed-${id}`} list="dog-breeds" placeholder="Search or enter breed" required maxLength={100} /></label>
          <label className={styles.full}>Dog name <span>*</span><input name={`pet-name-${id}`} placeholder="Your pup’s name" required maxLength={100} /></label>
        </div>
      </div>)}
      <datalist id="dog-breeds">{BREEDS.map(breed => <option key={breed} value={breed} />)}</datalist>
      {pets.length < 10 && <button type="button" className={styles.add} onClick={() => setPets([...pets, nextPet.current++])}><Plus size={18} /> Additional dog</button>}
    </fieldset>
    <fieldset disabled={busy} className={styles.section}>
      <legend><UserRound size={22} aria-hidden="true" /> Your information</legend>
      <div className={styles.grid}>
        <label>First name <span>*</span><input name="firstName" autoComplete="given-name" required maxLength={100} /></label>
        <label>Last name <span>*</span><input name="lastName" autoComplete="family-name" required maxLength={100} /></label>
        <label>Cell phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" required maxLength={30} /></label>
        <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
    </fieldset>
    <fieldset disabled={busy} className={styles.services}><legend>Which services are you interested in?</legend>
      <div>{SERVICES.map(service => <label key={service}><input type="checkbox" name="services" value={service} /><span>{service}</span></label>)}</div>
    </fieldset>
    <div className={styles.trap} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <fieldset disabled={busy} className={styles.marketing}><legend>Marketing messages (optional)</legend>
    <label className={styles.consent}><input type="checkbox" name="marketingConsent" disabled={busy} /><span>{CONSENT_TEXT} View <a href="https://moego.pet/Html5/privacyPolicy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://moego.pet/Html5/termsAndConditions.html" target="_blank" rel="noopener noreferrer">Terms of Use</a>.</span></label>
    </fieldset>
    {error && <div className={styles.error} role="alert">{error} <a href={SITE.phone.href}>Call {SITE.phone.display}</a>.</div>}
    <button type="submit" disabled={busy} className={"pp-cta " + styles.submit}>{busy ? "Submitting…" : "Submit"}<span className="pp-cta-arrow" aria-hidden="true" /></button>
    <p className={styles.help}>Prefer to talk? <a href={SITE.phone.href}>Call {SITE.phone.display}</a></p>
  </form>;
}
