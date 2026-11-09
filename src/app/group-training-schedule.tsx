"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ContentSection } from "../lib/content/types";

type GroupTrainingSection = Extract<ContentSection, { type: "groupTraining" }>;

const visibleDayCount = 28;
const businessTimeZone = "America/New_York";
const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatClassName(className: string) {
  const puppyClassMatch = className.match(
    /^Puppy(?: Level ([12]))?(?: Class)? ([1-4])$/,
  );

  if (puppyClassMatch) {
    return `Puppy Lvl ${puppyClassMatch[1] ?? "1"} (Class ${puppyClassMatch[2]})`;
  }

  const numberedClassMatch = className.match(/^(Adult|Advanced) Class ([1-4])$/);

  if (numberedClassMatch) {
    return `${numberedClassMatch[1]} (Class ${numberedClassMatch[2]})`;
  }

  if (className === "Puppy" || className === "Puppy Level 1") {
    return "Puppy Lvl 1";
  }

  if (className === "Puppy Level 2") {
    return "Puppy Lvl 2";
  }

  return className;
}
const calendarWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const subscribeToClient = () => () => {};

function startOfWeek(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function currentBusinessDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: businessTimeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return new Date(Number(values.year), Number(values.month) - 1, Number(values.day), 12);
}

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12);
}

function isSameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function formatDateRange(start: Date, end: Date) {
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" });

  if (sameMonth) {
    return `${month.format(start)} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`;
  }

  if (sameYear) {
    return `${month.format(start)} ${start.getDate()}–${month.format(end)} ${end.getDate()}, ${end.getFullYear()}`;
  }

  return `${month.format(start)} ${start.getDate()}, ${start.getFullYear()}–${month.format(end)} ${end.getDate()}, ${end.getFullYear()}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatAgendaDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function rotatingClassName(
  session: GroupTrainingSection["schedule"][number]["sessions"][number],
  dateKey: string,
  rotationStartDate?: string,
) {
  if (!rotationStartDate || !session.classNumber || dateKey < rotationStartDate) {
    return session.className;
  }

  const weeks = Math.round(
    (Date.parse(`${dateKey}T12:00:00Z`) - Date.parse(`${rotationStartDate}T12:00:00Z`)) /
      (7 * 24 * 60 * 60 * 1000),
  );
  const classNumber =
    ((session.classNumber - 1 + weeks * (session.rotationDirection ?? 1)) % 4 + 4) % 4 + 1;
  return `${session.className} Class ${classNumber}`;
}

export function GroupTrainingSchedule({
  schedule,
  scheduleOverrides = [],
  recurringScheduleAdditions = [],
  noClassesOnOrAfter,
}: {
  schedule: GroupTrainingSection["schedule"];
  scheduleOverrides?: GroupTrainingSection["scheduleOverrides"];
  recurringScheduleAdditions?: GroupTrainingSection["recurringScheduleAdditions"];
  noClassesOnOrAfter?: GroupTrainingSection["noClassesOnOrAfter"];
}) {
  const [weekOffset, setWeekOffset] = useState(0);
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);

  if (!isClient) {
    return (
      <div className="mt-6 border border-[rgba(50,73,83,0.12)] bg-white/75 px-5 py-8 text-sm text-[rgba(47,42,39,0.72)]">
        Loading the current class schedule…
      </div>
    );
  }

  const today = currentBusinessDate();
  const currentWeekStart = startOfWeek(today);
  const visibleStart = addDays(currentWeekStart, weekOffset * 7);
  const visibleEnd = addDays(visibleStart, visibleDayCount - 1);
  const visibleDays = Array.from({ length: visibleDayCount }, (_, index) => {
    const date = addDays(visibleStart, index);
    const dayName = weekdayNames[date.getDay()];
    const dateKey = formatDateKey(date);
    const override = scheduleOverrides.find((item) => item.date === dateKey);
    const hasEnded = noClassesOnOrAfter ? dateKey >= noClassesOnOrAfter : false;
    const scheduledDay = schedule.find((day) => day.day === dayName);
    const baseSessions = hasEnded
      ? []
      : override?.sessions ?? scheduledDay?.sessions.map((session) => ({
          ...session,
          className: rotatingClassName(session, dateKey, scheduledDay.rotationStartDate),
        })) ?? [];
    const addedSessions = hasEnded
      ? []
      : recurringScheduleAdditions
          .filter(
            (addition) =>
              addition.day === dayName &&
              dateKey >= addition.startDate &&
              dateKey <= addition.endDate,
          )
          .flatMap((addition) => addition.sessions)
          .filter(
            (addedSession) =>
              !baseSessions.some((baseSession) => baseSession.time === addedSession.time),
          );
    return {
      date,
      sessions: [...baseSessions, ...addedSessions].map((session) => ({
        ...session,
        className: formatClassName(session.className),
      })),
    };
  });
  const mobileAgendaDays = visibleDays.filter((day) => day.sessions.length > 0);

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 border border-[rgba(50,73,83,0.12)] bg-white/75 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold text-[var(--pp-ink)]">
          {formatDateRange(visibleStart, visibleEnd)}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          <button
            type="button"
            aria-label="Move schedule back one week"
            disabled={weekOffset === 0}
            onClick={() => setWeekOffset((offset) => Math.max(0, offset - 1))}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[rgba(50,73,83,0.18)] px-3 text-xs font-bold text-[var(--pp-ink)] transition hover:bg-[var(--pp-mint)]/25 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>
          <button
            type="button"
            aria-label="Move schedule forward one week"
            onClick={() => setWeekOffset((offset) => offset + 1)}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[rgba(50,73,83,0.18)] px-3 text-xs font-bold text-[var(--pp-ink)] transition hover:bg-[var(--pp-mint)]/25 sm:w-auto"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
        {mobileAgendaDays.length ? (
          mobileAgendaDays.map((day) => {
            const isToday = isSameDay(day.date, today);
            return (
              <article
                key={day.date.toISOString()}
                className={`border border-[rgba(50,73,83,0.12)] bg-[#fffdf8] p-4 ${
                  isToday ? "shadow-[inset_0_0_0_2px_var(--pp-main)]" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-bold text-[var(--pp-ink)]">
                    {formatAgendaDate(day.date)}
                  </h4>
                  {isToday ? (
                    <span className="shrink-0 bg-[var(--pp-mint)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)]">
                      Today
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 grid gap-2">
                  {day.sessions.map((session) => (
                    <div
                      key={`${session.time}-${session.className}`}
                      className="flex items-center justify-between gap-3 bg-[var(--pp-mint)]/25 px-3 py-2"
                    >
                      <span className="text-xs font-bold text-[var(--pp-ink)]">{session.time}</span>
                      <span className="text-right text-xs text-[rgba(47,42,39,0.68)]">
                        {session.className}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })
        ) : (
          <p className="border border-[rgba(50,73,83,0.12)] bg-white/75 px-4 py-6 text-sm text-[rgba(47,42,39,0.72)] sm:col-span-2">
            No classes are scheduled during this period.
          </p>
        )}
      </div>

      <div className="mt-4 hidden overflow-x-auto border border-[rgba(50,73,83,0.12)] bg-[rgba(50,73,83,0.1)] lg:block">
        <div className="min-w-[56rem]">
          <div className="grid grid-cols-7 gap-px bg-[var(--pp-night)] text-white">
            {calendarWeekdays.map((day) => (
              <div key={day} className="px-3 py-3 text-xs font-bold uppercase tracking-[0.08em]">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px">
            {visibleDays.map((day) => {
              const isToday = isSameDay(day.date, today);
              return (
                <article
                  key={day.date.toISOString()}
                  className={`min-h-44 bg-[#fffdf8] p-3 ${
                    isToday ? "shadow-[inset_0_0_0_2px_var(--pp-main)]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-[var(--pp-ink)]">{formatDate(day.date)}</p>
                    {isToday ? (
                      <span className="bg-[var(--pp-mint)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)]">
                        Today
                      </span>
                    ) : null}
                  </div>

                  {day.sessions.length ? (
                    <div className="mt-3 grid gap-1.5">
                      {day.sessions.map((session) => (
                        <div
                          key={`${session.time}-${session.className}`}
                          className="bg-[var(--pp-mint)]/25 px-2 py-1.5"
                        >
                          <p className="text-[10px] leading-4 text-[var(--pp-ink)]">
                            <span className="font-bold">{session.time}</span>
                            <span className="text-[rgba(47,42,39,0.5)]"> · </span>
                            <span className="text-[rgba(47,42,39,0.68)]">{session.className}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="sr-only">No classes</span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
