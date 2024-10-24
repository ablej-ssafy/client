import classNames from 'classnames/bind';
import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  color?: 'type1' | 'type2';
  text: string;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

const Button = ({color = 'type1', text, onClick}: ButtonProps) => {
  return (
    <div
      className={cx('custom-button', `${color}`)}
      style={{borderColor: color, color: color}}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {text}
    </div>
  );
};

export default Button;
