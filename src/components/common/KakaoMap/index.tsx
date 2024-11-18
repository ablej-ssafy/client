'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import {useState} from 'react';

import Loading from '@/components/common/Loading';
import {Company} from '@/types/ableJ';

import styles from './map.module.scss';

interface KakaoMapProps {
  companyInfo: Company;
}

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=services&autoload=false`;

const DynamicMap = dynamic(
  () =>
    import('react-kakao-maps-sdk').then(mod => {
      const {Map, MapMarker} = mod;
      return function MapComponent({companyInfo}: KakaoMapProps) {
        return (
          <div className={styles.container}>
            <Map
              center={{lat: companyInfo.latitude, lng: companyInfo.longitude}}
              level={3}
              className={styles['map']}
            >
              <MapMarker
                position={{
                  lat: companyInfo.latitude,
                  lng: companyInfo.longitude,
                }}
              />
            </Map>
            <p className={styles.location}>{companyInfo.address}</p>
          </div>
        );
      };
    }),
  {
    loading: () => <Loading height={280} />,
    ssr: false,
  },
);

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
        defer
      />
      {isLoaded && <DynamicMap companyInfo={companyInfo} />}
    </>
  );
};

export default KakaoMap;
