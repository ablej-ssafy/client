import classNames from 'classnames/bind';
import {InputHTMLAttributes} from 'react';

import styles from './slider.module.scss';

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  max: number;
  name: string;
  value: number;
  fill?: boolean;
  unit?: string;
}

const cx = classNames.bind(styles);

const Slider = ({name, unit, fill, ...props}: SliderProps) => {
  const middle = (props.value / props.max) * 100;

  return (
    <div className={cx('slider-container', {fill: fill})}>
      <label htmlFor={name} className={styles['form-label']}>
        {name} : {props.value}
        {unit}
      </label>
      <input
        {...props}
        className={cx('slider')}
        style={{
          background: `linear-gradient(to right, #6255FF 0%, #6255FF ${middle}%, #ececec ${middle}%, #ececec 100%)`,
        }}
        id={name}
        type="range"
      />
    </div>
  );
};

export default Slider;
