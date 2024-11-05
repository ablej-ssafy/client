import AnnouncementContent from '@/features/announcement/Detail/AnnouncementContent';
import KakaoMap from '@/features/announcement/Detail/KakaoMap';
import ScrapButton from '@/features/announcement/Detail/ScrapButton';
import {Company} from '@/types/ableJ';

import styles from './announcementBox.module.scss';

interface AnnouncementBoxProps {
  intro: string;
  task: string;
  requirement: string;
  preference?: string;
  benefit: string;
  companyInfo: Company;
}

const AnnouncementBox = ({
  intro,
  task,
  requirement,
  preference,
  benefit,
  companyInfo,
}: AnnouncementBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['announcement-info']}>
        <AnnouncementContent title="회사 소개" content={intro} />
        <AnnouncementContent title="주요 업무" content={task} />
        <AnnouncementContent title="자격 요건" content={requirement} />
        {preference && (
          <AnnouncementContent title="채용 전형" content={preference} />
        )}
        <AnnouncementContent title="우대 사항" content={benefit} />
      </div>
      <div>
        <div className={styles['scrap-map']}>
          <div className={styles['scrap-button']}>
            <ScrapButton />
          </div>
          <KakaoMap companyInfo={companyInfo} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBox;
