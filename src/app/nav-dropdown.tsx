"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type NavDropdownProps = {
  label: string;
  items: ReadonlyArray<{ label: string; href: string }>;
};

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current?.contains(document.activeElement)) {
        e.preventDefault();
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="nav-link inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
      >
        {label}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
        <div
          id={panelId}
          hidden={!open}
          className="absolute left-0 top-full z-50 mt-2 min-w-[220px] border border-white/15 bg-[var(--pp-night)] py-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
    </div>
  );
}
