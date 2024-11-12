'use server';

import {cookies} from 'next/headers';

import CategoryBox from '@/features/search/CategoryBox';
import ResultBox from '@/features/search/ResultBox';
import SearchInput from '@/features/search/SearchInput';
import SearchService from '@/services/ableJ';

import styles from './totalRecruitments.module.scss';

const fetchRecruitments = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const {data} = await SearchService.getAllRecruitment(0, 20, accessToken);

  return data;
};

const TotalRecruitements = async () => {
  const {content: recruitments} = await fetchRecruitments();

  return (
    <div className={styles.container}>
      <CategoryBox />
      <div className={styles['search-result']}>
        <SearchInput />
        <ResultBox recruitments={recruitments} />
      </div>
    </div>
  );
};

export default TotalRecruitements;