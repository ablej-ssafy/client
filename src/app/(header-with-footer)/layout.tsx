import {ReactNode} from 'react';

import Header from '@/features/header-footer/Header';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainPageLayout;
