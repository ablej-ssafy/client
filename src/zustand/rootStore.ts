import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {AuthSlice, createAuthSlice} from '@/zustand/slices/authSlice';
import {
  createRecommendSlice,
  RecommendSlice,
} from '@/zustand/slices/recommendSlice';
import recommendSessionStorage from '@/zustand/storages/recommendSessionStorage';

export const useRootStore = create<AuthSlice & RecommendSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createRecommendSlice(...a),
    }),
    {
      name: 'rootStore',
      storage: recommendSessionStorage,
    },
  ),
);
