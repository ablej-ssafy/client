import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  color?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({color = '#6E55FF', text}) => {
  return (
    <button
      className={styles['custom-button']}
      style={{borderColor: color, color: color}}
    >
      {text}
    </button>
  );
};

export default Button;
