import { create } from "zustand";

type IsDropdownMenuMobileOpenState = {
  isDropdownMenuMobileOpen: boolean;
  setIsDropdownMenuMobileOpen: (isDropdownMenuMobileOpen: boolean) => void;
};

export const useIsDropdownMenuMobileOpenStore =
  create<IsDropdownMenuMobileOpenState>()((set) => ({
    isDropdownMenuMobileOpen: false,
    setIsDropdownMenuMobileOpen: (isDropdownMenuMobileOpen: boolean) =>
      set({ isDropdownMenuMobileOpen }),
  }));
