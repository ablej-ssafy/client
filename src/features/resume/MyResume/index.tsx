'use client';

import {useEffect, useState} from 'react';

import getResumeListAction from '@/actions/getResumeListAction';
import MyResumeCard from '@/features/resume/MyResumeCard';
import {ResumePDF} from '@/types/ableJ/resume';
import {getTodayDate} from '@/utils/date';

import styles from './myResume.module.scss';

const MyResume = () => {
  const [resumeList, setResumeList] = useState<ResumePDF[]>([]);

  const fetchResumeList = async () => {
    const result = await getResumeListAction();
    if (result) {
      setResumeList(result);
    }
  };

  useEffect(() => {
    fetchResumeList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['card-container-flex']}>
        <h2>김보현님의 이력서</h2>
        <div className={styles['card-container-grid']}>
          <MyResumeCard
            key={0}
            title={'포트폴리오'}
            date={getTodayDate()}
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
