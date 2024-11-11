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
    experienceId: z.number().nullish(),
  }),
);

const updateResumeActivityInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const titles = formData.getAll('title');
  const affiliations = formData.getAll('affiliation');
  const startAts = formData.getAll('startAt');
  const endAts = formData.getAll('endAt');
  const descriptions = formData.getAll('description');
  const experienceIds = formData.getAll('experienceId');

  const activities = titles.map((title, index) => {
    const activity: ExperienceInfo = {
      experienceType: 'ACTIVITY',
      title: (title as string) || null,
      affiliation: (affiliations[index] as string) || null,
      startAt: (startAts[index] as string) || null,
      endAt: (endAts[index] as string) || null,
      description: (descriptions[index] as string) || null,
    };

    if (experienceIds[index]) {
      activity.experienceId = Number(experienceIds[index]);
    }

    return activity;
  });

  const {success, data, error} = scheme.safeParse(activities);

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

  revalidatePath('/portfolio/experience');

  return {
    data,
    success: true,
  };
};

export default updateResumeActivityInfoAction;
