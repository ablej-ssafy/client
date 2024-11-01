'use client';

import classNames from 'classnames/bind';
import type {InputHTMLAttributes} from 'react';

import styles from './input.module.scss';

type BaseInputProps = InputStyle &
  InputHTMLAttributes<HTMLInputElement> &
  (FreeWidthSizeProps | FixedWidthSizeProps);

type InputStyle = {
  inputStyle: 'primary' | 'secondary';
};

type FixedWidthSizeProps = {
  widthSize?: 'fill';
  width?: never;
};

type FreeWidthSizeProps = {
  widthSize: 'free';
  width: number;
};

export type InputProps = BaseInputProps & {
  error?: string | string[];
};

const cx = classNames.bind(styles);

const Input = ({inputStyle, widthSize, width, error, ...props}: InputProps) => {
  const hasError = !!error?.length;
  const errorMessage = hasError
    ? Array.isArray(error)
      ? error.join(' ')
      : error
    : '';

  return (
    <div className={styles.container}>
      <input
        className={cx(
          'input',
          inputStyle,
          {fill: widthSize === 'fill'},
          {error: hasError},
        )}
        {...props}
        style={{width: widthSize === 'free' ? width : undefined}}
      />
      {hasError && <p className={styles['error-message']}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
