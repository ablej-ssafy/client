import {ResponseType} from '@/types/common';

export interface Company {
  companyId: number;
  name: string;
  thumbnail: string;
  description?: string;
  industryName: string;
  link?: string;
  foundedYear: number;
  age: number;
  address: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
  location?: string;
  strict?: string;
  images: string[];
  recruitments: CompanyRecruitment[];
}

export interface CompanyRecruitment {
  recruitmentId: number;
  name: string;
  thumbnail: string;
  annualTo: number;
  annualFrom: number;
  dueTime?: Date;
  scrapped: boolean;
}

export type CompanyResponse = ResponseType<Company>;
