'use client';

import {ErrorMessage} from '@hookform/error-message';
import classNames from 'classnames/bind';
import type {InputHTMLAttributes} from 'react';
import type {FieldErrors} from 'react-hook-form'; // react-hook-form 사용 시

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

type ErrorInputProps = BaseInputProps & {
  errors: FieldErrors;
  name: string;
};

type NormalInputProps = BaseInputProps & {
  errors?: never;
  name?: string;
};

export type InputProps = ErrorInputProps | NormalInputProps;

const cx = classNames.bind(styles);

const Input = ({
  inputStyle,
  widthSize,
  width,
  errors,
  ...props
}: InputProps) => {
  const {name} = props;
  const hasError = name && errors && errors[name]?.message;
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
        type={
          name === 'password' || name === 'password_confirm'
            ? 'password'
            : 'text'
        }
        style={{width: widthSize === 'free' ? width : undefined}}
      />
      {hasError && (
        <ErrorMessage
          errors={errors}
          name={name!}
          render={({message}) => (
            <p className={styles['error-message']}>{message}</p>
          )}
        />
      )}
    </div>
  );
};

export default Input;
