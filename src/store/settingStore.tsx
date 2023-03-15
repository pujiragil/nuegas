import { create, StateCreator } from "zustand";

interface TabSlice {
  selectedTab: "general" | "notification";
  setSelectedTab: (tab: TabSlice["selectedTab"]) => void;
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

interface NotificationSlice {
  message: boolean;
  taskUpdate: boolean;
  taskDeadline: boolean;
  mentorHelp: boolean;
  setMessage: () => void;
  setTaskUpdate: () => void;
  setTaskDeadline: () => void;
  setMentorHelp: () => void;
}

const createNotificationSlice: StateCreator<
  NotificationSlice,
  [],
  [],
  NotificationSlice
> = (set) => ({
  message: true,
  taskUpdate: false,
  taskDeadline: true,
  mentorHelp: false,
  setMessage: () => set((state) => ({ message: !state.message })),
  setTaskUpdate: () => set((state) => ({ taskUpdate: !state.taskUpdate })),
  setTaskDeadline: () =>
    set((state) => ({ taskDeadline: !state.taskDeadline })),
  setMentorHelp: () => set((state) => ({ mentorHelp: !state.mentorHelp })),
});

const useSettingStore = create<TabSlice & GeneralSlice & NotificationSlice>()(
  (...a) => ({
    ...createTabSlice(...a),
    ...createGeneralSlice(...a),
    ...createNotificationSlice(...a),
  })
);

export default useSettingStore;
