import classNames from 'classnames/bind';
import {HTMLAttributes, ReactNode} from 'react';

import styles from './backdrop.module.scss';

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const cx = classNames.bind(styles);

const Backdrop = ({children, ...props}: BackdropProps) => {
  return (
    <div {...props} className={cx('backdrop')}>
      {children}
    </div>
  );
};

export default Backdrop;
