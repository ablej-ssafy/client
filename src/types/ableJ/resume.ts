import {ResponseType} from '@/types/common';

export type CompanyName = string;
export type JobId = number;
export type JobSubId = number;
export type Resume = string;
export type JobTitle = string;

export type Job = {
  id: JobId;
  title: JobTitle;
};

export type ResumePDF = {
  id: number;
  fileName: string;
  createdAt: string;
};
export type GetResumePDFResponse = ResponseType<ResumePDF[]>;

export type GetAllJobsResponseData = Job[];

export type GetAllJobsResponse = ResponseType<GetAllJobsResponseData>;
