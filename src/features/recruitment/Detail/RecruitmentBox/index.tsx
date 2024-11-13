import KakaoMap from '@/components/common/KakaoMap';
import ScrapButton from '@/components/common/ScrapButton';
import RecruitmentContent from '@/features/recruitment/Detail/RecruitmentContent';
import {Company} from '@/types/ableJ';

import styles from './recruitmentBox.module.scss';

interface RecruitmentBoxProps {
  recruitmentId: number;
  intro: string;
  task: string;
  requirement: string;
  preference?: string;
  benefit: string;
  companyInfo: Company;
  hireRound?: string;
}

const RecruitmentBox = ({
  recruitmentId,
  intro,
  task,
  requirement,
  preference,
  benefit,
  companyInfo,
  hireRound,
}: RecruitmentBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['recruitment-info']}>
        <RecruitmentContent title="회사 소개" content={intro} />
        <RecruitmentContent title="주요 업무" content={task} />
        <RecruitmentContent title="자격 요건" content={requirement} />
        <RecruitmentContent title="복지 및 혜택" content={benefit} />
        {preference && (
          <RecruitmentContent title="우대 사항" content={preference} />
        )}
        {hireRound && (
          <RecruitmentContent title="채용 전형" content={hireRound} />
        )}
      </div>
      <div>
        <div className={styles['scrap-map']}>
          <div className={styles['scrap-button']}>
            <ScrapButton recruitmentId={recruitmentId} />
          </div>
          <KakaoMap companyInfo={companyInfo} />
        </div>
      </div>
    </div>
  );
};

export default RecruitmentBox;
