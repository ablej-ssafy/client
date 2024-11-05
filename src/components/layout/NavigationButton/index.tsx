import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigationButton.module.scss';

interface NavigationButtonProps extends PropsWithChildren {
  href: string;
  buttonType?: 'outlined';
  color?: 'white' | 'black' | 'primary';
  selected?: boolean;
}

const cx = classNames.bind(styles);

const NavigationButton = ({
  children,
  buttonType,
  selected,
  color = 'black',
  ...props
}: NavigationButtonProps) => {
  return (
    <Link
      {...props}
      className={cx(
        'button',
        color,
        {outlined: buttonType},
        {selected: selected},
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationButton;
