import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigationButton.module.scss';

interface NavigationButtonProps extends PropsWithChildren {
  href: string;
  buttonType?: 'outlined';
  selected?: boolean;
}

const cx = classNames.bind(styles);

const NavigationButton = ({
  children,
  buttonType,
  selected,
  ...props
}: NavigationButtonProps) => {
  return (
    <Link {...props} className={cx('button', {outlined: buttonType}, selected)}>
      {children}
    </Link>
  );
};

export default NavigationButton;
