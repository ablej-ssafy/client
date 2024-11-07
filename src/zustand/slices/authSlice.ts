import {StateCreator} from 'zustand';

import type {AccessToken, RefreshToken} from '@/types/ableJ';
import {ProfileSlice} from '@/zustand/slices/profileSlice';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

interface AuthAction {
  login: (accessToken: AccessToken, refreshToken: RefreshToken) => void;
  logout: VoidFunction;
}

export type AuthSlice = AuthState & AuthAction;

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
};

export const createAuthSlice: StateCreator<
  AuthSlice & ProfileSlice,
  [],
  [],
  AuthSlice
> = set => ({
  ...INITIAL_STATE,
  login: (accessToken, refreshToken) =>
    set({isLoggedIn: true, accessToken, refreshToken}),
  logout: () => set(INITIAL_STATE),
});
