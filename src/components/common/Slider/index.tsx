import classNames from 'classnames/bind';
import {InputHTMLAttributes} from 'react';

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
  const middle = (props.value / props.max) * 100;

  return (
    <div className={cx('slider-container', {fill: fill})}>
      {!!label && (
        <label htmlFor={label}>
          {label} : {props.value}
          {unit}
        </label>
      )}
      <input
        {...props}
        className={cx('slider')}
        style={{
          background: `linear-gradient(to right, #6255FF 0%, #6255FF ${middle}%, #ececec ${middle}%, #ececec 100%)`,
        }}
        id={label}
        type="range"
      />
    </div>
  );
};

export default Slider;
