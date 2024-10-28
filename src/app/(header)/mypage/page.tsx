'use client';

import classNames from 'classnames/bind';
import {ChangeEvent, useState} from 'react';

import LabelInput from '@/components/common/LabelInput';
import Slider from '@/components/common/Slider';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const MyPage = () => {
  const [year, setYear] = useState(0);
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(+e.currentTarget.value);
  };

  return (
    <main className={cx('page')}>
      <LabelInput
        label={'이메일'}
        name={''}
        inputStyle={'secondary'}
        readOnly
      />
      <LabelInput label={'관심직무'} name={''} inputStyle={'secondary'} />
      <Slider
        max={30}
        name={'경력'}
        value={year}
        onChange={handleYearChange}
        unit={'년'}
      />
    </main>
  );
};

export default MyPage;
