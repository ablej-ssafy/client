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

const fetchData = async (
  keyword: string | undefined,
  categoryId: number | undefined,
) => {
  const accessToken = await getCookie('accessToken');

  if (keyword) {
    const {data} = await searchService.recruitmentSearch(
      keyword,
      0,
      20,
      accessToken,
    );
    return data;
  }

  if (categoryId) {
    const {data} = await searchService.getCategoryRecruitment(
      categoryId,
      0,
      20,
      accessToken,
    );
    return data;
  }

  throw new Error('keyword와 category 모두 없습니다.');
};

const SearchResult = async ({keyword, categoryId}: SearchResultProps) => {
  const {content: recruitments} = await fetchData(keyword, Number(categoryId));

  return (
    <div className={styles.container}>
      <CategoryBox />
      <div className={styles['search-result']}>
        <SearchInput keyword={keyword} />
        <ResultBox recruitments={recruitments} />
      </div>
    </div>
  );
};

export default SearchResult;
