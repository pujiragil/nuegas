import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  accessToken: string | null;
  isAuthenticated: boolean;
};

type Action = {
  setAccessToken: (accessToken: State["accessToken"]) => void;
  clearAccessToken: () => void;
};

const useAuth = create<State & Action>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      setAccessToken: (accessToken) =>
        set({ accessToken, isAuthenticated: true }),
      clearAccessToken: () =>
        set({ accessToken: null, isAuthenticated: false }),
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
    }
  )
);

export default useAuth;
