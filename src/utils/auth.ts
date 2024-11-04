import {getCookie} from 'cookies-next';
import {cookies} from 'next/headers';

export default {
  getLoginStatus: () => {
    return getCookie('authenticated', {cookies}) === 'true';
  },

  getCookie: () => {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
      console.log('Access Token이 없습니다.');
      return;
    }

    return token;
  },
};
