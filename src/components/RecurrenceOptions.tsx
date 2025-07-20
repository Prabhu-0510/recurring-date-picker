// src/components/RecurrenceOptions.tsx
"use client";

import useRecurrenceStore from "@/store/recurrenceStore";
import React from "react";

const recurrenceOptions = ["daily", "weekly", "monthly", "yearly"] as const;

export default function RecurrenceOptions() {
  const {
    recurrenceType,
    everyX,
    setRecurrenceType,
    setEveryX,
  } = useRecurrenceStore();

  return (
    <div className="space-y-4">
      {/* Recurrence Type Dropdown */}
      <div>
        <label className="block font-semibold mb-1">Recurrence Type</label>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value as typeof recurrenceType)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Recurrence</option>
          {recurrenceOptions.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Every X */}
      <div>
        <label className="block font-semibold mb-1">
          Every X {recurrenceType || "..."}
        </label>
        <input
          type="number"
          min={1}
          value={everyX}
          onChange={(e) => setEveryX(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}
