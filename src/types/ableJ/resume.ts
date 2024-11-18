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
  name: JobTitle;
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

export interface EducationInfo {
  name?: Name | null;
  major?: string | null;
  category?: string | null;
  grade?: string | null;
  gradeType?: string | null;
  description?: string | null;
  startAt?: string | null;
  endAt?: string | null;
  educationId?: number | null;
}

export interface ExperienceInfo {
  experienceType: 'COMPANY' | 'PROJECT' | 'ACTIVITY';
  title?: string | null;
  affiliation?: string | null;
  startAt?: string | null;
  endAt?: string | null;
  description?: string | null;
  referenceUrl?: string | null;
  experienceId?: number | null;
}

export interface CertificationInfo {
  name?: string | null;
  organization?: string | null;
  credential?: string | null;
  acquisitionAt?: string | null;
  grade?: string | null;
  certificationType: 'LANGUAGE' | 'QUALIFICATION';
  certificationId?: number | null;
}

export interface TechStackInfoForm {
  techId?: number | null;
  githubUrl: string | null;
  notionUrl: string | null;
  techSkills: Skill['skillId'][] | null;
}

export interface AiParsedResume {
  aiBasic: ResumeBasicInfo;
  aiEducationals: EducationInfo[];
  aiExperiences: ExperienceInfo[];
  aiCertifications: CertificationInfo[];
}

export interface ResumeOrder {
  basic: number;
  education: number;
  company: number;
  project: number;
  activity: number;
  qualification: number;
  language: number;
  tech: number;
}

export type ChangeResumeOrderForm = {
  education: number;
  company: number;
  project: number;
  activity: number;
  qualification: number;
  language: number;
  tech: number;
};

export interface ResumeInfo {
  hashKey: string;
  templateType: ResumeTemplateType;
  private: boolean;
}

export type GetAiParsedResumeResponseData = AiParsedResume;
export type GetResumePDFResponse = ResponseType<ResumePDF[]>;
export type GetAllJobsResponseData = Job[];
export type GetAllTechSkillsResponseData = Skill[];
export type GetEducationInfoResponseData = {educations: EducationInfo[]};
export type GetExperienceInfoResponseData = {experiences: ExperienceInfo[]};
export type GetCertificationInfoResponseData = {
  certifications: CertificationInfo[];
};
export type GetTechStackInfoResponseData = {
  techId: number;
  techSkills: Skill[] | null;
  githubUrl: string | null;
  notionUrl: string | null;
};

export type ResumeTemplateType =
  | 'BASIC_LIGHT'
  | 'BASIC_DARK'
  | 'MODERN_LIGHT'
  | 'MODERN_DARK';

export type PostProfileImageResponseData = ProfileImageUrl;
export type GetResumeOrderResponseData = ResumeOrder;
export type GetResumeInfoResponseData = ResumeInfo;

export type GetAiParsedResumeResponse =
  ResponseType<GetAiParsedResumeResponseData>;
export type GetAllJobsResponse = ResponseType<GetAllJobsResponseData>;
export type GetAllTechSkillsResponse =
  ResponseType<GetAllTechSkillsResponseData>;
export type GetResumeBasicInfoResponse = ResponseType<ResumeBasicInfo>;
export type GetEducationInfoResponse =
  ResponseType<GetEducationInfoResponseData>;
export type GetExperienceInfoResponse =
  ResponseType<GetExperienceInfoResponseData>;
export type GetCertificationInfoResponse =
  ResponseType<GetCertificationInfoResponseData>;
export type GetTechStackInfoResponse =
  ResponseType<GetTechStackInfoResponseData>;
export type PostProfileImageResponse =
  ResponseType<PostProfileImageResponseData>;
export type GetResumeOrderResponse = ResponseType<GetResumeOrderResponseData>;
export type GetResumeInfoResponse = ResponseType<GetResumeInfoResponseData>;
