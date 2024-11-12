import CompanyCard from '@/components/common/CompanyCard';
import {Company} from '@/types/ableJ';

import styles from './companyRecruitments.module.scss';

interface CompanyRecruitmentsProps {
  companyInfo: Company;
}

const CompanyRecruitments = ({companyInfo}: CompanyRecruitmentsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <span className={styles['company-name']}>{companyInfo.name}</span>
        <span className={styles['recruitment-count']}>
          의 채용 공고가 총 {companyInfo.recruitments.length}건 있습니다.
        </span>
      </div>
      <div className={styles.recruitment}>
        {companyInfo.recruitments.length > 0 &&
          companyInfo.recruitments.map(recruitment => (
            <CompanyCard key={recruitment.recruitmentId} />
          ))}
      </div>
    </div>
  );
};

export default CompanyRecruitments;
