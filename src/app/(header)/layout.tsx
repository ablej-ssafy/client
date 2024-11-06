import type {ReactNode} from 'react';

import GeneralHeader from '@/components/layout/GeneralHeader';

const MainPageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <GeneralHeader />
      {children}
    </>
  );
};

export default MainPageLayout;
