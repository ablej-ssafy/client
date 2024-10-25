import classNames from 'classnames/bind';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './navigationButton.module.scss';

interface NavigationButtonProps extends PropsWithChildren {
  href: string;
  buttonType?: 'outlined';
  selected?: boolean;
  signinOpen?: () => void;
}

const cx = classNames.bind(styles);

const NavigationButton = ({
  children,
  buttonType,
  selected,
  signinOpen,
  ...props
}: NavigationButtonProps) => {
  if (buttonType === 'outlined') {
    return (
      <button
        className={cx('button', {outlined: buttonType}, selected)}
        onClick={signinOpen}
      >
        {children}
      </button>
    );
  }

  return (
    <Link {...props} className={cx('button', {outlined: buttonType}, selected)}>
      {children}
    </Link>
  );
};

export default NavigationButton;
