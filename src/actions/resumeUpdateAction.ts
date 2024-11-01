'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ/resume';

const resumeUpdateAction = async (_prevState: unknown, formData: FormData) => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {file: null, error: 'Access Token이 없습니다.', success: false};
  }

  try {
    const result = await resumeService.resumeUpload(formData, token);

    console.log(result);
    return {file: null, error: '', success: true};
  } catch (error) {
    console.error('파일 업로드 중 오류:', error);

    return {file: null, error: '파일 업로드 실패', success: false};
  }
};

export default resumeUpdateAction;
