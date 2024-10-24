import {useEffect, useState} from 'react';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return windowHeight;
};

export default useWindowHeight;
