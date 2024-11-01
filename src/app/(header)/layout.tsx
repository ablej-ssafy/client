import type {ReactNode} from 'react';

import Header from '@/components/layout/Header';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header invertBackground={true} />
      {children}
    </>
  );
};

export default MainPageLayout;
