import Image from "next/image";

/** Homepage backdrop for pages without their own service photography. */
export function HeroBackdrop() {
  return <>
    <Image src="/hero-dog.jpg" alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: "62% center" }} preload />
    <div className="pp-hero-image-overlay absolute inset-0" aria-hidden="true" />
  </>;
}
