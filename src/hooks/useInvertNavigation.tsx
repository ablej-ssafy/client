import {useEffect, useState} from 'react';

import useScrollHeight from '@/hooks/useScrollHeight';
import useWindowHeight from '@/hooks/useWindowHeight';

/**
 * Scroll height가 window height의 vh배수 이상일 때 true를 반환하는 hook
 * @param vh window height의 배수
 */
const useInvertNavigation = (vh: number = 1) => {
  const windowHeight = useWindowHeight();
  const scrollHeight = useScrollHeight();
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    if (scrollHeight >= windowHeight * vh) {
      setInverted(true);
    } else {
      setInverted(false);
    }
  }, [scrollHeight, vh, windowHeight]);

  return inverted;
};

export default useInvertNavigation;
