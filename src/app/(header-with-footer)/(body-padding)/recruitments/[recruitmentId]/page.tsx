import Carousel from '@/components/common/Carousel';
import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import {RecruitmentDetailResponse} from '@/types/ableJ';

interface RecruitmentDetailPageProps {
  params: {
    recruitmentId: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const revalidate = 3600 * 24; // 1 days
// export const dynamic = 'force-static';

async function getRecruitment(recruitmentId: string) {
  const response = await fetch(
    `${BASE_URL}/api/v1/recruitments/${recruitmentId}`,
  );
  const {data}: RecruitmentDetailResponse = await response.json();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: {recruitmentId: string};
}) {
  const recruitment = await getRecruitment(params.recruitmentId);
  return {
    title: recruitment.name,
    description: recruitment.intro,
  };
}

const RecruitmentDetailPage = async ({
  params: {recruitmentId},
}: RecruitmentDetailPageProps) => {
  const data = await getRecruitment(recruitmentId);
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
