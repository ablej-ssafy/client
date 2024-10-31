import React, {ReactNode} from 'react';

import FilterSelect from '@/features/announcement/FilterSelect';

import styles from './layout.module.scss';

const AnnouncementLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles.container}>
      <FilterSelect />
      <main>{children}</main>
    </div>
  );
};

export default AnnouncementLayout;
