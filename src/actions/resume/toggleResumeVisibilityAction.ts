'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const toggleResumeVisibilityAction = async (isPrivate: boolean) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    redirect('/(.)signin');
  }

  const request = isPrivate ? ableJ.revealResume : ableJ.hideResume;
  await request(accessToken as string);
};

export default toggleResumeVisibilityAction;
