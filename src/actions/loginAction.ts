'use server';

import {cookies} from 'next/headers';
import {z} from 'zod';

import ableJ from '@/services/ableJ';

const scheme = z.object({
  email: z.string().email({message: '이메일 형식이 잘못 되었습니다.'}),
  password: z.string().min(8, {message: '비밀번호는 8자 이상이어야 합니다.'}),
});

const cookieOptions = {
  secure: true,
  httpOnly: true,
  path: '/',
};

const loginAction = async (_prevState: unknown, formData: FormData) => {
  const {success, error, data} = scheme.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!success) {
    return {
      email: error?.flatten().fieldErrors.email,
      password: error?.flatten().fieldErrors.password,
      error: '',
      success: false,
    };
  }

  const response = await ableJ.login(data?.email, data?.password);

  if (!response.success) {
    return {
      error: '로그인에 실패하였습니다.',
      email: [],
      password: [],
      success: false,
    };
  }

  const {accessToken, refreshToken} = response.data;
  const cookieStore = cookies();

  cookieStore.set('accessToken', accessToken, cookieOptions);
  cookieStore.set('refreshToken', refreshToken, cookieOptions);
  cookieStore.set('authenticated', 'true', {
    ...cookieOptions,
    httpOnly: false,
  });

  return {
    error: '',
    email: [],
    password: [],
    success: true,
  };
};

export default loginAction;
