'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';
import {EducationInfo} from '@/types/ableJ';

const scheme = z.array(
  z.object({
    name: z.string().nullable(),
    major: z.string().nullable(),
    category: z.string().nullable(),
    grade: z.string().nullable(),
    gradeType: z.string().nullable(),
    description: z.string().nullable(),
    startAt: z.string().nullable(),
    endAt: z.string().nullable(),
    educationId: z.number().nullish(),
  }),
);

const updateResumeEducationInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const names = formData.getAll('name');
  const majors = formData.getAll('major');
  const categories = formData.getAll('category');
  const grades = formData.getAll('grade');
  const gradeTypes = formData.getAll('gradeType');
  const descriptions = formData.getAll('description');
  const startAts = formData.getAll('startAt');
  const endAts = formData.getAll('endAt');
  const educationId = formData.getAll('educationId');

  const educations = names.map((name, index) => {
    const education: EducationInfo = {
      name: (name as string) || null,
      major: (majors[index] as string) || null,
      category: (categories[index] as string) || null,
      grade: (grades[index] as string) || null,
      gradeType: (gradeTypes[index] as string) || null,
      description: (descriptions[index] as string) || null,
      startAt: (startAts[index] as string) || null,
      endAt: (endAts[index] as string) || null,
    };

    if (educationId[index]) {
      education.educationId = Number(educationId[index]);
    }

    return education;
  });

  const {success, data, error} = scheme.safeParse(educations);

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

  const response = await ableJ.updateEducationInfos(
    {educations: data},
    accessToken,
  );

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  revalidatePath('/portfolio/education');

  return {
    error: '',
    success: true,
  };
};

export default updateResumeEducationInfoAction;
