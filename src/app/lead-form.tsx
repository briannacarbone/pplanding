import { NEW_CLIENT_FORM_URL } from "../lib/booking";

export function LeadForm() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center bg-white px-7 py-12 text-center sm:px-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]">
        New Client Form
      </p>
      <h3 className="mt-4 text-3xl leading-tight text-[var(--pp-ink)]">
        Tell us about you and your dog.
      </h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(47,42,39,0.72)]">
        Complete our secure MoeGo form and our team will follow up with availability and the best next step.
      </p>
      <a
        href={NEW_CLIENT_FORM_URL}
        target="_blank"
        rel="noopener"
        data-track="moego-new-client-form"
        className="pp-cta mt-7 min-h-[52px] justify-center"
      >
        Open New Client Form
        <span className="pp-cta-arrow" aria-hidden />
      </a>
    </div>
  );
}
