import {ReactNode, Suspense} from 'react';

import Loading from '@/components/common/Loading';

import styles from './layout.module.scss';

const PaddingLayout = ({children}: {children: ReactNode}) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles['child-container']}>{children}</div>
    </Suspense>
  );
};

export default PaddingLayout;
