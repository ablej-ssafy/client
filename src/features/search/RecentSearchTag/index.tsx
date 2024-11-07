import {FiX} from 'react-icons/fi';

import styles from './recentSearchTag.module.scss';

const RecentSearchTag = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>최근 검색어</span>
      <FiX size={15} />
    </div>
  );
};

export default RecentSearchTag;
