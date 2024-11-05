'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ';

const resumeUpdateAction = async (
  _prevState: unknown,
  formData: FormData,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await resumeService.resumeUpload(formData, token);
    console.log(response);
    return {success: true};
  } catch (error) {
    console.error('파일 업로드 중 오류:', error);
    return {success: false};
  }
};

export default resumeUpdateAction;
