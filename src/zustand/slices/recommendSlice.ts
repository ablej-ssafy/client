import {StateCreator} from 'zustand';

import {RecruitmentCardType} from '@/types/ableJ';

export interface RecommendSlice {
  recruitments: {[resumeId: number]: RecruitmentCardType[]};
  setRecruitments: (
    resumeId: number,
    recruitments: RecruitmentCardType[],
  ) => void;
  toggleScrapStatus: (recruitmentId: number, scrapped: boolean) => void;
}

export const createRecommendSlice: StateCreator<RecommendSlice> = set => ({
  recruitments: {},
  setRecruitments: (resumeId: number, recruitments: RecruitmentCardType[]) => {
    set(state => ({
      recruitments: {...state.recruitments, [resumeId]: recruitments},
    }));
  },
  toggleScrapStatus: (recruitmentId: number, scrapped: boolean) => {
    set(state => {
      const updatedRecruitments = {...state.recruitments};
      Object.keys(updatedRecruitments).forEach(key => {
        updatedRecruitments[Number(key)] = updatedRecruitments[Number(key)].map(
          (recruitment: RecruitmentCardType) =>
            recruitment.id === recruitmentId
              ? {...recruitment, scrapped}
              : recruitment,
        );
      });
      return {recruitments: updatedRecruitments};
    });
  },
});
