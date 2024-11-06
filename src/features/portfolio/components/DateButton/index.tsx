import classNames from 'classnames/bind';
import {forwardRef, MouseEvent} from 'react';

import styles from './dateButton.module.scss';

const cx = classNames.bind(styles);

interface DateButtonProps {
  value?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const DateButton = forwardRef<HTMLButtonElement, DateButtonProps>(
  ({onClick, value}, ref) => {
    return (
      <button onClick={onClick} ref={ref} className={cx('button')}>
        {value}
      </button>
    );
  },
);

DateButton.displayName = 'DateButton';

export default DateButton;
