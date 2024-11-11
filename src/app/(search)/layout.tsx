import {ReactNode} from 'react';

import GeneralHeader from '@/components/layout/GeneralHeader';

const HeaderLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <GeneralHeader />
      {children}
    </>
  );
};

export default HeaderLayout;
