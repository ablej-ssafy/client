import {getCookie} from 'cookies-next';

import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentCarousel from '@/features/recruitment/Detail/RecruitmentCarousel';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import RecruitmentService from '@/services/ableJ';

const RecruitmentDetailPage = async () => {
  const accessToken = await getCookie('accessToken');

  const {data} = await RecruitmentService.getRecruitmentDetail(56, accessToken);

  return (
    <>
      <RecruitmentCarousel imageArray={data.images} />
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
