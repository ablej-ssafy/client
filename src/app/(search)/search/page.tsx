import {cookies} from 'next/headers';

import NoSearchText from '@/features/search/NoSearchText';
import ableJ from '@/services/ableJ';

const fetchKeyword = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data} = await ableJ.getRankSearch(accessToken);

  return data;
};

const SearchPage = async () => {
  const {ranks, recentKeywords} = await fetchKeyword();

  return <NoSearchText ranks={ranks} recentKeywords={recentKeywords} />;
};

export default SearchPage;
