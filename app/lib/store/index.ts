import { create } from 'zustand';

type UIState = {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));