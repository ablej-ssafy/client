import classNames from 'classnames/bind';
import {InputHTMLAttributes} from 'react';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

type InputProps = NormalInputProps | LabeledInputProps;

type NormalInputProps = {
  isLabeled?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type LabeledInputProps = {
  isLabeled: true;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const id = props.isLabeled ? props.label : undefined;

  return (
    <div className={cx('input-container')}>
      {props.isLabeled && (
        <label htmlFor={props.label} className={cx('label')}>
          {props.label}
        </label>
      )}
      <input {...props} id={id} className={cx('portfolio-input')} />
    </div>
  );
};

export default Input;
