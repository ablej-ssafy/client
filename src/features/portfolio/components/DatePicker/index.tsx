import 'react-datepicker/dist/react-datepicker.css';

import classNames from 'classnames/bind';
import {InputHTMLAttributes, useState} from 'react';
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
  const [date, setDate] = useState(
    props.value ? new Date(props.value as string) : new Date(),
  );

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
        // locale="ko-KR"
        dateFormat="yyyy.MM.dd"
        name={props.name}
      />
    </div>
  );
};

export default CustomDatePicker;
