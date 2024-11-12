import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentCarousel from '@/features/recruitment/Detail/RecruitmentCarousel';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import recruitmentService from '@/services/ableJ';

interface RecruitmentDetailPageProps {
  params: {
    recruitmentId: string;
  };
}

export const revalidate = 3600 * 24;

const RecruitmentDetailPage = async ({
  params: {recruitmentId},
}: RecruitmentDetailPageProps) => {
  const {data} = await recruitmentService.getRecruitmentDetail(
    Number(recruitmentId),
  );

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
