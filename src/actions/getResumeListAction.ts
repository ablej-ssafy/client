'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ';

const getResumeListAction = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return;
  }

  try {
    const response = await resumeService.getResumeList(token);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('pdf 이력서 목록 가져오는 중 오류:', error);

    return;
  }
};

export default getResumeListAction;
