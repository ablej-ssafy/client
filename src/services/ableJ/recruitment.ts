import httpClient from '@/configs/httpClient';
import {
  RecruitmentCardListResponse,
  RecruitmentDetailResponse,
  SearchResponse,
} from '@/types/ableJ';

export default {
  /**
   * 전체 채용 공고를 가져오는 함수
   * @param page 페이지 번호
   * @param size 페이지 크기
   * @param accessToken 액세스 토큰
   */
  getAllRecruitment: async (
    page: number,
    size: number,
    accessToken?: string,
  ) => {
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
  getCategoryRecruitment: async (
    categoryId: number,
    page: number,
    size: number,
    accessToken?: string,
  ) => {
    return httpClient.get<SearchResponse>(
      `/recruitments/category/${categoryId}?page=${page}&size=${size}`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

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
};
