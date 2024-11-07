import PopularSearch from '@/features/search/PopularSearch';
import RecentSearch from '@/features/search/RecentSearch';
import SearchInput from '@/features/search/SearchInput';

import styles from './noSearchText.module.scss';

const NoSearchText = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <SearchInput />
        <RecentSearch />
        <PopularSearch />
      </div>
    </div>
  );
};

export default NoSearchText;
