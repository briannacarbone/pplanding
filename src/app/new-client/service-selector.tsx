"use client";

import { useState } from "react";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import { NewClientForm } from "./new-client-form";
import styles from "./new-client.module.css";

export function ServiceSelector() {
  const [service, setService] = useState("resort");
  return <>
    <fieldset className={styles.serviceSelector}>
      <legend className={styles.selectorHeading}>Which service are you looking for?</legend>
      <div className={styles.selectorOptions}>
        {[{ value: "resort", label: "Pet Resort" }, { value: "mobile", label: "Mobile Grooming" }].map(option => (
          <div key={option.value} className={styles.selectorColumn}>
            <label className={styles.selectorRadio}>
              <input type="radio" name="service" value={option.value} checked={service === option.value} onChange={event => setService(event.target.value)} aria-describedby={`${option.value}-description`} />
              <span>{option.label}</span>
            </label>
            {option.value === "resort" ? <ul id="resort-description" className={styles.selectorServices}>
              <li>Boarding</li>
              <li>Daycare</li>
              <li>Training</li>
              <li>In-house grooming</li>
            </ul> : <p id="mobile-description" className={styles.selectorDescription}>Grooming at your doorstep.</p>}
          </div>
        ))}
      </div>
    </fieldset>
    <div hidden={service !== "resort"}><NewClientForm /></div>
    {service === "mobile" && <div>
      <iframe src={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} title="Mobile Grooming new client form" className="block h-[1000px] w-full border-0" />
      <p className="px-6 pb-6 text-sm">Trouble viewing the form? <a href={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="underline">Open it in a new tab</a>.</p>
    </div>}
  </>;
}
