import {cookies} from 'next/headers';

import MyResumeCard from '@/features/resume/MyResumeCard';
import resumeService from '@/services/ableJ';
import {getTodayDate} from '@/utils/date';

import styles from './myResume.module.scss';

const MyResume = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    console.log('Access Token이 없습니다.');
    return;
  }

  const {data} = await resumeService.getResumeList(token);

  return (
    <div className={styles.container}>
      <div className={styles['card-container-flex']}>
        <h2>김보현님의 이력서</h2>
        <div className={styles['card-container-grid']}>
          <MyResumeCard
            key={0}
            id={0}
            url={''}
            title={'포트폴리오'}
            date={getTodayDate()}
            type="포트폴리오"
          />
          {data
            ? data
                .reverse()
                .map(item => (
                  <MyResumeCard
                    key={item.id}
                    id={item.id}
                    url={item.url}
                    title={item.fileName}
                    date={item.createdAt}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
