import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface AuthState {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      accessToken: '',
      setAccessToken: (accessToken: string) => set({accessToken}),
      refreshToken: '',
      setRefreshToken: (refreshToken: string) => set({refreshToken}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
