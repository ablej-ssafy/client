import Lottie from 'lottie-react';
import {useRef} from 'react';

import LoadingCube from '@/assets/lottie/LoadingCube.json';

const LoadingSpinner = () => {
  const lottie = useRef<HTMLDivElement>(null);

  return (
    <Lottie animationData={LoadingCube} ref={lottie} style={{width: '400px'}} />
  );
};

export default LoadingSpinner;
