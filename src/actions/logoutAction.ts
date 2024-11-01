'use server';

import {cookies} from 'next/headers';
import {redirect, RedirectType} from 'next/navigation';

import ableJ from '@/services/ableJ';

const logoutAction = async () => {
  const cookieStore = cookies();

  const refreshToken = cookieStore.get('refreshToken');

  if (refreshToken) {
    const response = await ableJ.logout(refreshToken as unknown as string);
    console.log(response);
  }

  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
  cookieStore.delete('authenticated');

  redirect('/', RedirectType.replace);
};

export default logoutAction;
