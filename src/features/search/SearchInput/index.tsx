'use client';

import {useState} from 'react';
import {IoSearchSharp} from 'react-icons/io5';

import styles from './searchInput.module.scss';

interface SearchInputProps {
  keyword?: string;
}

const SearchInput = ({keyword}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(keyword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="검색어를 입력해주세요"
        value={inputValue}
        onChange={handleChange}
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
