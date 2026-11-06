export const SERVICES = ["Boarding", "Daycare", "Training", "In-house grooming"] as const;
export const CONSENT_TEXT = 'I agree to receive automated and personalized marketing messages (such as reminders to help you rebook appointments, birthday messages celebrating your pet, and other marketing communications) via SMS and email from Planet Pooch Pet Resort at the cell number and email used when signing up. Consent is not a condition of any purchase. Reply "STOPM" in SMS to cancel at any time. Manage your email preferences via the link in the email footer. Msg frequency varies. Msg and data rates may apply.';

export type Intake = {
  firstName: string; lastName: string; phone: string; email: string;
  pets: { name: string; breed: string; type: "DOG" }[];
  services: string[]; marketingConsent: boolean; submissionId: string;
  attribution: Record<string, string>;
};

export function parseIntake(value: unknown): Intake {
  if (!value || typeof value !== "object") throw new Error("Please complete the form.");
  const input = value as Record<string, unknown>;
  const string = (value: unknown, max = 100): string => {
    if (typeof value !== "string" || !value.trim() || value.trim().length > max) throw new Error("Please check all required fields.");
    return value.trim();
  };
  const phoneDigits = string(input.phone, 30).replace(/\D/g, "");
  const phone = phoneDigits.length === 10 ? `+1${phoneDigits}` : `+${phoneDigits}`;
  if (!/^\+1[2-9]\d{9}$/.test(phone)) throw new Error("Please enter a valid US cell phone number.");
  const email = string(input.email, 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email address.");
  if (!Array.isArray(input.pets) || !input.pets.length || input.pets.length > 10) throw new Error("Please add between 1 and 10 pets.");
  const pets = input.pets.map(pet => {
    if (!pet || pet.type !== "DOG") throw new Error("Please select Dog as the pet type.");
    return { name: string(pet.name), breed: string(pet.breed), type: "DOG" as const };
  });
  // Keep accepting legacy Grooming inquiries from tabs opened before this update.
  if (!Array.isArray(input.services) || input.services.some(s => s !== "Grooming" && !SERVICES.includes(s))) throw new Error("Please check your service selections.");
  if (input.serviceSelectionVersion === 2 && input.services.length !== 1) throw new Error("Please select one service.");
  if (typeof input.marketingConsent !== "boolean") throw new Error("Please check your marketing preference.");
  const submissionId = string(input.submissionId, 36);
  if (!/^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/i.test(submissionId)) throw new Error("Please refresh the page and try again.");
  const attribution: Record<string, string> = {};
  const raw = input.attribution as Record<string, unknown> | undefined;
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
    if (raw && typeof raw[key] === "string") attribution[key] = raw[key].slice(0, 500);
  }
  return { firstName: string(input.firstName), lastName: string(input.lastName), phone, email, pets,
    services: [...new Set(input.services)], marketingConsent: input.marketingConsent, submissionId, attribution };
}

export function getLeadRouting(services: string[]) {
  return services.length === 1 && services[0] === "Grooming"
    ? { preferredBusinessId: "bizVdfk", allocateStaffId: "stfe3r9" } // Planet Pooch / Stacey Conti
    : { preferredBusinessId: "biz3pcO", allocateStaffId: "stf9EkE" }; // Pet Resort / Derek Wolpert
}

export function buildLeadRequest(data: Intake, companyId: string) {
  // Pet notes are supported by the Lead API; do not invent custom-field codes.
  const note = ["Website new client inquiry", `Submission: ${data.submissionId}`,
    `Services: ${data.services.join(", ") || "Not selected"}`,
    `Marketing SMS/email consent: ${data.marketingConsent ? "Yes" : "No"}`,
    `Received: ${new Date().toISOString()}`, ...Object.entries(data.attribution).map(([k, v]) => `${k}: ${v}`),
    ...(data.marketingConsent ? [`Consent wording: ${CONSENT_TEXT}`] : [])].join("\n");
  return {
    lead: { companyId, ...getLeadRouting(data.services), firstName: data.firstName, lastName: data.lastName,
      phone: data.phone, email: data.email, pets: data.pets.map(pet => ({ ...pet, gender: "UNKNOWN", notes: [{ content: note }] })) },
    complianceConfig: {
      marketingCampaignsChannels: { channels: data.marketingConsent ? ["COMPLIANCE_CHANNEL_SMS", "COMPLIANCE_CHANNEL_EMAIL"] : [] },
      isAgreedMarketingPolicy: data.marketingConsent, isConsented: data.marketingConsent,
    },
  };
}
