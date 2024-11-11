import {create, StateCreator} from 'zustand';
import {persist} from 'zustand/middleware';

import {RecruitmentCard} from '@/types/ableJ';
import recommendSessionStorage from '@/zustand/storages/recommendSessionStorage';

export interface RecommendSlice {
  recruitments: {[resumeId: number]: RecruitmentCard[]};
  setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => void;
}

export const createRecommendSlice: StateCreator<RecommendSlice> = set => ({
  recruitments: {},
  setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => {
    set(state => ({
      recruitments: {...state.recruitments, [resumeId]: recruitments},
    }));
  },
});

export const useRecommendStore = create<RecommendSlice>()(
  persist(
    set => ({
      recruitments: {},
      setRecruitments: (resumeId: number, recruitments: RecruitmentCard[]) => {
        set(state => ({
          recruitments: {...state.recruitments, [resumeId]: recruitments},
        }));
      },
    }),
    {
      name: 'recommend',
      storage: recommendSessionStorage,
    },
  ),
);
