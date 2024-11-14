import httpClient from '@/configs/httpClient';
import {
  AutoSearchResponse,
  RankSearchResponse,
  SearchResponse,
} from '@/types/ableJ';

export default {
  /**
   * 키워드로 검색 요청을 하는 함수
   * @param keyword 검색 키워드
   * @param page 페이지 번호
   * @param size 페이지 크기
   * @param accessToken 액세스 토큰
   */
  recruitmentSearch: async ({
    keyword,
    page = 0,
    size = 21,
    accessToken,
  }: {
    keyword: string;
    page?: number;
    size?: number;
    accessToken?: string;
  }) => {
    const params = new URLSearchParams();
    params.append('q', keyword);
    params.append('page', String(page));
    params.append('size', String(size));
    return httpClient.get<SearchResponse>(`/search/recruitment?${params}`, {
      headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
    });
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

  /**
   * 최근 검색어를 삭제하는 함수
   * @param keyword 키워드
   * @param accessToken 액세스 토큰
   */
  deleteRecentSearch: async (keyword: string, accessToken: string) => {
    const params = new URLSearchParams();
    params.append('keyword', keyword);
    return httpClient.delete(`/search?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * 자동완성 검색어를 조회하는 함수
   * @param keyword 키워드
   */
  getAutoSearchKeyword: async (keyword: string) => {
    const params = new URLSearchParams();
    params.append('q', keyword);
    return httpClient.get<AutoSearchResponse>(
      `/search/suggestions?${params.toString()}`,
    );
  },
};
