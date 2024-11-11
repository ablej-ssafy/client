import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ActivityInfoSection from '@/features/portfolio/section/ActivityInfoSection/index';
import ExperienceInfoDeleteButton from '@/features/portfolio/section/ExperienceInfoSection/ExperienceInfoDeleteButton';
import ableJ from '@/services/ableJ';

const ActivityInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getExperienceInfo('activity', accessToken);
  const {experiences} = response.data;

  return (
    !!experiences?.length &&
    experiences.map(activity => (
      <ActivityInfoSection key={activity.experienceId} activity={activity}>
        <ExperienceInfoDeleteButton experienceId={activity.experienceId!} />
      </ActivityInfoSection>
    ))
  );
};

export default ActivityInfoSectionList;
