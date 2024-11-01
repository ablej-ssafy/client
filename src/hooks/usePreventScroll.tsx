import {useEffect} from 'react';

const usePreventScroll = () => {
  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, {passive: false});
    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  }, []);
};

export default usePreventScroll;
