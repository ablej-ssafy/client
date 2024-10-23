'use client';

import classNames from 'classnames/bind';

import styles from './signInput.module.scss';

const cx = classNames.bind(styles);

interface SignInputProps {
  placeholder: string;
  type?: string;
}

const SignInput = ({placeholder, type}: SignInputProps) => {
  return (
    <input className={cx('input')} placeholder={placeholder} type={type} />
  );
};

export default SignInput;
