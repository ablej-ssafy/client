import {IoSearchSharp} from 'react-icons/io5';

import styles from './searchInput.module.scss';

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="검색어를 입력해주세요" />
      <IoSearchSharp
        className={styles['search-icon']}
        size={20}
        color="#BBBBBB"
      />
    </div>
  );
};

export default SearchInput;
