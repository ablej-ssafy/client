import {getCookie} from 'cookies-next';
import {cookies} from 'next/headers';

export default {
  getLoginStatus: () => {
    return getCookie('authenticated', {cookies}) === 'true';
  },

  getAccessToken: () => {
    return getCookie('accessToken', {cookies});
  },
};
