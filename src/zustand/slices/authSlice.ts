import {StateCreator} from 'zustand';

export interface AuthSlice {
  githubToken: string | null;
  setGithubToken: (token: string) => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
  githubToken: null,
  setGithubToken: (token: string) => set({githubToken: token}),
});
