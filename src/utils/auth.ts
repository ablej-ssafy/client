import {getCookie} from 'cookies-next';
import {cookies} from 'next/headers';

export default {
  getLoginStatus: () => {
    return !!getCookie('authenticated', {cookies});
  },

  getAccessToken: () => {
    return getCookie('accessToken', {cookies});
  },
};
