import {ReactNode} from 'react';

import FilterSelect from '@/features/recommend/FilterSelect';

const RecommendLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <FilterSelect />
      <main>{children}</main>
    </>
  );
};

export default RecommendLayout;
