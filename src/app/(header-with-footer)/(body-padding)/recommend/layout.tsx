import {cookies} from 'next/headers';
import {ReactNode} from 'react';

import redirectAction from '@/actions/redirectAction';
import FilterSelect from '@/features/recommend/FilterSelect';
import ableJ from '@/services/ableJ';

import styles from './layout.module.scss';

const RecommendLayout = async ({children}: {children: ReactNode}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    return (
      <>
        <FilterSelect data={[]} />
        <form className={styles.container} action={redirectAction}>
          <div>로그인 후 이용 가능한 서비스 입니다.</div>
          <input type="hidden" name="redirectUrl" value="/recommend" />
          <button type="submit">로그인 하러 가기</button>
        </form>
      </>
    );
  }

  const {data} = await ableJ.getResumeList(token);

  return (
    <>
      <FilterSelect data={data} />
      <main>{children}</main>
    </>
  );
};

export default RecommendLayout;
