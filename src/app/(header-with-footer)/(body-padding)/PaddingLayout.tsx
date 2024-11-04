import {ReactNode} from 'react';

import styles from './layout.module.scss';

export const PaddingLayout = ({children}: {children: ReactNode}) => {
  return <div className={styles['child-container']}>{children} </div>;
};
