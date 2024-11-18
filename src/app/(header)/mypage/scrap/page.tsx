import classNames from 'classnames/bind';
import {cookies} from 'next/headers';

import ScrapList from '@/features/mypage/ScrapList';
import ableJ from '@/services/ableJ';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const ScrapPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    return;
  }

  const {data} = await ableJ.getScrapList(token);

  return (
    <main className={cx('page')}>
      <ScrapList data={data} />
    </main>
  );
};

export default ScrapPage;
