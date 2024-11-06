import Tag from '@/components/common/Tag';

import styles from './recruitmentContent.module.scss';

interface RecruitmentContentProps {
  title: string;
  content: string;
}

const RecruitmentContent = ({title, content}: RecruitmentContentProps) => {
  const formattedContent = content.replace(/\n/g, '<br />');
  return (
    <div className={styles.container}>
      <Tag title={title} />
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{__html: formattedContent}}
      ></p>
    </div>
  );
};

export default RecruitmentContent;
