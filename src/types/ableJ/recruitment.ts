import {ResponseType} from '@/types/common';

export interface RecruitmentDetail {
  recruitmentId: number;
  name: string;
  category: Category;
  childCategories: Category[];
  images: string[];
  company: Company;
  intro: string;
  task: string;
  requirement: string;
  preference?: string;
  benefit: string;
  hireRound?: string;
  dueTime?: Date;
  annualTo: number;
  annualFrom?: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Company {
  companyId: number;
  name: string;
  thumbnail: string;
  address: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
  location?: string;
  strict?: string;
}

export type RecruitmentDetailResponse = ResponseType<RecruitmentDetail>;
export type CategoryResponse = ResponseType<Category[]>;
