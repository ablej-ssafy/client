import {getCookie} from 'cookies-next';

export default {
  getLoginStatus: () => {
    return !!getCookie('authenticated');
  },
};
