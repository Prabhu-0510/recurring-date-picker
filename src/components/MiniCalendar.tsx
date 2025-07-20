// src/components/MiniCalendar.tsx
"use client";

import { format, addDays } from "date-fns";
import useRecurrenceStore from "@/store/recurrenceStore";
import React from "react";

export default function MiniCalendar() {
  const { startDate, recurrenceType, everyX } = useRecurrenceStore();

  if (!startDate) return null;

  const previewDates: string[] = [];
  let date = new Date(startDate);

  for (let i = 0; i < 10; i++) {
    previewDates.push(format(date, "yyyy-MM-dd"));

    switch (recurrenceType) {
      case "daily":
        date = addDays(date, everyX);
        break;
      case "weekly":
        date = addDays(date, everyX * 7);
        break;
      case "monthly":
        date.setMonth(date.getMonth() + everyX);
        break;
      case "yearly":
        date.setFullYear(date.getFullYear() + everyX);
        break;
      default:
        break;
    }
  }

  return (
    <div className="mt-6 bg-gray-50 p-4 rounded shadow text-sm">
      <h3 className="font-semibold mb-2">📆 Mini Calendar Preview</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {previewDates.map((d) => (
          <li
            key={d}
            className="bg-white p-2 rounded shadow text-center"
          >
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
