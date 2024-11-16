import {cookies} from 'next/headers';

import NoSearchText from '@/features/search/NoSearchText';
import ableJ from '@/services/ableJ';

const SearchPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data: ranks} = await ableJ.getRankSearch(accessToken);

  return (
    <NoSearchText ranks={ranks.ranks} recentKeywords={ranks.recentKeywords} />
  );
};

export default SearchPage;
