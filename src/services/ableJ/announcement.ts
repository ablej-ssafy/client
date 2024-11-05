import httpClient from '@/configs/httpClient';
import {AnnouncementDetailResponse} from '@/types/ableJ';

export default {
  /**
   * 채용 공고 상세정보를 가져오는 함수
   * @param announcementId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  getAnnouncementDetail: async (
    announcementId: number,
    accessToken: string,
  ) => {
    return httpClient.get<AnnouncementDetailResponse>(
      `/recruitment/${announcementId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
};
