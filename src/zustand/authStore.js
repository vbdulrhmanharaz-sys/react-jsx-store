import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "../supabase";

export const useAuthStore = create(
  persist(
    // eslint-disable-next-line no-unused-vars
    (set, get) => ({
      user: null,
      session: null,
      loading: false,
      error: null,

      // Register
      register: async (email, password, fullName) => {
        set({ loading: true, error: null });
        try {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName } },
          });
          if (error) throw error;
          set({ user: data.user, session: data.session, loading: false });
          return { success: true };
        } catch (error) {
          set({ error: error.message, loading: false });
          return { success: false, error: error.message };
        }
      },

      // Login
      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (error) throw error;
          set({ user: data.user, session: data.session, loading: false });
          return { success: true };
        } catch (error) {
          set({ error: error.message, loading: false });
          return { success: false, error: error.message };
        }
      },

      // Login with Google
      loginWithGoogle: async () => {
        set({ loading: true, error: null });
        try {
          const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: { redirectTo: window.location.origin },
          });
          if (error) throw error;
          set({ loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

      // Logout
      logout: async () => {
        await supabase.auth.signOut();
        set({ user: null, session: null, error: null });
          window.location.href = "/";
      },

      // Get current session
      getSession: async () => {
        const { data } = await supabase.auth.getSession();
        set({ user: data.session?.user || null, session: data.session });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, session: state.session }),
    }
  )
);