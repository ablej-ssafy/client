import Link from 'next/link';
import React from 'react';

import styles from './noResume.module.scss';

const NoResume = () => {
  return (
    <div className={styles.container}>
      <div>등록된 이력서가 없습니다.</div>
      <Link href="/resume">이력서 등록하기</Link>
    </div>
  );
};

export default NoResume;
