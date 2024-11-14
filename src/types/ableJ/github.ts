import {ResponseType} from '@/types/common';

export interface GitHubStatus {
  state: string;
  step: string;
  result: null;
  request_id: string;
}

export type AnalysisGitHubResponse = ResponseType<GitHubStatus>;
