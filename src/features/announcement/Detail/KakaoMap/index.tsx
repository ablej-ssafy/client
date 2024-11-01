import styles from './map.module.scss';

// const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY;
// const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&libraries=services&autoload=false`;

const KakaoMap = () => {
  return (
    <div className={styles.map}>
      <span>여기는 지도 자리다</span>
      {/* <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{lat: 37.4864252, lng: 126.892126}}></Map> */}
    </div>
  );
};

export default KakaoMap;
