import httpClient from '@/configs/httpClient';
import {Email, Name, Password} from '@/types/ableJ';

export default {
  /**
   * 로그인 요청을 보내는 함수
   * @param email 이메일
   * @param password 비밀번호
   */
  login: async (email: Email, password: Password) => {
    return httpClient.post('/api/v1/auth/sign-in', {email, password});
  },
  /**
   * 회원가입 요청을 보내는 함수
   * @param email 이메일
   * @param password 비밀번호
   * @param name 이름
   */
  signUp: async (email: Email, password: Password, name: Name) => {
    return httpClient.post('/api/v1/auth/sign-in', {email, password, name});
  },
};
