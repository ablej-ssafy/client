'use client';

import {useState} from 'react';

import PopularSearch from '@/features/search/PopularSearch';
import RecentSearch from '@/features/search/RecentSearch';
import SearchInput from '@/features/search/SearchInput';
import {RankContent} from '@/types/ableJ';

import styles from './noSearchText.module.scss';

interface NoSearchTextProps {
  ranks: RankContent[];
  recentKeywords: RankContent[];
}

const NoSearchText = ({ranks, recentKeywords}: NoSearchTextProps) => {
  const [isText, setIsText] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <SearchInput setIsText={setIsText} />
      {!isText && (
        <>
          <RecentSearch keywords={recentKeywords} />
          <PopularSearch keywords={ranks} />
        </>
      )}
    </div>
  );
};

export default NoSearchText;
