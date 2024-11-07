import {StateCreator} from 'zustand';

import type {Profile} from '@/types/ableJ';
import {AuthSlice} from '@/zustand/slices/authSlice';

interface ProfileAction {
  setProfile: (profile: Profile) => void;
  clearProfile: VoidFunction;
}

export type ProfileSlice = Profile & ProfileAction;

const INITIAL_STATE: Profile = {
  id: 0,
  name: '',
  email: '',
  career: 0,
  jobCategoryResponse: [],
};

export const createProfileSlice: StateCreator<
  ProfileSlice & AuthSlice,
  [],
  [],
  ProfileSlice
> = set => ({
  ...INITIAL_STATE,
  setProfile: profile => set(profile),
  clearProfile: () => set(INITIAL_STATE),
});
