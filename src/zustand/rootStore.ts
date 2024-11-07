import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {AuthSlice, createAuthSlice} from '@/zustand/slices/authSlice';
import {createProfileSlice, ProfileSlice} from '@/zustand/slices/profileSlice';

export const useRootStore = create<ProfileSlice & AuthSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createProfileSlice(...a),
    }),
    {name: 'rootStore'},
  ),
);
