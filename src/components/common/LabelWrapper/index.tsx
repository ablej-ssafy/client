import classNames from 'classnames/bind';
import {LabelHTMLAttributes, ReactNode} from 'react';

import styles from './labelWrapper.module.scss';

export interface LabelWrapperProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children: ReactNode;
}

const cx = classNames.bind(styles);

const LabelWrapper = ({label, children, ...props}: LabelWrapperProps) => {
  return (
    <div className={cx('label-wrapper')}>
      {!!label && (
        <label htmlFor={label} {...props}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default LabelWrapper;
