'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ/resume';

const getResumeListAction = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return;
  }

  try {
    const data = await resumeService.getResumeList(token);

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('파일 업로드 중 오류:', error);

    return;
  }
};

export default getResumeListAction;
