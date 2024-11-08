import httpClient from '@/configs/httpClient';
import {CategoryResponse, SearchResponse} from '@/types/ableJ';

export default {
  /**
   * 키워드로 검색 요청을 하는 함수
   * @param keyword 검색 키워드
   * @param page 페이지 번호
   * @param size 페이지 크기
   * @param accessToken 액세스 토큰
   */
  recruitmentSearch: async (
    keyword: string,
    page: number,
    size: number,
    accessToken?: string,
  ) => {
    return httpClient.get<SearchResponse>(
      `/search/recruitment?q=${keyword}&page=${page}&size=${size}`,
      {
        headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
      },
    );
  },

  /**
   * 전체 카테고리를 조회하는 함수
   * @param accessToken 액세스 토큰
   */
  getAllCategories: async (accessToken?: string) => {
    return httpClient.get<CategoryResponse>('/recruitment/category', {
      headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
    });
  },
};
