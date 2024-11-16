import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles['load-container']}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
