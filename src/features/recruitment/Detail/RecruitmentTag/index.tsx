import styles from './recruitmentTag.module.scss';

interface RecruitmentTagProps {
  title: string;
  content?: string;
}

const RecruitmentTag = ({title, content}: RecruitmentTagProps) => {
  return (
    <div className={styles.container}>
      <p className={styles['text-title']}>{title}</p>
      <p className={styles['text-content']}>{content}</p>
    </div>
  );
};

export default RecruitmentTag;
