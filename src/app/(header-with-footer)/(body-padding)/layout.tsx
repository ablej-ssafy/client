import {ReactNode} from 'react';

import styles from './layout.module.scss';

const PaddingLayout = ({children}: {children: ReactNode}) => {
  return <div className={styles['child-container']}>{children}</div>;
};

export default PaddingLayout;
