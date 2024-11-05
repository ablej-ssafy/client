'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ';

const resumeDeleteAction = async (
  resumeId: number,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await resumeService.resumeDelete(resumeId, token);

    console.log(response.status === 204);
    return {success: response.status === 204};
  } catch (error) {
    console.error('파일 삭제 중 api 오류:', error);
    return {success: false};
  }
};

export default resumeDeleteAction;
