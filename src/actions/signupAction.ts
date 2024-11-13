'use server';

import {redirect, RedirectType} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';

const scheme = z.object({
  email: z.string().email({message: '이메일 형식이 잘못 되었습니다.'}),
  password: z.string().min(8, {message: '비밀번호는 8자 이상이어야 합니다.'}),
  name: z.string(),
  careerYear: z.coerce.number(),
  jobId: z.coerce.number(),
});

const signupAction = async (_prevState: unknown, formData: FormData) => {
  const {success, error, data} = scheme.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
    careerYear: formData.get('careerYear'),
    jobId: formData.get('jobId'),
  });

  if (!success) {
    return {
      email: error?.flatten().fieldErrors.email,
      password: error?.flatten().fieldErrors.password,
      name: error?.flatten().fieldErrors.name,
      careerYear: error?.flatten().fieldErrors.careerYear,
      jobId: error?.flatten().fieldErrors.jobId,
      error: '',
      success: false,
    };
  }

  const response = await ableJ.signUp(data);

  if (!response.success) {
    return {
      error: response.message,
      email: [],
      password: [],
      name: [],
      careerYear: [],
      jobId: [],
      success: true,
    };
  }

  redirect('/signin', RedirectType.replace);
};

export default signupAction;
