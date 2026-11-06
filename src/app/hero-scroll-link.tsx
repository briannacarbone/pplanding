import { ArrowDown } from "lucide-react";

export function HeroScrollLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="absolute bottom-20 left-1/2 inline-flex min-h-11 -translate-x-1/2 flex-col items-center gap-2 whitespace-nowrap text-xs font-medium tracking-wide text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
      {label}
      <ArrowDown className="h-4 w-4" aria-hidden />
    </a>
  );
}
