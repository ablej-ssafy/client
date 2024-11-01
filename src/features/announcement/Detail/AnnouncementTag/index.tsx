import styles from './announcementTag.module.scss';

interface AnnouncementTagProps {
  title: string;
  content: string;
}

const AnnouncementTag = ({title, content}: AnnouncementTagProps) => {
  return (
    <div className={styles.container}>
      <p className={styles['text-title']}>{title}</p>
      <p className={styles['text-content']}>{content}</p>
    </div>
  );
};

export default AnnouncementTag;
