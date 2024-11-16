'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';

import ableJ from '@/services/ableJ';

const recentKeywordAllDeleteAction = async (): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await ableJ.deleteAllRecentSearch(accessToken);

    revalidatePath('/search');

    return {success: response.status === 204};
  } catch (error) {
    console.error('최근 검색어 전체 삭제 중 api 오류:', error);
    return {success: false};
  }
};

export default recentKeywordAllDeleteAction;
