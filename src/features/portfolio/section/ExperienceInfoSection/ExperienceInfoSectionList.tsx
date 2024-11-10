import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ExperienceInfoSection from '@/features/portfolio/section/ExperienceInfoSection';
import ExperienceInfoDeleteButton from '@/features/portfolio/section/ExperienceInfoSection/ExperienceInfoDeleteButton';
import ableJ from '@/services/ableJ';

const ExperienceInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getExperienceInfo('company', accessToken);
  const {experiences} = response.data;

  console.log('server response:', experiences);

  return (
    !!experiences?.length &&
    experiences.map(experience => (
      <ExperienceInfoSection
        key={experience.experienceId}
        experience={experience}
      >
        <ExperienceInfoDeleteButton experienceId={experience.experienceId!} />
      </ExperienceInfoSection>
    ))
  );
};

export default ExperienceInfoSectionList;
