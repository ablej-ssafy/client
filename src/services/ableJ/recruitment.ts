import httpClient from '@/configs/httpClient';
import {RecruitmentDetailResponse} from '@/types/ableJ';

export default {
  /**
   * 채용 공고 상세정보를 가져오는 함수
   * @param recruitmentId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  getRecruitmentDetail: async (recruitmentId: number, accessToken: string) => {
    return httpClient.get<RecruitmentDetailResponse>(
      `/recruitment/${recruitmentId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
};
