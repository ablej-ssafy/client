import styles from './popularSearchTag.module.scss';

const PopularSearchTag = () => {
  return (
    <div className={styles.container}>
      <span className={styles.rank}>1</span>
      <span className={styles.text}>인기 검색어</span>
    </div>
  );
};

export default PopularSearchTag;
