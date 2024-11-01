import styles from './tag.module.scss';

interface TagProps {
  title: string;
}

const Tag = ({title}: TagProps) => {
  return (
    <div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Tag;
