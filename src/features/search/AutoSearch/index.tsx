'use client';

import Link from 'next/link';
import {IoSearchSharp} from 'react-icons/io5';

import useAutoSearch from '@/hooks/useAutoSearch';

import styles from './autoSearch.module.scss';

interface AutoSearchProps {
  keyword: string;
}

const AutoSearch = ({keyword}: AutoSearchProps) => {
  const {autoSearchText} = useAutoSearch(keyword);

  return (
    <div className={styles.container}>
      {autoSearchText.map((text, index) => {
        return (
          <Link
            key={`${text}-${index}`}
            className={styles['auto-search']}
            href={{
              pathname: '/recruitments',
              query: {keyword: text},
            }}
          >
            <IoSearchSharp size={16} />
            <span className={styles['auto-text']}>{text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default AutoSearch;
