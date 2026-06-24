import { getCurrentUser } from "@/services/auth";
import { User } from "@/types/types";
import { create } from "zustand";

type AuthType = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setIsAuthenticated: (value: boolean) => void;
  setUser: (value: User) => void;
  setLoading: (value: boolean) => void;

  fetchAuthenticatedUsers: ()=>Promise<void>;
};

export const useAuthStore = create<AuthType>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setLoading: (value) => set({ isLoading: value }),
  setUser: (user) => set({ user }),

  fetchAuthenticatedUsers: async () => {
    set({ isLoading: true });

    try {

     const user = await getCurrentUser();
     if (user) {
        set({
          isAuthenticated: true,
          user:user as User,
        });
      } else {
        set({
          isAuthenticated: false,
          user: null,
        });
      } 
    } catch (error) {

      set({ isAuthenticated: false, user: null });
      console.log(error);
    }finally {
      set({ isLoading: false });
    }
  },
}));
