'use server';
import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect, RedirectType} from 'next/navigation';

import ableJ from '@/services/ableJ';

const changeToAiParsedResumeAction = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const {success} = await ableJ.changeToAiParsedResume(accessToken);

  if (!success) {
    console.error('AI 포트폴리오로 교체하는데 실패했습니다');
    return;
  }

  revalidatePath('/portfolio');
  redirect('/portfolio', RedirectType.replace);
};

export default changeToAiParsedResumeAction;
