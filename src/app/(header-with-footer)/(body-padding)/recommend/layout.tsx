import {cookies} from 'next/headers';
import Link from 'next/link';
import {ReactNode} from 'react';

import FilterSelect from '@/features/recommend/FilterSelect';
import resumeService from '@/services/ableJ';

import styles from './layout.module.scss';

const RecommendLayout = async ({children}: {children: ReactNode}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    return (
      <>
        <FilterSelect data={[]} />
        <div className={styles.container}>
          <div>로그인 후 이용 가능한 서비스 입니다.</div>
          <Link href="/signin">로그인 하러 가기</Link>
        </div>
      </>
    );
  }

  const {data} = await resumeService.getResumeList(token);

  return (
    <>
      <FilterSelect data={data} />
      <main>{children}</main>
    </>
  );
};

export default RecommendLayout;
