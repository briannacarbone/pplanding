import { BookNowModal } from "../book-now-modal";

export function BoardingFormModal({
  className = "",
  label = "Get Started",
}: {
  className?: string;
  label?: string;
}) {
  return <BookNowModal ctaHref="/new-client/" label={label} className={className} />;
}
