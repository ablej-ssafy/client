'use server';

import {cookies} from 'next/headers';

import githubService from '@/services/ableJ';

const resumeUpdateAction = async (
  owner: string,
  repo: string,
  branch: string,
  githubToken: string,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await githubService.AnalysisGitHub(
      owner,
      repo,
      branch,
      githubToken,
      accessToken,
    );
    return {success: response.success};
  } catch (error) {
    console.error('깃허브 분석 요청 api 오류:', error);
    return {success: false};
  }
};

export default resumeUpdateAction;
