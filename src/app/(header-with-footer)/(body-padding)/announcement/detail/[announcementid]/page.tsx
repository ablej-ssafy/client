import AnnouncementBox from '@/features/announcement/Detail/AnnouncementBox';
import AnnouncementCarousel from '@/features/announcement/Detail/AnnouncementCarousel';
import AnnouncementTitle from '@/features/announcement/Detail/AnnouncementTitle';

const AnnouncementDetailPage = () => {
  return (
    <>
      <AnnouncementCarousel />
      <AnnouncementTitle />
      <AnnouncementBox />
    </>
  );
};

export default AnnouncementDetailPage;
