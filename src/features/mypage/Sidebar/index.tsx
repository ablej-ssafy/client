import classNames from 'classnames/bind';
import {PropsWithChildren} from 'react';

import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = ({children}: PropsWithChildren) => {
  return <aside className={cx('sidebar')}>{children}</aside>;
};

export default Sidebar;
