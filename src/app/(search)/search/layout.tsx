import {ReactNode, Suspense} from 'react';

import styles from './layout.module.scss';

const PaddingLayout = ({children}: {children: ReactNode}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles['child-container']}>{children}</div>
    </Suspense>
  );
};

export default PaddingLayout;
