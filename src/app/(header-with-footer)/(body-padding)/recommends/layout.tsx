import {ReactNode} from 'react';

import FilterSelect from '@/features/recommend/FilterSelect';

const RecommendsLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <FilterSelect />
      <main>{children}</main>
    </>
  );
};

export default RecommendsLayout;
