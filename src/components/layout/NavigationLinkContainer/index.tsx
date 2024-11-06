import classNames from 'classnames/bind';
import {ReactNode} from 'react';

import styles from './navigationLinkContainer.module.scss';

const cx = classNames.bind(styles);

const NavigationLinkContainer = ({children}: {children: ReactNode}) => {
  return <ul className={cx('navigation-link-container')}>{children}</ul>;
};

export default NavigationLinkContainer;
