import classNames from 'classnames/bind';
import type {ReactNode} from 'react';

import styles from './column.module.scss';

const cx = classNames.bind(styles);
const Columns = ({children}: {children: ReactNode}) => {
  return <div className={cx('columns')}>{children}</div>;
};

export default Columns;
