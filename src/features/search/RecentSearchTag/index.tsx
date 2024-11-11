'use client';

import {FiX} from 'react-icons/fi';

import recentKeywordDeleteAction from '@/actions/search/recentKeywordDeleteAction';
import revalidateSearchPage from '@/actions/search/revalidateSearchAction';
import {RankContent} from '@/types/ableJ';

import styles from './recentSearchTag.module.scss';

interface RecentSearchTagProps {
  keyword: RankContent;
}

const RecentSearchTag = ({keyword}: RecentSearchTagProps) => {
  const handleDelete = async () => {
    const response = await recentKeywordDeleteAction(keyword.keyword);

    console.log('response', response);

    if (response.success) {
      await revalidateSearchPage();
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{keyword.keyword}</span>
      <FiX size={15} onClick={handleDelete} />
    </div>
  );
};

export default RecentSearchTag;
