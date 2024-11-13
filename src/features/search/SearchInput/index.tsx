'use client';

import {useRouter} from 'next/navigation';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {IoSearchSharp} from 'react-icons/io5';

import AutoSearch from '@/features/search/AutoSearch';

import styles from './searchInput.module.scss';

interface SearchInputProps {
  keyword?: string;
  setIsText?: (isText: boolean) => void;
}

const SearchInput = ({keyword, setIsText}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(keyword);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && router) {
      router.push(`/recruitments?keyword=${inputValue}`);
    }
  };

  useEffect(() => {
    if (setIsText) {
      if (inputValue?.trim()) {
        setIsText(true);
      } else {
        setIsText(false);
      }
    }
  }, [inputValue, setIsText]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="검색어를 입력해주세요"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IoSearchSharp
        className={styles['search-icon']}
        size={20}
        color="#BBBBBB"
      />
      {inputValue && <AutoSearch keyword={inputValue} />}
    </div>
  );
};

export default SearchInput;
