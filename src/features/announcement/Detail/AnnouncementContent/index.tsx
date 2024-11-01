import Tag from '@/components/common/Tag';

import styles from './announcementContent.module.scss';

interface AnnouncementContentProps {
  title: string;
  content: string;
}

const AnnouncementContent = ({title, content}: AnnouncementContentProps) => {
  return (
    <div className={styles.container}>
      <Tag title={title} />
      <span className={styles.content}>{content}</span>
    </div>
  );
};

export default AnnouncementContent;
