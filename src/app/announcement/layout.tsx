import React from 'react';

import FilterSelect from '@/features/announcement/FilterSelect';

const AnnouncementLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <FilterSelect />
      <main>{children}</main>
    </>
  );
};

export default AnnouncementLayout;
