import {persist} from 'zustand/middleware';

import {RecruitmentCard} from '@/types/ableJ';
import recommendSessionStorage from '@/zustand/storages/recommendSessionStorage';

export interface RecommendSlice {
  recruitments: {[resumeId: number]: RecruitmentCard[]};
  setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => void;
  isHydrated: boolean;
  setIsHydrated: (hydrated: boolean) => void;
}

export const createRecommendSlice = persist(
  set => ({
    recruitments: {},
    isHydrated: false,
    setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => {
      set((state: RecommendSlice) => ({
        recruitments: {...state.recruitments, [resumeId]: recruitments},
      }));
    },
    setIsHydrated: (hydrated: boolean) => set({isHydrated: hydrated}),
  }),
  {
    name: 'recommend',
    storage: recommendSessionStorage,
    onRehydrateStorage: () => state => {
      if (state && typeof state.setIsHydrated === 'function') {
        state.setIsHydrated(true);
      }
    },
    partialize: (state: RecommendSlice) => ({
      recruitments: state.recruitments,
      isHydrated: state.isHydrated,
      setIsHydrated: state.setIsHydrated,
      setRecruitments: state.setRecruitments,
    }),
  },
);
