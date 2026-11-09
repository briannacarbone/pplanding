"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import type { ContentSection } from "../lib/content/types";

type EventCalendarSection = Extract<ContentSection, { type: "eventCalendar" }>;
type EventCalendarEvent = EventCalendarSection["events"][number];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseDate(value?: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function startOfWeek(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function dateKey(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function eventInRange(event: EventCalendarEvent, day: Date) {
  const start = parseDate(event.startDate);
  const end = parseDate(event.endDate);

  if (start && day < start) return false;
  if (end && day > end) return false;
  return Boolean(start || end || event.weekdays?.length);
}

function eventWindowStart(event: EventCalendarEvent, visibleStart: Date) {
  const exactDate = parseDate(event.date);
  const startDate = parseDate(event.startDate);

  if (exactDate) return exactDate;
  if (startDate && startDate > visibleStart) return startDate;
  return visibleStart;
}

function eventsForDay(events: EventCalendarEvent[], day: Date, visibleStart: Date) {
  return events.filter((event) => {
    if (event.floating) return false;

    const exactDate = parseDate(event.date);
    if (exactDate) return isSameDay(exactDate, day);

    if (event.weekdays?.includes(day.getDay()) && eventInRange(event, day)) {
      return true;
    }

    if (event.weekdays?.length) return false;

    return eventInRange(event, day) && isSameDay(eventWindowStart(event, visibleStart), day);
  });
}

function formatRange(start: Date, end: Date) {
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();

  const startFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  });
  const endFormat = new Intl.DateTimeFormat("en-US", {
    month: sameMonth ? undefined : "short",
    day: "numeric",
    year: "numeric",
  });

  return `${startFormat.format(start)} - ${endFormat.format(end)}`;
}

function formatDayHeader(day: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(day);
}

export function EventCalendarView({ section }: { section: EventCalendarSection }) {
  const [windowOffset, setWindowOffset] = useState(0);
  const today = new Date();
  const visibleStart = addDays(startOfWeek(today), windowOffset * 28);
  const days = Array.from({ length: 28 }, (_, index) => addDays(visibleStart, index));
  const visibleEnd = days[days.length - 1];

  return (
    <div className="border border-[rgba(50,73,83,0.12)] bg-white/70 shadow-[0_20px_60px_rgba(50,73,83,0.06)]">
      <div className="flex flex-col gap-5 border-b border-[rgba(50,73,83,0.12)] bg-[var(--pp-night)] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--pp-mint)]/20">
            <CalendarDays className="h-6 w-6 stroke-[1.5] text-[var(--pp-mint)]" />
          </div>
          <div>
            <h3 aria-live="polite" aria-atomic="true" className="text-2xl leading-tight">{formatRange(visibleStart, visibleEnd)}</h3>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex items-center gap-1" aria-label="Calendar navigation">
            <button
              type="button"
              onClick={() => setWindowOffset((offset) => Math.max(0, offset - 1))}
              disabled={windowOffset === 0}
              aria-label="Previous four weeks"
              className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setWindowOffset((offset) => offset + 1)}
              aria-label="Next four weeks"
              className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
          {section.cta ? (
            <Link
              href={section.cta.href}
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              {section.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="border-b border-[rgba(50,73,83,0.10)] bg-[var(--pp-cream)] px-4 py-3 sm:px-5">
        <div className="hidden grid-cols-7 gap-px text-center sm:grid">
          {weekdayLabels.map((day) => (
            <div key={day} className="text-[10px] font-bold uppercase tracking-[0.16em] text-[rgba(47,42,39,0.58)]">
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-7 sm:gap-px sm:bg-[rgba(50,73,83,0.10)] sm:p-0">
        {days.map((day) => {
          const dayEvents = eventsForDay(section.events, day, visibleStart);
          const isToday = isSameDay(day, today);
          return (
            <article
              key={dateKey(day)}
              className={`relative min-h-[8.5rem] border border-[rgba(50,73,83,0.10)] bg-[#fffdf8] p-3 sm:min-h-40 sm:border-0 ${
                isToday ? "shadow-[inset_0_0_0_2px_var(--pp-main)]" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p aria-hidden="true" className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pp-main)] sm:hidden">
                    {weekdayLabels[day.getDay()]}
                  </p>
                  <h4 className="mt-0.5 text-sm font-semibold text-[var(--pp-ink)]">
                    <time dateTime={dateKey(day)}>
                      <span aria-hidden="true">{formatDayHeader(day)}</span>
                      <span className="sr-only">{new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(day)}</span>
                    </time>
                  </h4>
                </div>
                {isToday ? (
                  <span className="bg-[var(--pp-mint)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)]">
                    Today
                  </span>
                ) : null}
              </div>

              {dayEvents.length ? (
                <div className="mt-3 grid gap-2">
                  {dayEvents.map((event) => (
                    <div key={`${dateKey(day)}-${event.title}`} className="bg-[var(--pp-mint)]/30 p-2">
                      <p className="text-xs font-bold leading-5 text-[var(--pp-ink)]">{event.title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-[rgba(47,42,39,0.70)]">{event.dateLabel}</p>
                      {section.cta ? (
                        <Link
                          href={section.cta.href}
                          className="mt-3 inline-flex min-h-8 w-full items-center justify-center gap-1 bg-[var(--pp-night)] px-1 py-2 text-center text-[10px] font-bold leading-none tracking-normal text-white transition hover:bg-[var(--pp-main)]"
                        >
                          {section.cta.label}
                          <ArrowRight className="h-3 w-3 shrink-0" />
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
