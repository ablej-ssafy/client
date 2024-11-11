'use server';

import {cookies} from 'next/headers';

import searchService from '@/services/ableJ';

const recentKeywordDeleteAction = async (
  keyword: string,
): Promise<{success: boolean}> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    return {success: false};
  }

  try {
    const response = await searchService.deleteRecentSearch(
      keyword,
      accessToken,
    );
    return {success: response.status === 204};
  } catch (error) {
    console.error('최근 검색어 삭제 중 api 오류:', error);
    return {success: false};
  }
};

export default recentKeywordDeleteAction;
