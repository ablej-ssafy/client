import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import type {AccessToken, RefreshToken} from '@/types/ableJ';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

interface AuthAction {
  login: (accessToken: AccessToken, refreshToken: RefreshToken) => void;
  logout: VoidFunction;
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    set => ({
      ...INITIAL_STATE,
      login: (accessToken, refreshToken) =>
        set({accessToken, refreshToken, isLoggedIn: true}),
      logout: () => set(INITIAL_STATE),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
