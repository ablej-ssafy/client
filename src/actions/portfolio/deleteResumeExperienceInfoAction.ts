'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const deleteResumeExperienceInfoAction = async (experienceId: number) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.deleteExperienceInfo(experienceId, accessToken);

  if (!response.ok) {
    return {
      error: '경력 및 분야 정보 삭제에 실패했습니다.',
      success: false,
    };
  }

  revalidatePath('/portfolio/experience');

  return {
    error: '',
    success: true,
  };
};

export default deleteResumeExperienceInfoAction;