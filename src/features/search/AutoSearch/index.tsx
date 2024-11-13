'use client';

import {useEffect} from 'react';
import {IoSearchSharp} from 'react-icons/io5';

import useAutoSearch from '@/hooks/useAutoSearch';

import styles from './autoSearch.module.scss';

interface AutoSearchProps {
  keyword: string;
}

const AutoSearch = ({keyword}: AutoSearchProps) => {
  const {autoSearchText, refetch} = useAutoSearch(keyword);

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  return (
    <div className={styles.container}>
      {autoSearchText.map((text, index) => {
        return (
          <div key={`${text}-${index}`} className={styles['auto-search']}>
            <IoSearchSharp size={16} />
            <span className={styles['auto-text']}>{text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AutoSearch;
