'use server';

import {cookies} from 'next/headers';

import recruitmentService from '@/services/ableJ';

const ScrapAction = async (
  recruitmentId: number,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await recruitmentService.scrapRecruitment(
      recruitmentId,
      token,
    );
    return {success: response.code === 200};
  } catch (error) {
    console.error('스크랩 중 api 오류:', error);
    return {success: false};
  }
};

export default ScrapAction;
