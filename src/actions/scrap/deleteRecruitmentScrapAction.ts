'use server';

import {revalidateTag} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import recruitmentService from '@/services/ableJ';

const deleteRecruitmentScrapAction = async (formData: FormData) => {
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

  await recruitmentService.deleteScrapRecruitment(recruitmentId, accessToken);

  if (tag) {
    revalidateTag(tag as string);
  }
};

export default deleteRecruitmentScrapAction;
