import styles from './loading.module.scss';

interface LoadingProps {
  text?: string;
}

const Loading = ({text}: LoadingProps) => {
  return (
    <div className={styles['load-container']}>
      <div className={styles.loader}></div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Loading;
