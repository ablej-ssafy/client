'use client';

import {usePathname} from 'next/navigation';

import CompanyCard from '@/components/common/CompanyCard';
import useFetchRecruitments from '@/hooks/useFetchRecruitments';

import styles from './recommend.module.scss';

const Recommend = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const resumeId = pathSegments[pathSegments.length - 1];

  const recruitments = useFetchRecruitments({resumeId});

  return (
    <div className={styles.container}>
      {!!recruitments &&
        recruitments.map(recruitment => (
          <CompanyCard key={recruitment.id} item={recruitment} />
        ))}
    </div>
  );
};

export default Recommend;
