import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigationButton.module.scss';

interface NavigationButtonProps extends PropsWithChildren {
  href: string;
  invert?: boolean;
  selected?: boolean;
  outlined?: boolean;
  login?: boolean;
}

const cx = classNames.bind(styles);

const NavigationButton = ({
  children,
  outlined,
  selected,
  invert,
  login,
  ...props
}: NavigationButtonProps) => {
  return (
    <Link
      {...props}
      className={cx(
        'button',
        {outlined: outlined},
        {invert: invert},
        {selected: selected},
        {login: login},
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationButton;
