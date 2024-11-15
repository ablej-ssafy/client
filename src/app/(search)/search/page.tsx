'use client';

import NoSearchText from '@/features/search/NoSearchText';
import useFetchRankSearchText from '@/hooks/useFetchRankSearchText';

import styles from './layout.module.scss';

const SearchPage = () => {
  const {ranks, loading} = useFetchRankSearchText();

  return (
    <>
      {loading ? (
        <div className={styles['load-container']}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <NoSearchText
          ranks={ranks.ranks}
          recentKeywords={ranks.recentKeywords}
        />
      )}
    </>
  );
};

export default SearchPage;
