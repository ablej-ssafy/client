import {getCookie} from 'cookies-next';
import {cookies} from 'next/headers';

export default {
  getLoginStatus: () => {
    return getCookie('authenticated', {cookies}) === 'true';
  },

  getAccessToken: async () => {
    const token = getCookie('accessToken', {cookies});

    if (!token) {
      console.log('Access Token이 없습니다.');
      return;
    }

    return token;
  },
};
