'use server';

import {cookies} from 'next/headers';

import ableJ from '@/services/ableJ';

const deleteScrapAction = async (
  recruitmentId: number,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await ableJ.deleteScrapRecruitment(recruitmentId, token);
    return {success: response.status === 204};
  } catch (error) {
    console.error('스크랩 취소 중 api 오류:', error);
    return {success: false};
  }
};

export default deleteScrapAction;
