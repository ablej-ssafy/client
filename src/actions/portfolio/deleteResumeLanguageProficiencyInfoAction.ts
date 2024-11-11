'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const deleteResumeCertificationInfoAction = async (certificationId: number) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.deleteCertificationInfo(
    certificationId,
    accessToken,
  );

  if (!response.ok) {
    return {
      error: '어학 성적 정보 삭제에 실패했습니다.',
      success: false,
    };
  }

  revalidatePath('/portfolio/language');

  return {
    error: '',
    success: true,
  };
};

export default deleteResumeCertificationInfoAction;
