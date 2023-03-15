import { create, StateCreator } from "zustand";

interface TabSlice {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const createTabSlice: StateCreator<TabSlice, [], [], TabSlice> = (set) => ({
  selectedTab: "general",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
});
