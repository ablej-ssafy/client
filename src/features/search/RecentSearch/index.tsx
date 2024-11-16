'use client';

import recentKeywordAllDeleteAction from '@/actions/search/recentKeywordAllDeleteAction';
import RecentSearchTag from '@/features/search/RecentSearchTag';
import {RankContent} from '@/types/ableJ';

import styles from './recentSearch.module.scss';

interface RecentSearchProps {
  keywords: RankContent[];
}

const RecentSearch = ({keywords}: RecentSearchProps) => {
  const haneleDeleteAll = async () => {
    await recentKeywordAllDeleteAction();
  };

  return (
    <div className={styles.container}>
      <div className={styles['recent-title']}>
        <span className={styles['recent-text']}>최근 검색어</span>
        <span className={styles['delete-text']} onClick={haneleDeleteAll}>
          전체 삭제
        </span>
      </div>
      <div className={styles['recent-tag']}>
        {keywords.length > 0 ? (
          keywords.map(keyword => (
            <RecentSearchTag key={keyword.rank} keyword={keyword} />
          ))
        ) : (
          <span className={styles['no-keyword']}>최근 검색어가 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default RecentSearch;
