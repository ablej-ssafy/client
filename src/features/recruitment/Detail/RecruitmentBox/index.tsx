import KakaoMap from '@/components/common/KakaoMap';
import RecruitmentContent from '@/features/recruitment/Detail/RecruitmentContent';
import ScrapButton from '@/features/recruitment/Detail/ScrapButton';
import {Company} from '@/types/ableJ';

import styles from './recruitmentBox.module.scss';

interface RecruitmentBoxProps {
  intro: string;
  task: string;
  requirement: string;
  preference?: string;
  benefit: string;
  companyInfo: Company;
}

const RecruitmentBox = ({
  intro,
  task,
  requirement,
  preference,
  benefit,
  companyInfo,
}: RecruitmentBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['recruitment-info']}>
        <RecruitmentContent title="회사 소개" content={intro} />
        <RecruitmentContent title="주요 업무" content={task} />
        <RecruitmentContent title="자격 요건" content={requirement} />
        {preference && (
          <RecruitmentContent title="채용 전형" content={preference} />
        )}
        <RecruitmentContent title="우대 사항" content={benefit} />
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

export default RecruitmentBox;
