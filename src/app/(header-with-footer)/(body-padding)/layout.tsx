import {ReactNode} from 'react';

import styles from './layout.module.scss';

// const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

const PaddingLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles['child-container']}>
      {/* <Script strategy="afterInteractive" src={KAKAO_MAP_URL}></Script> */}
      {children}
    </div>
  );
};

export default PaddingLayout;
