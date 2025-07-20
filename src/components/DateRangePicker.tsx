// src/components/DateRangePicker.tsx
"use client";
import useRecurrenceStore from "@/store/recurrenceStore";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold mb-1">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">End Date (optional)</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}
