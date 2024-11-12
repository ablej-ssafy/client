'use client';

import {useRouter} from 'next/navigation';
import {FiX} from 'react-icons/fi';

import recentKeywordDeleteAction from '@/actions/search/recentKeywordDeleteAction';
import revalidateSearchPage from '@/actions/search/revalidateSearchAction';
import {RankContent} from '@/types/ableJ';

import styles from './recentSearchTag.module.scss';

interface RecentSearchTagProps {
  keyword: RankContent;
}

const RecentSearchTag = ({keyword}: RecentSearchTagProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await recentKeywordDeleteAction(keyword.keyword);

    console.log('response', response);

    if (response.success) {
      await revalidateSearchPage();
    }
  };

  const handleClick = () => {
    router.push(`/recruitments?keyword=${keyword.keyword}`);
  };

  return (
    <div className={styles.container}>
      <span className={styles.text} onClick={handleClick}>
        {keyword.keyword}
      </span>
      <FiX size={15} onClick={handleDelete} />
    </div>
  );
};

export default RecentSearchTag;
