import {cookies} from 'next/headers';

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
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (keyword) {
    const {data} = await searchService.recruitmentSearch({
      keyword,
      accessToken,
    });
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

  const {data} = await searchService.getAllRecruitment(0, 21, accessToken);
  return data;
};

const SearchResult = async ({keyword, categoryId}: SearchResultProps) => {
  const {content: recruitments} = await fetchData(keyword, Number(categoryId));

  return (
    <div className={styles.container}>
      <CategoryBox categoryId={categoryId} />
      <div className={styles['search-result']}>
        <SearchInput keyword={keyword} />
        <ResultBox recruitments={recruitments} />
      </div>
    </div>
  );
};

export default SearchResult;
