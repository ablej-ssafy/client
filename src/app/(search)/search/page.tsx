'use client';

import {useSearchParams} from 'next/navigation';

import NoSearchText from '@/features/search/NoSearchText';
import SearchResult from '@/features/search/SearchResult';

const SearchPage = () => {
  const query = useSearchParams() as URLSearchParams;
  const keyword = query.get('keyword');

  console.log('keyword', keyword);

  if (keyword) {
    <SearchResult />;
  }
  return <NoSearchText />;
};

export default SearchPage;
