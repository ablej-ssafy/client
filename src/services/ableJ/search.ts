import httpClient from '@/configs/httpClient';
import {RankSearchResponse, SearchResponse} from '@/types/ableJ';

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
   * 인기 검색어 및 최근 검색어를 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getRankSearch: async (accessToken?: string) => {
    return httpClient.get<RankSearchResponse>('/search', {
      headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
    });
  },
};
