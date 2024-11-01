'use client';
import classNames from 'classnames/bind';
import {useRouter} from 'next/navigation';
import type {ButtonHTMLAttributes, MouseEvent, PropsWithChildren} from 'react';

import styles from './sidebarButton.module.scss';

const cx = classNames.bind(styles);

type BaseProps = {
  selected?: boolean;
  warning?: boolean;
};

type ButtonProps = {
  buttonType?: 'button';
  href?: never;
} & BaseProps;

type LinkProps = {
  buttonType: 'link';
  href: string;
} & BaseProps;

type SidebarButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> &
  (ButtonProps | LinkProps);

const SidebarButton = ({
  children,
  selected,
  warning,
  buttonType,
  href,
  onClick,
  ...props
}: SidebarButtonProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonType === 'link') {
      router.replace(href);
      return;
    }
    if (!onClick) return;
    onClick(e);
  };

  return (
    <button
      {...props}
      className={cx('sidebar-button', {selected: selected}, {warning: warning})}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SidebarButton;
