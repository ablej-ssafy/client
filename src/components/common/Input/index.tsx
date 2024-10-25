'use client';

import {ErrorMessage} from '@hookform/error-message';
import classNames from 'classnames/bind';
import type {InputHTMLAttributes} from 'react';
import type {FieldErrors} from 'react-hook-form'; // react-hook-form 사용 시

import styles from './input.module.scss';

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> &
  (FreeWidthSizeProps | FixedWidthSizeProps);

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

type InputProps = ErrorInputProps | NormalInputProps;

const cx = classNames.bind(styles);

const Input = ({widthSize, width, errors, ...props}: InputProps) => {
  const {name} = props;
  return (
    <div>
      <input
        className={cx('input', {fill: widthSize === 'fill'}, {errors})}
        {...props}
        style={{width: widthSize === 'free' ? width : undefined}}
      />
      {!!name && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({message}) => <p>{message}</p>}
        />
      )}
    </div>
  );
};

export default Input;
