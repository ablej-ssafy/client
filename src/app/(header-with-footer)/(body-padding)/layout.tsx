import Script from 'next/script';
import {ReactNode} from 'react';

import styles from './layout.module.scss';

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY;
const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;

const PaddingLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles['child-container']}>
      <Script strategy="beforeInteractive" src={KAKAO_MAP_URL}></Script>
      {children}
    </div>
  );
};

export default PaddingLayout;
