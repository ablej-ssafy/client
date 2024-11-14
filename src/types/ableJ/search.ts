import {Paging, ResponseType} from '@/types/common';

export interface Search {
  recruitmentId: number;
  name: string;
  thumbnail: string;
  companyId: number;
  companyName: string;
  location: string;
  strict: string;
  category: string;
  scrapped: boolean;
}

export interface RankSearch {
  ranks: RankContent[];
  recentKeywords: RankContent[];
}

export interface RankContent {
  rank: number;
  keyword: string;
}

export type SearchResponse = ResponseType<Paging<Search[]>>;
export type RankSearchResponse = ResponseType<RankSearch>;
export type AutoSearchResponse = ResponseType<string[]>;
