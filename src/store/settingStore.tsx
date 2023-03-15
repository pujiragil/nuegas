import { create, StateCreator } from "zustand";

interface TabSlice {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const createTabSlice: StateCreator<TabSlice, [], [], TabSlice> = (set) => ({
  selectedTab: "general",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
});

interface GeneralSlice {
  language: string;
  timezone: string;
  timezoneType: number;
  setLanguage: (language: string) => void;
  setTimezone: (timezone: string) => void;
  setTimezoneType: (timezoneType: number) => void;
}

const createGeneralSlice: StateCreator<GeneralSlice, [], [], GeneralSlice> = (
  set
) => ({
  language: "English",
  timezone: "English",
  timezoneType: 24,
  setLanguage: (language) => set({ language }),
  setTimezone: (timezone) => set({ timezone }),
  setTimezoneType: (timezoneType) => set({ timezoneType }),
});
