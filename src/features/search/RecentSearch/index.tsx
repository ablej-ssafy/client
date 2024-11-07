import RecentSearchTag from '@/features/search/RecentSearchTag';

import styles from './recentSearch.module.scss';

const RecentSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles['recent-title']}>
        <span className={styles['recent-text']}>최근 검색어</span>
        <span className={styles['delete-text']}>전체 삭제</span>
      </div>
      <div className={styles['recent-tag']}>
        <RecentSearchTag />
        <RecentSearchTag />
        <RecentSearchTag />
        <RecentSearchTag />
        <RecentSearchTag />
      </div>
    </div>
  );
};

export default RecentSearch;
