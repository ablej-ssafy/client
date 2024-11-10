'use server';

import {revalidatePath} from 'next/cache';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';

import ableJ from '@/services/ableJ';

const scheme = z.array(
  z.object({
    name: z.string().nullable(),
    organization: z.string().nullable(),
    credential: z.string().nullable(),
    acquisitionAt: z.string().nullable(),
    grade: z.string().nullable(),
    certificationType: z.enum(['LANGUAGE', 'QUALIFICATION']),
    certificationId: z.number().nullish(),
  }),
);

const updateResumeLanguageProficiencyInfoAction = async (
  _prevState: unknown,
  formData: FormData,
) => {
  const names = formData.getAll('name');
  const organizations = formData.getAll('organization');
  const credentials = formData.getAll('credential');
  const acquisitionAts = formData.getAll('acquisitionAt');
  const grades = formData.getAll('grade');
  const certificationTypes = formData.getAll('certificationType');
  const certificationIds = formData.getAll('certificationId');

  const certifications = names.map((name, index) => {
    return {
      name: (name as string) || null,
      organization: (organizations[index] as string) || null,
      credential: (credentials[index] as string) || null,
      acquisitionAt: (acquisitionAts[index] as string) || null,
      grade: (grades[index] as string) || null,
      certificationType: certificationTypes[index] as
        | 'LANGUAGE'
        | 'QUALIFICATION',
      certificationId: certificationIds[index]
        ? Number(certificationIds[index])
        : null,
    };
  });

  const {success, data, error} = scheme.safeParse(certifications);

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

  const response = await ableJ.updateCertificationInfo(
    {certifications: data},
    accessToken,
  );

  if (!response.success) {
    return {
      error: response.message,
      success: false,
    };
  }

  revalidatePath('/portfolio/language');

  return {
    data,
    success: true,
  };
};

export default updateResumeLanguageProficiencyInfoAction;
