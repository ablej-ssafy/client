'use client';

import {useRouter} from 'next/navigation';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IoSearchSharp} from 'react-icons/io5';

import styles from './searchInput.module.scss';

interface SearchInputProps {
  keyword?: string;
}

const SearchInput = ({keyword}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(keyword);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/recruitments?keyword=${inputValue}`);
    }
  };

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
    </div>
  );
};

export default SearchInput;
