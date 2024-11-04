import classNames from 'classnames/bind';
import {ButtonHTMLAttributes} from 'react';
import {CgAddR} from 'react-icons/cg';

import styles from './addSectionItemButton.module.scss';

interface AddSectionItemButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const cx = classNames.bind(styles);

const AddSectionItemButton = ({text, ...props}: AddSectionItemButtonProps) => {
  return (
    <div className={cx('button-container')}>
      {text && <span className={cx('button-text')}>{text}</span>}
      <button className={cx('button')} {...props}>
        <CgAddR size={28} />
      </button>
    </div>
  );
};

export default AddSectionItemButton;
