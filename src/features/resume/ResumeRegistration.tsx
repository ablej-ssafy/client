import Button from '@/components/Button';

import styles from './resumeRegistration.module.scss';

const ResumeRegistration = () => {
  return (
    <div className={styles.container}>
      <h2>PDF 이력서 등록</h2>
      <div className={styles.upload}>
        <Button text="업로드 파일 선택" />
        <p>또는 파일을 이곳으로 드래그합니다</p>
      </div>
    </div>
  );
};

export default ResumeRegistration;
