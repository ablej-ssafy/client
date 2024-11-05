import classNames from 'classnames/bind';

import Header from '@/components/layout/Header';
import {NavigationProps} from '@/components/layout/Navigation';

import styles from './generalHeader.module.scss';

const cx = classNames.bind(styles);

type GeneralHeaderProps = NavigationProps;

const GeneralHeader = (props: GeneralHeaderProps) => {
  return (
    <>
      <Header {...props} />
      <div className={cx('clearfix')} />
    </>
  );
};

export default GeneralHeader;
