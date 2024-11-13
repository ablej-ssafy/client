'use client';

import {usePathname} from 'next/navigation';

import RecruitmentCard from '@/components/common/RecruitmentCard';
import useFetchRecruitments from '@/hooks/useFetchRecruitments';

import styles from './recommend.module.scss';

const Recommend = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const resumeId = pathSegments[pathSegments.length - 1];

  const {recruitments, loading} = useFetchRecruitments({resumeId});

  return (
    <>
      {loading ? (
        <div className={styles['load-container']}>
          <div className={styles.loader}></div>
          <p>AI 분석 결과를 가져오는 중입니다.</p>
        </div>
      ) : (
        <div className={styles.container}>
          {!!recruitments &&
            recruitments.map(recruitment => (
              <RecruitmentCard key={recruitment.id} item={recruitment} />
            ))}
        </div>
      )}
    </>
  );
};

export default Recommend;
