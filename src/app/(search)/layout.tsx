import {ReactNode} from 'react';

import Header from '@/components/layout/Header';

const HeaderLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
