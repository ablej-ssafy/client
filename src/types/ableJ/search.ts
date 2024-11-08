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

export type SearchResponse = ResponseType<Paging<Search[]>>;
