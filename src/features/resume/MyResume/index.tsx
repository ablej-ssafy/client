import MyResumeCard from './../MyResumeCard';
import styles from './myResume.module.scss';

const MyResume = () => {
  return (
    <div className={styles.container}>
      <div className={styles['card-container-flex']}>
        <h2>김보현님의 이력서</h2>
        <div className={styles['card-container-grid']}>
          <MyResumeCard />
          <MyResumeCard />
          <MyResumeCard />
          <MyResumeCard />
          <MyResumeCard />
        </div>
      </div>
    </div>
  );
};

export default MyResume;
