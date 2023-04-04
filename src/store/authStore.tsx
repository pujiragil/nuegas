import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  accessToken: string | null;
};

type Action = {
  setAccessToken: (accessToken: State["accessToken"]) => void;
  clearAccessToken: () => void;
};

const useAuth = create<State & Action>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
    }
  )
);

export default useAuth;
