'use server';
import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';
import {ExperienceInfo} from '@/types/ableJ';

const scheme = z.array(
  z.object({
    experienceType: z.enum(['COMPANY', 'PROJECT', 'ACTIVITY']),
    title: z.string().nullable(),
    affiliation: z.string().nullable(),
    startAt: z.string().nullable(),
    endAt: z.string().nullable(),
    description: z.string().nullable(),
    referenceUrl: z.string().nullable(),
    experienceId: z.number().nullish(),
  }),
);

const updateResumeProjectInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const titles = formData.getAll('title');
  const affiliations = formData.getAll('affiliation');
  const descriptions = formData.getAll('description');
  const startAts = formData.getAll('startAt');
  const endAts = formData.getAll('endAt');
  const referenceUrls = formData.getAll('referenceUrl');
  const experienceIds = formData.getAll('experienceId');

  const projects = titles.map((title, index) => {
    const project: ExperienceInfo = {
      experienceType: 'PROJECT',
      title: title as string,
      affiliation: affiliations[index] as string,
      description: descriptions[index] as string,
      startAt: startAts[index] as string,
      endAt: endAts[index] as string,
      referenceUrl: referenceUrls[index] as string,
    };

    if (experienceIds[index]) {
      project.experienceId = Number(experienceIds[index]);
    }

    return project;
  });

  const {success, data, error} = scheme.safeParse(projects);

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

  const response = await ableJ.updateExperienceInfo(
    {experiences: data},
    accessToken,
  );

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  revalidatePath('/portfolio/project');

  return {
    data,
    success: true,
  };
};

export default updateResumeProjectInfoAction;
