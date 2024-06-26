import { create } from "zustand";

type IsMenuDrawerOpenState = {
  isMenuDrawerOpen: boolean;
  setIsMenuDrawerOpen: (isMenuDrawerOpen: boolean) => void;
};

export const useIsMenuDrawerOpenStore = create<IsMenuDrawerOpenState>()(
  (set) => ({
    isMenuDrawerOpen: false,
    setIsMenuDrawerOpen: (isMenuDrawerOpen: boolean) =>
      set({ isMenuDrawerOpen }),
  })
);
