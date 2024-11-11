import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {RecruitmentCard} from '@/types/ableJ';
import recommendSessionStorage from '@/zustand/storages/recommendSessionStorage';

export interface RecommendSlice {
  recruitments: {[resumeId: number]: RecruitmentCard[]};
  setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => void;
  isHydrated: boolean;
  setIsHydrated: (hydrated: boolean) => void;
}

export const useRecommendStore = create<RecommendSlice>()(
  persist(
    set => ({
      recruitments: {},
      isHydrated: false,
      setRecruitments: (resumeId, recruitments) => {
        set(state => ({
          recruitments: {...state.recruitments, [resumeId]: recruitments},
        }));
      },
      setIsHydrated: hydrated => set({isHydrated: hydrated}),
    }),
    {
      name: 'recommend',
      storage: recommendSessionStorage,
      onRehydrateStorage: () => state => {
        if (state) state.setIsHydrated(true);
      },
    },
  ),
);
