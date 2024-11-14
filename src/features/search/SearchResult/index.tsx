import {cookies} from 'next/headers';

import CategoryBox from '@/features/search/CategoryBox';
import ResultBox from '@/features/search/ResultBox';
import SearchInput from '@/features/search/SearchInput';
import searchService from '@/services/ableJ';

import styles from './searchResult.module.scss';

interface SearchResultProps {
  keyword?: string;
  categoryId?: string;
}

const fetchData = async (keyword?: string, categoryId?: number) => {
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
    const {data} = await searchService.getCategoryRecruitment({
      categoryId: +categoryId,
      accessToken,
    });
    return data;
  }

  const {data} = await searchService.getAllRecruitment({accessToken});
  return data;
};

const SearchResult = async ({keyword, categoryId}: SearchResultProps) => {
  const {content: recruitments} = await fetchData(keyword, Number(categoryId));

  return (
    <div className={styles.container}>
      <CategoryBox categoryId={categoryId} />
      <div className={styles['search-result']}>
        <SearchInput keyword={keyword} />
        <ResultBox
          initialRecruitments={recruitments}
          keyword={keyword}
          categoryId={categoryId}
        />
      </div>
    </div>
  );
};

export default SearchResult;
