import {Company} from '@/types/ableJ';
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
  dueTime?: string;
  annualTo: number;
  annualFrom: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface RecruitmentCardType {
  id: number;
  title: string;
  companyName: string;
  thumbnail: string;
  similarity: number;
  scrapped: boolean;
}

export type RecruitmentDetailResponse = ResponseType<RecruitmentDetail>;
export type CategoryResponse = ResponseType<Category[]>;
export type RecruitmentCardListResponse = ResponseType<RecruitmentCardType[]>;
export type ScrapResponse = ResponseType<boolean>;
export type ScrapRecruitmentResponse = ResponseType<null>;
