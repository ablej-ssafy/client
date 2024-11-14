'use client';

import {useRouter} from 'next/navigation';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {IoSearchSharp} from 'react-icons/io5';

import AutoSearch from '@/features/search/AutoSearch';

import styles from './searchInput.module.scss';

interface SearchInputProps {
  keyword?: string;
}

const SearchInput = ({keyword}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(keyword);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (keyword !== undefined) {
      setInputValue(keyword);
    }

    return () => {
      setInputValue('');
    };
  }, [keyword]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(inputValue);
    if (e.key === 'Enter' && router) {
      router.push(`/recruitments?keyword=${inputValue}`);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="검색어를 입력해주세요"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <IoSearchSharp
        className={styles['search-icon']}
        size={20}
        color="#BBBBBB"
      />
      {inputValue && isFocused && <AutoSearch keyword={inputValue} />}
    </div>
  );
};

export default SearchInput;
