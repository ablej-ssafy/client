'use client';

import MyResumeCard from '@/features/resume/MyResumeCard';
import useFetchResumeList from '@/hooks/useFetchResumeList';

import styles from './myResume.module.scss';

const MyResume = () => {
  const resumeList = useFetchResumeList();

  return (
    <div className={styles.container}>
      <div className={styles['card-container-flex']}>
        <h2>김보현님의 이력서</h2>
        <div className={styles['card-container-grid']}>
          <MyResumeCard
            key={0}
            title={'포트폴리오'}
            date={'2024.01.02'}
            type="포트폴리오"
          />
          {resumeList.map(item => (
            <MyResumeCard
              key={item.id}
              title={item.fileName}
              date={item.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
