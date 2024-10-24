import classNames from 'classnames';
import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  color?: 'type1' | 'type2';
  text: string;
  onClick?: () => void;
}

const Button = ({color = 'type1', text, onClick}: ButtonProps) => {
  const buttonClass = classNames(styles['custom-button'], {
    [styles['type1']]: color === 'type1',
    [styles['type2']]: color === 'type2',
  });

  return (
    <div
      className={buttonClass}
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
