import classNames from 'classnames/bind';
import {ButtonHTMLAttributes, forwardRef} from 'react';

import styles from './dateButton.module.scss';

const cx = classNames.bind(styles);

type DateButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DateButton = forwardRef<HTMLButtonElement, DateButtonProps>(
  (props, ref) => {
    return (
      <button {...props} ref={ref} className={cx('button')} type="button">
        {props.value}
      </button>
    );
  },
);

DateButton.displayName = 'DateButton';

export default DateButton;
