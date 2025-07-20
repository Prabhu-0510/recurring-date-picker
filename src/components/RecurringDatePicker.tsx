// src/components/RecurringDatePicker.tsx
"use client";
import RecurrenceOptions from "./RecurrenceOptions";
import DaySelector from "./DaySelector";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";

export default function RecurringDatePicker() {
  return (
    <div className="space-y-6 border p-6 rounded-2xl shadow-xl bg-white dark:bg-zinc-900">
      <RecurrenceOptions />
      <DaySelector />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
