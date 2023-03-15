import { create } from "zustand";

type State = {
  languages: string[];
  timezones: string[];
  timezoneTypes: string[];
  selectedLanguage: string;
  selectedTimezone: string;
  selectedTimezoneType: string;
};

type Action = {
  updateSelectedLanguage: (language: State["selectedLanguage"]) => void;
  updateSelectedTimezone: (timezone: State["selectedTimezone"]) => void;
  updateSelectedTimezoneType: (
    timezoneType: State["selectedTimezoneType"]
  ) => void;
};

const useSetting = create<State & Action>((set, get) => ({
  languages: ["English", "Indonesian", "Spain", "Java"],
  timezones: ["English", "Indonesian", "Spain", "Java"],
  timezoneTypes: ["24 hour", "12 hour"],
  selectedLanguage: get().languages[0],
  selectedTimezone: get().timezones[0],
  selectedTimezoneType: get().timezoneTypes[0],
  updateSelectedLanguage: (language) => set({ selectedLanguage: language }),
  updateSelectedTimezone: (timezone) => set({ selectedTimezone: timezone }),
  updateSelectedTimezoneType: (timezoneType) =>
    set({ selectedTimezoneType: timezoneType }),
}));

export default useSetting;
