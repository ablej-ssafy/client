'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const deleteResumeEducationInfoAction = async (educationalId: number) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.deleteEducationInfo(educationalId, accessToken);

  if (!response.ok) {
    return {
      error: '학력 정보 삭제에 실패했습니다.',
      success: false,
    };
  }

  revalidatePath('/portfolio/education');

  return {
    error: '',
    success: true,
  };
};

export default deleteResumeEducationInfoAction;
