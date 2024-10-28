import CompanyCard from '@/components/common/CompanyCard';

import styles from './announcement.module.scss';

const Announcement = () => {
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

export default Announcement;
