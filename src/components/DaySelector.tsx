// src/components/DaySelector.tsx
"use client";

import React from "react";
import useRecurrenceStore from "@/store/recurrenceStore";

export default function DaySelector() {
  const { recurrenceType, selectedDays, setSelectedDays } = useRecurrenceStore();

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayToggle = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d: string) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  if (recurrenceType !== "weekly") return null;

  return (
    <div className="mt-4">
      <label className="block font-semibold mb-1">Select Days of the Week</label>
      <div className="flex flex-wrap gap-2">
        {weekDays.map((day) => {
          const isSelected = selectedDays.includes(day);
          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDayToggle(day)}
              className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors duration-200 ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-black border-gray-300 hover:bg-blue-100"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
