import classNames from 'classnames/bind';
import {ReactNode} from 'react';

import styles from './navigationButtonContainer.module.scss';

const cx = classNames.bind(styles);

const NavigationButtonContainer = ({children}: {children: ReactNode}) => {
  return <div className={cx('button-container')}>{children}</div>;
};

export default NavigationButtonContainer;
