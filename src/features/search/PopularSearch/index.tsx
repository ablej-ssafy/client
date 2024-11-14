'use client';

import {useRouter} from 'next/navigation';
import {TbReload} from 'react-icons/tb';

import PopularSearchTag from '@/features/search/PopularSearchTag';
import {RankContent} from '@/types/ableJ';

import styles from './popularSearch.module.scss';

interface PopularSearchProps {
  keywords: RankContent[];
}

const PopularSearch = ({keywords}: PopularSearchProps) => {
  const router = useRouter();

  const handleReload = () => {
    router.refresh();
  };

  const nowHour = new Date().getHours();

  return (
    <div className={styles.container}>
      <div className={styles['popular-title']}>
        <span className={styles['popular-text']}>인기 검색어</span>
        <span className={styles.time}>{nowHour} : 00 기준</span>
        <TbReload size={15} className={styles.reroll} onClick={handleReload} />
      </div>
      <div className={styles['tag-container']}>
        {keywords.length > 0 ? (
          keywords.map(keyword => (
            <PopularSearchTag key={keyword.rank} keyword={keyword} />
          ))
        ) : (
          <span className={styles['no-keyword']}>검색 순위가 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default PopularSearch;
