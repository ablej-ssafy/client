import {TbReload} from 'react-icons/tb';

import PopularSearchTag from '@/features/search/PopularSearchTag';

import styles from './popularSearch.module.scss';

const PopularSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles['popular-title']}>
        <span className={styles['popular-text']}>인기 검색어</span>
        <span className={styles.time}>17 : 00 기준</span>
        <TbReload size={15} className={styles.reroll} />
      </div>
      <div className={styles['tag-container']}>
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
        <PopularSearchTag />
      </div>
    </div>
  );
};

export default PopularSearch;
