'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ableJ from '@/services/ableJ';

const logoutAction = async () => {
  const cookieStore = cookies();

  console.log('바보');
  const refreshToken = cookieStore.get('refreshToken');
  console.log(refreshToken);

  if (refreshToken) {
    const response = await ableJ.logout(refreshToken as unknown as string);
    console.log(response);
  }

  cookieStore.set('accessToken', '', {
    expires: new Date(0),
    path: '/',
    secure: true,
    httpOnly: true,
  });
  cookieStore.set('refreshToken', '', {
    expires: new Date(0),
    path: '/',
    secure: true,
    httpOnly: true,
  });
  cookieStore.set('authenticated', '', {
    expires: new Date(0),
    path: '/',
    secure: true,
    httpOnly: true,
  });

  redirect('/');
};

export default logoutAction;
