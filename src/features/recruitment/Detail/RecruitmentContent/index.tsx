import Tag from '@/components/common/Tag';

import styles from './recruitmentContent.module.scss';

interface RecruitmentContentProps {
  title: string;
  content: string;
}

const RecruitmentContent = ({title, content}: RecruitmentContentProps) => {
  return (
    <div className={styles.container}>
      <Tag title={title} />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default RecruitmentContent;
