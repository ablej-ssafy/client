'use client';

import Script from 'next/script';
import {useState} from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

import Loading from '@/components/common/Loading';
import {Company} from '@/types/ableJ';

import styles from './map.module.scss';

interface KakaoMapProps {
  companyInfo: Company;
}

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

const KakaoMap = ({companyInfo}: KakaoMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={KAKAO_MAP_URL}
        onLoad={() => {
          window.kakao.maps.load(() => {
            setIsLoaded(true);
          });
        }}
      />
      {isLoaded ? (
        <div className={styles.container}>
          <Map
            center={{lat: companyInfo.latitude, lng: companyInfo.longitude}}
            level={3}
            className={styles['map']}
          >
            <MapMarker
              position={{lat: companyInfo.latitude, lng: companyInfo.longitude}}
            />
          </Map>
          <p className={styles.location}>{companyInfo.address}</p>
        </div>
      ) : (
        <div className={styles.container}>
          <Loading height={280} />
        </div>
      )}
    </>
  );
};

export default KakaoMap;
