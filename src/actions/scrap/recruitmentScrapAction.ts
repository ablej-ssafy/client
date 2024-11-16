'use server';

import {revalidatePath, revalidateTag} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const recruitmentScrapAction = async (formData: FormData) => {
  const recruitmentIdRaw = formData.get('recruitmentId');
  const isScrapRaw = formData.get(`isScrap:${recruitmentIdRaw}`);
  const tag = formData.get('tag');

  if (typeof recruitmentIdRaw !== 'string' || typeof isScrapRaw !== 'string') {
    console.error('잘못된 요청입니다.');
    return;
  }

  const recruitmentId = Number(recruitmentIdRaw);
  const isScrap = isScrapRaw === 'true';

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    redirect('/(.)signin');
  }

  if (isScrap) {
    await ableJ.deleteScrapRecruitment(recruitmentId, accessToken);
  } else {
    const response = await ableJ.scrapRecruitment(recruitmentId, accessToken);

    if (!response.success) {
      throw new Error('스크랩에 실패했습니다.');
    }
  }

  if (tag) {
    revalidateTag(tag as string);
    return;
  }

  revalidatePath('/recruitments');
};

export default recruitmentScrapAction;
