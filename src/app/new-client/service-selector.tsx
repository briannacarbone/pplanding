"use client";

import { useState } from "react";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import { NewClientForm } from "./new-client-form";

export function ServiceSelector() {
  const [service, setService] = useState("resort");
  return <>
    <fieldset className="border-0 border-b border-solid border-gray-200 p-6 sm:px-10">
      <legend className="float-left mb-3 w-full font-semibold">Which service are you looking for?</legend>
      <div className="clear-both grid grid-cols-2 gap-3">
        {[{ value: "resort", label: "Pet Resort" }, { value: "mobile", label: "Mobile Grooming" }].map(option => (
          <div key={option.value} className="min-w-0">
          <label className="flex min-h-14 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-3 has-[:checked]:border-[#46654b] has-[:checked]:bg-[#f0f5ee] sm:gap-3 sm:px-4">
            <input type="radio" name="service" value={option.value} checked={service === option.value} onChange={event => setService(event.target.value)} className="h-4 w-4 accent-[#46654b]" />
            <span className="font-semibold">{option.label}</span>
          </label>
          {option.value === "resort" && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#5d6b6e]">
            <li>Boarding</li>
            <li>Daycare</li>
            <li>Training</li>
            <li>In-house grooming</li>
          </ul>}
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
