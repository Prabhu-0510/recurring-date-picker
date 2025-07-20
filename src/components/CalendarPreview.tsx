// src/components/CalendarPreview.tsx
"use client";

import { useMemo } from "react";
import useRecurrenceStore from "@/store/recurrenceStore";
import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  format,
  isBefore,
} from "date-fns";

export default function CalendarPreview() {
  const {
    recurrenceType,
    everyX,
    selectedDays,
    startDate,
    endDate,
  } = useRecurrenceStore();

  const previewDates = useMemo(() => {
    if (!recurrenceType || !startDate) return [];

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : addMonths(start, 1); // default preview: 1 month
    const dates: string[] = [];

    let current = new Date(start);

    while (isBefore(current, end) || current.getTime() === end.getTime()) {
      if (recurrenceType === "daily") {
        dates.push(format(current, "yyyy-MM-dd"));
        current = addDays(current, everyX);
      } else if (recurrenceType === "weekly") {
        selectedDays.forEach((day: string) => {
          const temp = new Date(current);
          const weekdayIndex = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].indexOf(day);
          const dayOffset = (7 + weekdayIndex - temp.getDay()) % 7;
          temp.setDate(temp.getDate() + dayOffset);
          if (isBefore(temp, end) || temp.getTime() === end.getTime()) {
            dates.push(format(temp, "yyyy-MM-dd"));
          }
        });
        current = addWeeks(current, everyX);
      } else if (recurrenceType === "monthly") {
        dates.push(format(current, "yyyy-MM-dd"));
        current = addMonths(current, everyX);
      } else if (recurrenceType === "yearly") {
        dates.push(format(current, "yyyy-MM-dd"));
        current = addYears(current, everyX);
      } else {
        break;
      }
    }

    return [...new Set(dates)].sort(); // Remove duplicates & sort
  }, [recurrenceType, everyX, selectedDays, startDate, endDate]);

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-zinc-800">
      <h2 className="text-lg font-semibold mb-3">📅 Recurring Dates Preview</h2>
      {previewDates.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">No dates to display.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {previewDates.map((date) => (
            <li
              key={date}
              className="px-2 py-1 bg-white dark:bg-zinc-700 rounded shadow text-center"
            >
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
