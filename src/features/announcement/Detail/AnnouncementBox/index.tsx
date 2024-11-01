import AnnouncementContent from '@/features/announcement/Detail/AnnouncementContent';
import Map from '@/features/announcement/Detail/Map';
import ScrapButton from '@/features/announcement/Detail/ScrapButton';

import styles from './announcementBox.module.scss';

const mockContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const AnnouncementBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles['announcement-info']}>
        <AnnouncementContent title="회사 소개" content={mockContent} />
        <AnnouncementContent title="주요 업무" content={mockContent} />
        <AnnouncementContent title="자격 요건" content={mockContent} />
        <AnnouncementContent title="채용 전형" content={mockContent} />
        <AnnouncementContent title="우대 사항" content={mockContent} />
      </div>
      <div>
        <div className={styles['scrap-map']}>
          <ScrapButton />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBox;
