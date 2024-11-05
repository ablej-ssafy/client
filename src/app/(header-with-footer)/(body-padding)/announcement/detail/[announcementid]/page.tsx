import AnnouncementBox from '@/features/announcement/Detail/AnnouncementBox';
import AnnouncementCarousel from '@/features/announcement/Detail/AnnouncementCarousel';
import AnnouncementTitle from '@/features/announcement/Detail/AnnouncementTitle';
import AnnouncementService from '@/services/ableJ';
import auth from '@/utils/auth';

const AnnouncementDetailPage = async () => {
  const token = await auth.getAccessToken();

  if (!token) {
    console.log('Access Token이 없습니다.');
    return;
  }

  const {data} = await AnnouncementService.getAnnouncementDetail(1, token);

  return (
    <>
      <AnnouncementCarousel imageArray={data.images} />
      <AnnouncementTitle
        name={data.name}
        category={data.category}
        childCategories={data.childCategories}
        company={data.company}
        hireRound={data.hireRound}
        dueTime={data.dueTime}
        annualTo={data.annualTo}
        annualFrom={data.annualFrom}
      />
      <AnnouncementBox
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

export default AnnouncementDetailPage;
