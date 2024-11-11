import {cookies} from 'next/headers';

import Carousel from '@/components/common/Carousel';
import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import RecruitmentService from '@/services/ableJ';

const RecruitmentDetailPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data} = await RecruitmentService.getRecruitmentDetail(56, accessToken);

  return (
    <>
      <Carousel imageArray={data.images} />
      <RecruitmentTitle
        name={data.name}
        category={data.category}
        childCategories={data.childCategories}
        company={data.company}
        hireRound={data.hireRound}
        dueTime={data.dueTime}
        annualTo={data.annualTo}
        annualFrom={data.annualFrom}
      />
      <RecruitmentBox
        intro={data.intro}
        task={data.task}
        requirement={data.requirement}
        preference={data.preference}
        benefit={data.benefit}
        companyInfo={data.company}
      />
    </>
  );
};

export default RecruitmentDetailPage;
