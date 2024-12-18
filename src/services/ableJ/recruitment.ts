import httpClient from '@/configs/httpClient';
import {
  RecruitmentCardListResponse,
  RecruitmentDetailResponse,
  ScrapListResponse,
  ScrapRecruitmentResponse,
  ScrapResponse,
  SearchResponse,
} from '@/types/ableJ';

export default {
  /**
   * 전체 채용 공고를 가져오는 함수
   * @param page 페이지 번호
   * @param size 페이지 크기
   * @param accessToken 액세스 토큰
   */
  getAllRecruitment: async ({
    page = 0,
    size = 21,
    accessToken,
  }: {
    page?: number;
    size?: number;
    accessToken?: string;
  }): Promise<SearchResponse> => {
    return httpClient.get<SearchResponse>(
      `/recruitments?page=${page}&size=${size}`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

  /**
   * 채용 공고 상세정보를 가져오는 함수
   * @param recruitmentId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  getRecruitmentDetail: async (recruitmentId: number, accessToken?: string) => {
    return httpClient.get<RecruitmentDetailResponse>(
      `/recruitments/${recruitmentId}`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

  /**
   * 카테고리별 채용 공고를 가져오는 함수
   * @param categoryId 채용 공고 아이디
   * @param page 페이지 번호
   * @param size 페이지 크기
   * @param accessToken 액세스 토큰
   */
  getCategoryRecruitment: async ({
    categoryId,
    page = 0,
    size = 21,
    accessToken,
  }: {
    categoryId: number;
    page?: number;
    size?: number;
    accessToken?: string;
  }) => {
    return httpClient.get<SearchResponse>(
      `/recruitments/category/${categoryId}?page=${page}&size=${size}`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

  /**
   * 추천 채용 공고를 가져오는 함수
   * @param resumeId 추천 채용 공고를 받을 이력서 아이디
   * @param accessToken 액세스 토큰
   */
  getRecommendedRecruitments: async (resumeId: number, accessToken: string) => {
    return httpClient.get<RecruitmentCardListResponse>(
      `/recommend/${resumeId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },

  /**
   * 채용 공고별 스크랩 여부를 가져오는 함수
   * @param recruitmentId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  getScrapStatus: async (recruitmentId: number, accessToken?: string) => {
    return httpClient.get<ScrapResponse>(
      `/recruitments/${recruitmentId}/scrap`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

  /**
   * 채용 공고를 스크랩하는 함수
   * @param recruitmentId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  scrapRecruitment: async (recruitmentId: number, accessToken: string) => {
    return httpClient.post<ScrapRecruitmentResponse>(
      `/recruitments/${recruitmentId}/scrap`,
      undefined,
      {
        headers: {Authorization: `Bearer ${accessToken}`},
      },
    );
  },

  /**
   * 채용 공고 스크랩을 취소하는 함수
   * @param recruitmentId 채용 공고 아이디
   * @param accessToken 액세스 토큰
   */
  deleteScrapRecruitment: async (
    recruitmentId: number,
    accessToken: string,
  ) => {
    return httpClient.delete(`/recruitments/${recruitmentId}/scrap`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * 스크랩한 채용 공고를 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getScrapList: async (accessToken: string) => {
    return httpClient.get<ScrapListResponse>('/member/scrap', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
