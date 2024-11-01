import httpClient from '@/configs/httpClient';
import {
  Email,
  LoginResponse,
  Name,
  Password,
  RefreshToken,
} from '@/types/ableJ';

export default {
  /**
   * 로그인 요청을 보내는 함수
   * @param email 이메일
   * @param password 비밀번호
   */
  login: async (email: Email, password: Password): Promise<LoginResponse> => {
    return httpClient.post('/api/v1/auth/sign-in', {email, password});
  },
  /**
   * 로그아웃 요청을 보내는 함수
   * @param refreshToken 리프레시 토큰
   */
  logout: async (refreshToken: RefreshToken) => {
    return httpClient.post('/api/v1/auth/sign-out', {refreshToken});
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
  /**
   * 토큰을 저장하는 함수
   * @param accessToken 액세스 토큰
   * @param refreshToken 리프레시 토큰
   */
  setCredentials: async (accessToken: string, refreshToken: string) => {
    return fetch(
      process.env.NEXT_PUBLIC_NEXT_SERVER_URL + '/callback/auth/api',
      {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({accessToken, refreshToken}),
      },
    );
  },
};
