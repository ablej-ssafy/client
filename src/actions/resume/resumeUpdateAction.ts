'use server';

import {cookies} from 'next/headers';

import ableJ from '@/services/ableJ';
import {RecruitmentCardType} from '@/types/ableJ';

const resumeUpdateAction = async (
  _prevState: unknown,
  formData: FormData,
): Promise<{success: boolean; data: RecruitmentCardType[]}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false, data: []};
  }

  try {
    const response = await ableJ.resumeUpload(formData, token);
    return {success: true, data: response.data};
  } catch (error) {
    console.error('파일 업로드 중 api 오류:', error);
    return {success: false, data: []};
  }
};

export default resumeUpdateAction;
