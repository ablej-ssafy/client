'use server';
import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';
import {TechStackInfoForm} from '@/types/ableJ';

const scheme = z.object({
  githubUrl: z.string().nullable(),
  notionUrl: z.string().nullable(),
  techSkills: z.number().array().nullable(),
  techId: z.number().nullish(),
});

const updateResumeTechStackInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const techId = formData.get('techId');
  const githubUrl = formData.get('githubUrl');
  const notionUrl = formData.get('notionUrl');
  const techSkills = formData.getAll('techSkills');

  const techStackForm: TechStackInfoForm = {
    githubUrl: githubUrl ? String(githubUrl) : null,
    notionUrl: notionUrl ? String(notionUrl) : null,
    techSkills: techSkills.map(Number),
  };

  if (techId) {
    techStackForm.techId = Number(techId);
  }

  const {success, data, error} = scheme.safeParse(techStackForm);

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

  const response = await ableJ.updateTechStackInfo(data, accessToken);

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  revalidatePath('/portfolio/project');

  return {
    error: '',
    success: true,
  };
};

export default updateResumeTechStackInfoAction;
