import {ResponseType} from '@/types/common';

export type CompanyName = string;
export type JobId = number;
export type JobSubId = number;
export type Resume = string;
export type JobTitle = string;

export interface Job {
  id: JobId;
  title: JobTitle;
}

export interface ResumePDF {
  id: number;
  url: string;
  fileName: string;
  createdAt: string;
}

export type SkillId = number;
export type SkillName = string;
export type SkillIcon = string;

export interface Skill {
  skillId: SkillId;
  skillName: SkillName;
  skillIcon: SkillIcon;
}

export type GetResumePDFResponse = ResponseType<ResumePDF[]>;
export type GetAllJobsResponseData = Job[];
export type GetAllTechSkillsResponseData = Skill[];

export type GetAllJobsResponse = ResponseType<GetAllJobsResponseData>;
export type GetAllTechSkillsResponse =
  ResponseType<GetAllTechSkillsResponseData>;
