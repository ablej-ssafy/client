'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';

const scheme = z.object({
  job: z.string().nullable(),
  profile: z.string().nullable(),
  title: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  birth: z.string().nullable(),
  phone: z.string().nullable(),
  introduce: z.string().nullable(),
  portfolioUrl: z.string().nullable(),
});

const updateResumeBasicInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const {success, data, error} = scheme.safeParse({
    job: formData.get('job'),
    profile: formData.get('profile'),
    title: formData.get('title'),
    name: formData.get('name'),
    email: formData.get('email'),
    birth: formData.get('birth'),
    phone: formData.get('phone'),
    introduce: formData.get('introduce'),
    portfolioUrl: formData.get('portfolioUrl'),
  });

  if (!success) {
    console.error(error);
    return {
      error: '입력값이 잘못 되었습니다.',
      success: false,
    };
  }

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.updateResumeBasicInfo(data, accessToken);

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  return {
    error: '',
    success: true,
  };
};

export default updateResumeBasicInfoAction;
