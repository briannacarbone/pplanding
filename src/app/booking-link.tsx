import NextLink from "next/link";
import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";
import { BookNowModal } from "./book-now-modal";

function labelText(children: ReactNode): string {
  return Children.toArray(children).map(child => {
    if (typeof child === "string" || typeof child === "number") return String(child);
    if (isValidElement<{ children?: ReactNode; "aria-hidden"?: boolean }>(child)) {
      return child.props["aria-hidden"] ? "" : labelText(child.props.children);
    }
    return "";
  }).join("");
}

/** Keep content-driven Book Now actions consistent with the shared header. */
export default function BookingLink(props: ComponentProps<typeof NextLink>) {
  if (labelText(props.children).trim().toLowerCase() === "book now") {
    return <BookNowModal ctaHref="/new-client/" className={props.className} />;
  }
  return <NextLink {...props} />;
}
