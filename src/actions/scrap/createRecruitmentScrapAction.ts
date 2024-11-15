'use server';

import {revalidateTag} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const createRecruitmentScrapAction = async (formData: FormData) => {
  const recruitmentIdRaw = formData.get('recruitmentId');
  const tag = formData.get('tag');

  if (typeof recruitmentIdRaw !== 'string') {
    console.error('잘못된 요청입니다.');
  }

  const recruitmentId = Number(recruitmentIdRaw);

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    redirect('/signin');
  }

  const response = await ableJ.scrapRecruitment(recruitmentId, accessToken);

  if (!response.success) {
    throw new Error('스크랩에 실패했습니다.');
  }

  if (tag) {
    revalidateTag(tag as string);
  }
};

export default createRecruitmentScrapAction;
