import Tag from '@/components/common/Tag';

import styles from './announcementContent.module.scss';

interface AnnouncementContentProps {
  title: string;
  content: string;
}

const AnnouncementContent = ({title, content}: AnnouncementContentProps) => {
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

export default AnnouncementContent;
