"use client";

import { useState } from "react";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import { NewClientForm } from "./new-client-form";

export function ServiceSelector() {
  const [service, setService] = useState("resort");
  return <>
    <div className="border-b border-gray-200 p-6 sm:px-10">
      <label htmlFor="service-selector" className="mb-2 block font-semibold">Which service are you looking for?</label>
      <select id="service-selector" value={service} onChange={event => setService(event.target.value)} className="min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base">
        <option value="resort">Pet Resort</option>
        <option value="mobile">Mobile Grooming</option>
      </select>
    </div>
    <div hidden={service !== "resort"}><NewClientForm /></div>
    {service === "mobile" && <div>
      <iframe src={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} title="Mobile Grooming new client form" className="block h-[1000px] w-full border-0" />
      <p className="px-6 pb-6 text-sm">Trouble viewing the form? <a href={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} target="_blank" rel="noopener noreferrer" className="underline">Open it in a new tab</a>.</p>
    </div>}
  </>;
}
