'use server';

import {revalidateTag} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import recruitmentService from '@/services/ableJ';

const createRecruitmentScarpAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const recruitmentIdRaw = formData.get('recruitmentId');

  if (typeof recruitmentIdRaw !== 'string') {
    console.error('잘못된 요청입니다.');
  }

  const recruitmentId = Number(recruitmentIdRaw);

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    redirect('/signin');
  }

  const response = await recruitmentService.scrapRecruitment(
    recruitmentId,
    accessToken,
  );

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  revalidateTag(`recruitment-${recruitmentId}-scrap`);

  return {
    error: '',
    success: true,
  };
};

export default createRecruitmentScarpAction;
