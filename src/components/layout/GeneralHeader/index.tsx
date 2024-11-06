import classNames from 'classnames/bind';

import LoginButton from '@/app/components/LoginButton';
import Header from '@/components/layout/Header';

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
