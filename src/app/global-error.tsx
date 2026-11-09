"use client";
/* A full document navigation recovers even when the root router has failed. */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function GlobalError() {
  return <html lang="en">
    <head><title>Unable to load page | Planet Pooch</title></head>
    <body style={{ margin: 0, background: "#fbfaf6", color: "#2f2a27", fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <main id="main" tabIndex={-1} style={{ maxWidth: "40rem", margin: "auto", padding: "3rem 1.5rem" }}>
        <h1 id="page-content" tabIndex={-1}>We couldn’t load this page</h1>
        <p>Please try loading the page again, or return to our home page.</p>
        <button type="button" onClick={() => window.location.reload()} style={{ minHeight: 44, padding: "0.5rem 1rem", font: "inherit", cursor: "pointer" }}>Try again</button>
        <p><a href="/" style={{ color: "#324953", display: "inline-block", paddingBlock: "0.5rem" }}>Return to Planet Pooch home</a></p>
      </main>
    </body>
  </html>;
}
