import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentCarousel from '@/features/recruitment/Detail/RecruitmentCarousel';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import RecruitmentService from '@/services/ableJ';
import auth from '@/utils/auth';

const RecruitmentDetailPage = async () => {
  const token = await auth.getAccessToken();

  if (!token) {
    console.log('Access Token이 없습니다.');
    return;
  }

  const {data} = await RecruitmentService.getRecruitmentDetail(1, token);

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
