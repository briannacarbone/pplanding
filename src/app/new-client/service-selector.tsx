"use client";

import { useState } from "react";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import { NewClientForm } from "./new-client-form";
import styles from "./new-client.module.css";

export function ServiceSelector() {
  const [service, setService] = useState("resort");
  return <>
    <fieldset className={styles.serviceSelector}>
      <legend className={styles.selectorHeading}>Choose your service</legend>
      <div className={styles.selectorOptions}>
        {[{ value: "resort", label: "Pet Resort" }, { value: "mobile", label: "Mobile Grooming" }].map(option => (
            <label key={option.value} className={styles.selectorRadio}>
              <input type="radio" name="service" value={option.value} checked={service === option.value} onChange={event => setService(event.target.value)} aria-controls={`${option.value}-form`} />
              <span className={styles.selectorTitle}>{option.label}</span>
              <span className={styles.selectorDescription}>{option.value === "resort" ? "Boarding, daycare, training & in-house grooming" : "Professional grooming at your doorstep"}</span>
            </label>
        ))}
      </div>
    </fieldset>
    <div id="resort-form" hidden={service !== "resort"}><NewClientForm /></div>
    <div id="mobile-form" hidden={service !== "mobile"}>{service === "mobile" && <>
      <iframe src={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} title="Mobile Grooming new client form" className="block h-[1000px] w-full border-0" />
      <p className="px-6 pb-6 text-sm">Trouble viewing the form? <a href={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="underline">Open it in a new tab</a>.</p>
    </>}</div>
  </>;
}
