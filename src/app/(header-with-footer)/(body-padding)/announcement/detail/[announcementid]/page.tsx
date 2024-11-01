import AnnouncementBox from '@/features/announcement/Detail/AnnouncementBox';
import AnnouncementImage from '@/features/announcement/Detail/AnnouncementImage';
import AnnouncementTitle from '@/features/announcement/Detail/AnnouncementTitle';

const AnnouncementDetailPage = () => {
  return (
    <div>
      <AnnouncementImage />
      <AnnouncementTitle />
      <AnnouncementBox />
    </div>
  );
};

export default AnnouncementDetailPage;
