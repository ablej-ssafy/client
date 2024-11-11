import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import EducationInfoDeleteButton from '@/features/portfolio/section/EducationInfoSection/EducationInfoDeleteButton';
import EducationInfoSection from '@/features/portfolio/section/EducationInfoSection/index';
import ableJ from '@/services/ableJ';

const EducationInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getEducationInfo(accessToken);
  const {educations} = response.data;

  return (
    !!educations?.length &&
    educations.map(education => (
      <EducationInfoSection key={education.educationId} education={education}>
        <EducationInfoDeleteButton educationId={education.educationId!} />
      </EducationInfoSection>
    ))
  );
};

export default EducationInfoSectionList;
