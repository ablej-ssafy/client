'use server';

import {cookies} from 'next/headers';

import resumeService from '@/services/ableJ';
import {RecruitmentCard} from '@/types/ableJ';

const resumeUpdateAction = async (
  _prevState: unknown,
  formData: FormData,
): Promise<{success: boolean; data: RecruitmentCard[]}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false, data: []};
  }

  try {
    const response = await resumeService.resumeUpload(formData, token);
    return {success: true, data: response.data};
  } catch (error) {
    console.error('파일 업로드 중 api 오류:', error);
    return {success: false, data: []};
  }
};

export default resumeUpdateAction;
