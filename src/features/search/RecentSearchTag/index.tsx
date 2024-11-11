import {FiX} from 'react-icons/fi';

import {RankContent} from '@/types/ableJ';

import styles from './recentSearchTag.module.scss';

interface RecentSearchTagProps {
  keyword: RankContent;
}

const RecentSearchTag = ({keyword}: RecentSearchTagProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{keyword.keyword}</span>
      <FiX size={15} />
    </div>
  );
};

export default RecentSearchTag;
