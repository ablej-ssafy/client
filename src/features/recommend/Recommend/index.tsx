import CompanyCard from '@/components/common/CompanyCard';

import styles from './recommend.module.scss';

const Recommend = () => {
  return (
    <div className={styles.container}>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
};

export default Recommend;
