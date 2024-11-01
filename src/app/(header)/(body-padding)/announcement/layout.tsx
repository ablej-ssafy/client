import React, {ReactNode} from 'react';

import FilterSelect from '@/features/announcement/FilterSelect';

const AnnouncementLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <FilterSelect />
      <main>{children}</main>
    </>
  );
};

export default AnnouncementLayout;
