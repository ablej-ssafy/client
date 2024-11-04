import {Map, MapMarker} from 'react-kakao-maps-sdk';

import styles from './map.module.scss';

const KakaoMap = () => {
  return (
    <div className={styles.container}>
      <Map
        center={{lat: 37.4864252, lng: 126.892126}}
        level={3}
        className={styles['map']}
      >
        <MapMarker position={{lat: 37.4864252, lng: 126.892126}} />
      </Map>
      <p className={styles.location}>
        디지털로31길 12, 8층, 13층, 14층 (구로동, 태평양물산)
      </p>
    </div>
  );
};

export default KakaoMap;
