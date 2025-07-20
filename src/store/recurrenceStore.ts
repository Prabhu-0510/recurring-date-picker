// src/store/recurrenceStore.ts
import { create } from "zustand";

type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly" | "";

interface RecurrenceState {
  recurrenceType: RecurrenceType;
  everyX: number;
  selectedDays: string[];
  startDate: string;
  endDate: string;
  setRecurrenceType: (type: RecurrenceType) => void;
  setEveryX: (val: number) => void;
  setSelectedDays: (days: string[]) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: "",
  everyX: 1,
  selectedDays: [],
  startDate: "",
  endDate: "",
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setEveryX: (val) => set({ everyX: val }),
  setSelectedDays: (days) => set({ selectedDays: days }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));

export default useRecurrenceStore;
        