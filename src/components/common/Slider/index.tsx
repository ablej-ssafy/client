import classNames from 'classnames/bind';
import {InputHTMLAttributes, useState} from 'react';

import LabelWrapper from '@/components/common/LabelWrapper';

import styles from './slider.module.scss';

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  max: number;
  value: number;
  label?: string;
  fill?: boolean;
  unit?: string;
}

const cx = classNames.bind(styles);

const Slider = ({unit, fill, label, ...props}: SliderProps) => {
  const [value, setValue] = useState(0);
  const composedLabel = label
    ? `${label}: ${value}${unit ?? ''}`
    : `${value}${unit ?? ''}`;
  const middle = (value / props.max) * 100;

  return (
    <LabelWrapper label={composedLabel}>
      <div className={cx('slider-container', {fill: fill})} id={composedLabel}>
        <input
          {...props}
          className={cx('slider')}
          style={{
            background: `linear-gradient(to right, #6255FF 0%, #6255FF ${middle}%, #ececec ${middle}%, #ececec 100%)`,
          }}
          id={label}
          type="range"
          onChange={e => setValue(Number(e.target.value))}
          value={value}
        />
      </div>
    </LabelWrapper>
  );
};

export default Slider;
