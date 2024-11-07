import CategoryBox from '@/features/search/CategoryBox';
import ResultBox from '@/features/search/ResultBox';
import SearchInput from '@/features/search/SearchInput';

import styles from './searchResult.module.scss';

const SearchResult = () => {
  return (
    <div className={styles.container}>
      <CategoryBox />
      <div className={styles['search-result']}>
        <SearchInput />
        <ResultBox />
      </div>
    </div>
  );
};

export default SearchResult;
