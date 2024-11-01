import classNames from 'classnames/bind';

import styles from './sidebarDivider.module.scss';

const cx = classNames.bind(styles);

const SidebarDivider = () => {
  return <div className={cx('sidebar-divider')} />;
};

export default SidebarDivider;
