import classNames from 'classnames/bind';

import styles from './divider.module.scss';

const cx = classNames.bind(styles);

const Divider = () => {
  return <div className={cx('divider')} />;
};

export default Divider;
