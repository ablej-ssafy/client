import {useScroll} from 'framer-motion';
import {useEffect, useState} from 'react';

const useScrollHeight = () => {
  const [height, setHeight] = useState(0);
  const {scrollY} = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', y => {
      setHeight(y);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return height;
};

export default useScrollHeight;
