import styles from './tag.module.scss';

interface TagProps {
  title: string;
}

const Tag = ({title}: TagProps) => {
  return <span className={styles.title}>{title}</span>;
};

export default Tag;
