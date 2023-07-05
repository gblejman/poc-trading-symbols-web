import { User } from "firebase/auth";
import { create } from "zustand";

type Store = {
  isReady: boolean;
  auth: {
    user: User | null;
  };
  setIsReady: (isReady: boolean) => void;
  signIn: (user: User) => void;
  signOut: () => void;
};

export const useStore = create<Store>((set) => ({
  isReady: false,
  auth: {
    user: null,
  },
  setIsReady: (isReady: boolean) => set(() => ({ isReady })),
  signIn: (user: User) => set(() => ({ auth: { user } })),
  signOut: () => set({ auth: { user: null } }),
}));
