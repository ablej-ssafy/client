'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';

const scheme = z.object({
  email: z.string().email({message: '이메일 형식이 잘못 되었습니다.'}),
  password: z.string().min(8, {message: '비밀번호는 8자 이상이어야 합니다.'}),
});

const loginAction = async (_prevState: unknown, formData: FormData) => {
  const {success, error, data} = scheme.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  console.log(error?.flatten().fieldErrors.email);

  if (!success) {
    return {
      email: error?.flatten().fieldErrors.email,
      password: error?.flatten().fieldErrors.password,
      error: '',
    };
  }

  const response = await ableJ.login(data?.email, data?.password);

  console.log(response);

  if (!response.success) {
    return {
      error: '로그인에 실패하였습니다.',
      email: [],
      password: [],
    };
  }

  const {accessToken, refreshToken} = response.data;
  const cookieStore = cookies();

  cookieStore.set('accessToken', accessToken, {
    expires: new Date(1),
    secure: true,
    httpOnly: true,
    path: '/',
  });
  cookieStore.set('refreshToken', refreshToken, {
    expires: new Date(1),
    secure: true,
    httpOnly: true,
    path: '/',
  });
  cookieStore.set('authenticated', 'true', {secure: true, path: '/'});
  redirect('/');
};

export default loginAction;
