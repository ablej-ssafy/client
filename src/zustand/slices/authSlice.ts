import {StateCreator} from 'zustand';

export interface AuthSlice {
  gitHubToken: string | null;
  setGitHubToken: (token: string) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
  gitHubToken: null,
  setGitHubToken: (token: string) => set({gitHubToken: token}),
});
