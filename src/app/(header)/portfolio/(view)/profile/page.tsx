import {cookies} from 'next/headers';

import BasicInfoSection from '@/features/portfolio/section/BasicInfoSection';
import ableJ from '@/services/ableJ';

const ProfilePage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const response = await ableJ.getResumeBasicInfo(accessToken!);
  const basicInfo = response.data;

  return <BasicInfoSection basicInfo={basicInfo} />;
};

export default ProfilePage;
