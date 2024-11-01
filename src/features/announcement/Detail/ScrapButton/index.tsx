import {LuBookmark} from 'react-icons/lu';

import styles from './scrapButton.module.scss';

const ScrapButton = () => {
  return (
    <div className={styles.container}>
      <span className={styles.scrap}>스크랩</span>
      <LuBookmark size={25} color="white" />
    </div>
  );
};

export default ScrapButton;
