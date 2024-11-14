import {StateCreator} from 'zustand';

import {RecruitmentCardType} from '@/types/ableJ';

export interface RecommendSlice {
  recruitments: {[resumeId: number]: RecruitmentCardType[]};
  setRecruitments: (
    resumeId: number,
    recruitments: RecruitmentCardType[],
  ) => void;
}

export const createRecommendSlice: StateCreator<RecommendSlice> = set => ({
  recruitments: {},
  setRecruitments: (resumeId: number, recruitments: RecruitmentCardType[]) => {
    set(state => ({
      recruitments: {...state.recruitments, [resumeId]: recruitments},
    }));
  },
});
