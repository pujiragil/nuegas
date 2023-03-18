import { create, StateCreator } from "zustand";

interface TabSlice {
  selectedTab: "general" | "notification";
  setSelectedTab: (tab: TabSlice["selectedTab"]) => void;
}

const createTabSlice: StateCreator<TabSlice, [], [], TabSlice> = (set) => ({
  selectedTab: "general",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
});

type Language = "English" | "Indonesian" | "Javanese";
type TimeZone = Language;

export interface GeneralSlice {
  general: {
    language: Language;
    timeZone: TimeZone;
    timeZoneType: "24 hour" | "12 hour";
  };
  setGeneral: (general: GeneralSlice["general"]) => void;
}

const createGeneralSlice: StateCreator<GeneralSlice, [], [], GeneralSlice> = (
  set
) => ({
  general: {
    language: "English",
    timeZone: "English",
    timeZoneType: "24 hour",
  },
  setGeneral: (general) =>
    set((state) => ({
      general: { ...state.general, ...general },
    })),
});

export interface NotificationSlice {
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
