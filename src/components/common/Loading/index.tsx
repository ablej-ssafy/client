import styles from './loading.module.scss';

interface LoadingProps {
  text?: string;
  height?: number;
}

const Loading = ({text, height}: LoadingProps) => {
  return (
    <div className={styles['load-container']} style={{height}}>
      <div className={styles.loader}></div>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Loading;
