import debounce from 'lodash/debounce';
import {useCallback, useEffect, useMemo, useState} from 'react';

import searchService from '@/services/ableJ';

const useAutoSearch = (keyword: string) => {
  const [autoSearchText, setAutoSearchText] = useState<string[]>([]);

  const fetchAutoSearch = useCallback(async () => {
    const {data} = await searchService.getAutoSearchKeyword(keyword);
    setAutoSearchText([...data]);
  }, [keyword]);

  const debouncedFetchAutoSearch = useMemo(
    () => debounce(() => fetchAutoSearch(), 500),
    [fetchAutoSearch],
  );

  useEffect(() => {
    if (keyword) {
      debouncedFetchAutoSearch();
    } else {
      setAutoSearchText([]);
    }

    return () => {
      debouncedFetchAutoSearch.cancel();
    };
  }, [debouncedFetchAutoSearch, keyword]);

  return {autoSearchText, refetch: debouncedFetchAutoSearch};
};

export default useAutoSearch;
