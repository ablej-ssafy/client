'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ';

const resumeDeleteAction = async (resumeId: number) => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {file: null, error: 'Access Token이 없습니다.', success: false};
  }

  try {
    const response = await resumeService.resumeDelete(resumeId, token);

    console.log(response.status === 204);
    return response.status === 204
      ? '삭제가 완료되었습니다.'
      : '이미 삭제 된 파일입니다.';
  } catch (error) {
    console.error('파일 삭제 중 api 오류:', error);
  }
};

export default resumeDeleteAction;
