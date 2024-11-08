import {getCookie} from 'cookies-next';

import CategoryBox from '@/features/search/CategoryBox';
import ResultBox from '@/features/search/ResultBox';
import SearchInput from '@/features/search/SearchInput';
import searchService from '@/services/ableJ';

import styles from './searchResult.module.scss';

interface SearchResultProps {
  keyword: string | undefined;
  categoryId: string | undefined;
}

const fetchData = async (keyword: string) => {
  const accessToken = await getCookie('accessToken');
  const {data} = await searchService.recruitmentSearch(
    keyword,
    0,
    20,
    accessToken,
  );

  return data;
};

const SearchResult = async ({keyword, categoryId}: SearchResultProps) => {
  const {content: recruitments} = await fetchData((keyword = 'front'));
  console.log('recruitments', recruitments);
  // if (keyword) {
  //   const {content: recruitments} = await fetchData(keyword);
  // } else if (categoryId) {
  //   // 여기서 카테고리 아이디 기반으로 검색
  // }
  return (
    <div className={styles.container}>
      <CategoryBox />
      <div className={styles['search-result']}>
        <SearchInput keyword={keyword || categoryId} />
        <ResultBox recruitments={recruitments} />
      </div>
    </div>
  );
};

export default SearchResult;
