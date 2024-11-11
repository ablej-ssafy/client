'use client';

import {RankContent} from '@/types/ableJ';

import styles from './popularSearchTag.module.scss';

interface PopularSearchTagProps {
  keyword: RankContent;
}

const PopularSearchTag = ({keyword}: PopularSearchTagProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.rank}>{keyword.rank}</span>
      <span className={styles.text}>{keyword.keyword}</span>
    </div>
  );
};

export default PopularSearchTag;
