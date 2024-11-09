'use client';

import 'react-datepicker/dist/react-datepicker.css';

import classNames from 'classnames/bind';
import {InputHTMLAttributes, useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';

import DateButton from '@/features/portfolio/components/DateButton';

import styles from './datePicker.module.scss';

type CustomDatePicker = NormalCustomDatePicker | LabeledCustomDatePicker;

type NormalCustomDatePicker = {
  isLabeled?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type LabeledCustomDatePicker = {
  isLabeled: true;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const cx = classNames.bind(styles);

const CustomDatePicker = (props: CustomDatePicker) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(
      props.defaultValue ? new Date(props.defaultValue as string) : new Date(),
    );
  }, [props.defaultValue]);

  return (
    <div className={cx('datepicker-container')}>
      {props.isLabeled && (
        <label htmlFor={props.label} className={cx('label')}>
          {props.label}
        </label>
      )}
      <DatePicker
        selected={date}
        onChange={date => setDate(date!)}
        closeOnScroll={e => e.target === document}
        customInput={<DateButton />}
        tabIndex={1}
        dateFormat="yyyy.MM.dd"
      />
      <input
        name={props.name}
        hidden
        defaultValue={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`}
      />
    </div>
  );
};

export default CustomDatePicker;
