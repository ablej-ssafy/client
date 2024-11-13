import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import SkillSection from '@/features/portfolio/section/SkillSection';
import ableJ from '@/services/ableJ';

const SkillPage = async () => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const {data} = await ableJ.getTechStackInfo(accessToken);

  return <SkillSection techSkill={data} />;
};

export default SkillPage;
