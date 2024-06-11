import { create } from "zustand";

type IsDropdownMenuOpenState = {
  isDropdownMenuOpen: boolean;
  setIsDropdownMenuOpen: (isDropdownMenuOpen: boolean) => void;
};

export const useIsDropdownMenuOpenStore = create<IsDropdownMenuOpenState>()(
  (set) => ({
    isDropdownMenuOpen: false,
    setIsDropdownMenuOpen: (isDropdownMenuOpen: boolean) =>
      set({ isDropdownMenuOpen }),
  })
);
