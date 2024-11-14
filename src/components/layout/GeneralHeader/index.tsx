import classNames from 'classnames/bind';

import Header from '@/components/layout/Header';
import LoginButton from '@/components/layout/LoginButton';

import styles from './generalHeader.module.scss';

const cx = classNames.bind(styles);

const GeneralHeader = () => {
  return (
    <>
      <Header rightComponent={<LoginButton />} />
      <div className={cx('clearfix')} />
    </>
  );
};

export default GeneralHeader;
