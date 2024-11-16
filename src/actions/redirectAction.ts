'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import {AUTH_REDIRECT_KEY} from '@/constants/cookie';

export async function redirectCookie(formData: FormData) {
  const redirectUrlRaw = formData.get('redirectUrl');

  if (typeof redirectUrlRaw !== 'string') {
    console.error('잘못된 요청입니다.');
    return;
  }

  const redirectUrl = redirectUrlRaw;

  cookies().set(AUTH_REDIRECT_KEY, redirectUrl, {
    maxAge: 60 * 5,
  });
  redirect('/(.)signin');
}

export default redirectCookie;
