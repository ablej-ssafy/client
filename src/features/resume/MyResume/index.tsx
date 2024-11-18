import {cookies} from 'next/headers';

import MyResumeCard from '@/features/resume/MyResumeCard';
import ableJ from '@/services/ableJ';
import {getTodayDate} from '@/utils/date';

import styles from './myResume.module.scss';

const MyResume = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log('Access Token이 없습니다.');
    return;
  }

  const {data: resumeList} = await ableJ.getResumeList(accessToken);
  const {data: profile} = await ableJ.getProfile(accessToken);

  return (
    <div className={styles.container}>
      <div className={styles['card-container-flex']}>
        <h2>{profile.name}님의 이력서</h2>
        <div className={styles['card-container-grid']}>
          <MyResumeCard
            key={0}
            id={0}
            url=""
            title="포트폴리오"
            date={getTodayDate()}
            type="포트폴리오"
          />
          {!!resumeList &&
            resumeList
              .reverse()
              .map(resume => (
                <MyResumeCard
                  key={resume.id}
                  id={resume.id}
                  url={resume.url}
                  title={resume.fileName}
                  date={resume.createdAt}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
