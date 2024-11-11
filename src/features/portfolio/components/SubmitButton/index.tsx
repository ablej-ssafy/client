import classNames from 'classnames/bind';
import {ButtonHTMLAttributes} from 'react';

import styles from './submitButton.module.scss';

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const cx = classNames.bind(styles);

const SubmitButton = ({children, ...props}: SubmitButtonProps) => {
  return (
    <button type="submit" className={cx('submit-button')} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
