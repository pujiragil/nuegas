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

interface NotificationSlice {
  message: boolean;
  taskUpdate: boolean;
  taskDeadline: boolean;
  mentorHelp: boolean;
  setMessage: (show: boolean) => void;
  setTaskUpdate: (show: boolean) => void;
  setTaskDeadline: (show: boolean) => void;
  setMentorHelp: (show: boolean) => void;
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
  setMessage: (message) => set({ message }),
  setTaskUpdate: (taskUpdate) => set({ taskUpdate }),
  setTaskDeadline: (taskDeadline) => set({ taskDeadline }),
  setMentorHelp: (mentorHelp) => set({ mentorHelp }),
});

const useSettingStore = create<TabSlice & GeneralSlice & NotificationSlice>()(
  (...a) => ({
    ...createTabSlice(...a),
    ...createGeneralSlice(...a),
    ...createNotificationSlice(...a),
  })
);

export default useSettingStore;
