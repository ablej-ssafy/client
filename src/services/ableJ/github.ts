import httpClient from '@/configs/httpClient';
import {AnalysisGitHubResponse} from '@/types/ableJ';

export default {
  /**
   * GitHub 분석을 요청하는 함수
   * @param owner 레포지토리 소유자
   * @param repo 레포지토리명
   * @param branch 브랜치명
   * @param githubToken 깃허브 토큰
   */
  AnalysisGitHub: async (
    owner: string,
    repo: string,
    branch: string,
    githubToken: string,
  ) => {
    return httpClient.post<AnalysisGitHubResponse>(
      `/github/analysis`,
      {
        owner,
        repo,
        branch,
        token: githubToken,
      },
      {
        headers: {Authorization: `Bearer ${githubToken}`},
      },
    );
  },
};
