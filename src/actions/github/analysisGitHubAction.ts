'use server';

import githubService from '@/services/ableJ';

const resumeUpdateAction = async (
  owner: string,
  repo: string,
  branch: string,
  githubToken: string,
): Promise<{success: boolean}> => {
  console.log(owner, repo, branch, githubToken);
  try {
    const response = await githubService.AnalysisGitHub(
      owner,
      repo,
      branch,
      githubToken,
    );
    return {success: response.success};
  } catch (error) {
    console.error('깃허브 분석 요청 api 오류:', error);
    return {success: false};
  }
};

export default resumeUpdateAction;
