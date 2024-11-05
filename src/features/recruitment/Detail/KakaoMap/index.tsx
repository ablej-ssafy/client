import {Map, MapMarker} from 'react-kakao-maps-sdk';

import {Company} from '@/types/ableJ';

import styles from './map.module.scss';

interface KakaoMapProps {
  companyInfo: Company;
}

const KakaoMap = ({companyInfo}: KakaoMapProps) => {
  return (
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
  );
};

export default KakaoMap;
