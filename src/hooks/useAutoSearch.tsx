import debounce from 'lodash/debounce';
import {useCallback, useEffect, useMemo, useState} from 'react';

import ableJ from '@/services/ableJ';

const useAutoSearch = (keyword: string) => {
  const [autoSearchText, setAutoSearchText] = useState<string[]>([]);

  const fetchAutoSearch = useCallback(async () => {
    const {data} = await ableJ.getAutoSearchKeyword(keyword);
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

  return {autoSearchText};
};

export default useAutoSearch;
