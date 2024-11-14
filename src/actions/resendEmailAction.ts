'use server';
import {cookies} from 'next/headers';
import {redirect, RedirectType} from 'next/navigation';

import ableJ from '@/services/ableJ';

const resendEmailAction = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) redirect('/signin', RedirectType.replace);

  const response = await ableJ.resendVerificationEmail(accessToken as string);

  if (!response.success) {
    return {
      success: false,
      error: response.message,
    };
  }

  return {
    success: true,
    error: '',
  };
};

export default resendEmailAction;
