import classNames from 'classnames/bind';
import Link, {LinkProps} from 'next/link';
import {PropsWithChildren} from 'react';

import styles from './sidebarButton.module.scss';

const cx = classNames.bind(styles);

interface SidebarButtonProps extends PropsWithChildren<LinkProps> {
  onClick?: VoidFunction;
  selected?: boolean;
  warning?: boolean;
}

const SidebarButton = ({
  children,
  selected,
  warning,
  ...props
}: SidebarButtonProps) => {
  return (
    <Link
      {...props}
      className={cx('sidebar-button', {selected: selected}, {warning: warning})}
    >
      {children}
    </Link>
  );
};

export default SidebarButton;
