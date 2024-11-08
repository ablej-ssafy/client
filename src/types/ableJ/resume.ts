import {Email, Name} from '@/types/ableJ/auth';
import {ResponseType} from '@/types/common';

export type Title = string;
export type CompanyName = string;
export type JobId = number;
export type JobSubId = number;
export type Resume = string;
export type JobTitle = string;
export type ResumeBasicId = number;
export type ProfileImageUrl = string;
export type Birth = string;
export type Phone = string;
export type Introduce = string;
export type PortfolioUrl = string;

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

export interface ResumeBasicInfo {
  resumeBasicId?: ResumeBasicId | null;
  title?: Title | null;
  profile?: ProfileImageUrl | null;
  name?: Name | null;
  email?: Email | null;
  birth?: Birth | null;
  phone?: Phone | null;
  job?: string | null;
  introduce?: Introduce | null;
  portfolioUrl?: PortfolioUrl | null;
}

export type GetResumePDFResponse = ResponseType<ResumePDF[]>;
export type GetAllJobsResponseData = Job[];
export type GetAllTechSkillsResponseData = Skill[];
export type PostProfileImageResponseData = ProfileImageUrl;

export type GetAllJobsResponse = ResponseType<GetAllJobsResponseData>;
export type GetAllTechSkillsResponse =
  ResponseType<GetAllTechSkillsResponseData>;
export type GetResumeBasicInfoResponse = ResponseType<ResumeBasicInfo>;
export type PostProfileImageResponse =
  ResponseType<PostProfileImageResponseData>;
