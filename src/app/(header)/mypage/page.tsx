import classNames from 'classnames/bind';

import Input from '@/components/common/Input';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const MyPage = () => {
  return (
    <main className={cx('page')}>
      <Input errors={{}} name={''} />
    </main>
  );
};

export default MyPage;
