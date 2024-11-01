import styles from './announcementTag.module.scss';

interface AnnouncementTagProps {
  title: string;
  content: string;
}

const AnnouncementTag = ({title, content}: AnnouncementTagProps) => {
  return (
    <div className={styles['display-row']}>
      <p className={styles['text-bold-14-gray']}>{title}</p>
      <p className={styles['text-bold-14-black']}>{content}</p>
    </div>
  );
};

export default AnnouncementTag;
