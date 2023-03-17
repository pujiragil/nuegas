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
  notification: {
    message: boolean;
    taskUpdate: boolean;
    taskDeadline: boolean;
    mentorHelp: boolean;
  };
  setNotification: (notification: NotificationSlice["notification"]) => void;
}

const createNotificationSlice: StateCreator<
  NotificationSlice,
  [],
  [],
  NotificationSlice
> = (set) => ({
  notification: {
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false,
  },
  setNotification: (notification) =>
    set((state) => ({
      notification: { ...state.notification, ...notification },
    })),
});

const useSettingStore = create<TabSlice & GeneralSlice & NotificationSlice>()(
  (...a) => ({
    ...createTabSlice(...a),
    ...createGeneralSlice(...a),
    ...createNotificationSlice(...a),
  })
);

export default useSettingStore;
