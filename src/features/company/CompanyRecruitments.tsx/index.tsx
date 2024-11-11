import CompanyCard from '@/components/common/CompanyCard';

import styles from './companyRecruitments.module.scss';

const CompanyRecruitments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <span className={styles['company-name']}>미리디</span>
        <span className={styles['recruitment-count']}>
          의 채용 공고가 총 14건 있습니다.
        </span>
      </div>
      <div className={styles.recruitment}>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
};

export default CompanyRecruitments;
