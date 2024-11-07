import CompanyCard from '@/components/common/CompanyCard';

import styles from './resultBox.module.scss';

const ResultBox = () => {
  return (
    <div className={styles.container}>
      <p className={styles['result-count']}>총 32개의 검색 결과가 있습니다.</p>
      <div className={styles['result-box']}>
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

export default ResultBox;
