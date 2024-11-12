'use client';

import {useRouter} from 'next/navigation';

import {RankContent} from '@/types/ableJ';

import styles from './popularSearchTag.module.scss';

interface PopularSearchTagProps {
  keyword: RankContent;
}

const PopularSearchTag = ({keyword}: PopularSearchTagProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recruitments?keyword=${keyword.keyword}`);
  };
  return (
    <div className={styles.container}>
      <span className={styles.rank}>{keyword.rank}</span>
      <span className={styles.text} onClick={handleClick}>
        {keyword.keyword}
      </span>
    </div>
  );
};

export default PopularSearchTag;
