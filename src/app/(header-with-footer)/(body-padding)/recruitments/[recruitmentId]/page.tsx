import {cookies} from 'next/headers';

import Carousel from '@/components/common/Carousel';
import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import recruitmentService from '@/services/ableJ';

interface RecruitmentDetailPageProps {
  params: {
    recruitmentId: string;
  };
}

const RecruitmentDetailPage = async ({params}: RecruitmentDetailPageProps) => {
  const {recruitmentId} = params;

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data} = await recruitmentService.getRecruitmentDetail(
    Number(recruitmentId),
    accessToken,
  );

  return (
    <>
      <Carousel imageArray={data.images} />
      <RecruitmentTitle
        recruitmentId={Number(recruitmentId)}
        name={data.name}
        category={data.category}
        childCategories={data.childCategories}
        company={data.company}
        hireRound={data.hireRound}
        dueTime={data.dueTime}
        annualTo={data.annualTo}
        annualFrom={data.annualFrom}
        thumbnail={data.company.thumbnail}
      />
      <RecruitmentBox
        recruitmentId={Number(recruitmentId)}
        intro={data.intro}
        task={data.task}
        requirement={data.requirement}
        preference={data.preference}
        benefit={data.benefit}
        companyInfo={data.company}
        hireRound={data.hireRound}
      />
    </>
  );
};

export default RecruitmentDetailPage;
