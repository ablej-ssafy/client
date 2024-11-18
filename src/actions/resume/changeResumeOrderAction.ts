'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';
import {ChangeResumeOrderForm} from '@/types/ableJ';

const changeResumeOrderAction = async (data: ChangeResumeOrderForm) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const {success} = await ableJ.changeResumeOrder(data, accessToken);

  if (!success) {
    console.error('포트폴리오 순서를 업데이트하는데 실패했습니다.');
  }

  revalidatePath('/portfolio');
};

export default changeResumeOrderAction;
