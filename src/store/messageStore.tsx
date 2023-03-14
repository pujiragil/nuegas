import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  handleOpen: (isOpen: boolean) => void;
};

const useMessage = create<State & Action>((set) => ({
  isOpen: false,
  handleOpen: (isOpen) => set(() => ({ isOpen })),
}));

export default useMessage;
