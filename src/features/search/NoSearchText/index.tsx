import {cookies} from 'next/headers';

import PopularSearch from '@/features/search/PopularSearch';
import RecentSearch from '@/features/search/RecentSearch';
import SearchInput from '@/features/search/SearchInput';
import searchService from '@/services/ableJ';

import styles from './noSearchText.module.scss';

const fetchKeyword = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  console.log('accessToken', accessToken);

  const {data} = await searchService.getRankSearch(accessToken);

  return data;
};

const NoSearchText = async () => {
  const {ranks, recentKeywords} = await fetchKeyword();

  console.log('ranks', ranks);
  console.log('recentKeywords', recentKeywords);

  return (
    <div className={styles.container}>
      <SearchInput />
      <RecentSearch keywords={recentKeywords} />
      <PopularSearch keywords={ranks} />
    </div>
  );
};

export default NoSearchText;
