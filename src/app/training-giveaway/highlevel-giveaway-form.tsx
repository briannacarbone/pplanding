"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FORM_ID = "4tBmfwTpbac0oZPC77CQ";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_HEIGHT = 1_080;

export function HighLevelGiveawayForm() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [formSrc, setFormSrc] = useState(FORM_URL);

  useEffect(() => {
    const loadForm = () => {
      const params = window.location.search;
      setFormSrc(params && params.length > 1 ? `${FORM_URL}${params}` : FORM_URL);
      setShouldLoad(true);
    };

    const shell = shellRef.current;
    if (!shell || !("IntersectionObserver" in window)) {
      window.setTimeout(loadForm, 0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadForm();
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={shellRef} aria-busy={!shouldLoad}>
      {shouldLoad ? (
        <>
          <iframe
            src={formSrc}
            id={`inline-${FORM_ID}`}
            title="Planet Pooch training giveaway entry form"
            data-track="giveaway-form-iframe"
            style={{
              width: "100%",
              height: `${FORM_HEIGHT}px`,
              border: "none",
              display: "block",
              background: "white",
            }}
            loading="lazy"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        </>
      ) : (
        <div
          className="flex items-center justify-center bg-white px-6 text-center text-sm font-semibold text-[var(--pp-ink)]/55"
          style={{ minHeight: `${FORM_HEIGHT}px` }}
        >
          Loading giveaway entry form...
        </div>
      )}
      <p className="bg-white px-6 py-4 text-sm text-[var(--pp-ink)]">
        Trouble using the form? <a href={formSrc} target="_blank" rel="noopener noreferrer" className="underline">Open the giveaway form in a new tab</a>.
      </p>
    </div>
  );
}
