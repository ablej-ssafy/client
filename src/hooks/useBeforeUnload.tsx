import {useCallback, useEffect} from 'react';

const useBeforeUnload = () => {
  const unloadHandler = useCallback((e: BeforeUnloadEvent) => {
    console.log(e);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', unloadHandler);

    return () => {
      window.removeEventListener('beforeunload', unloadHandler);
    };
  }, [unloadHandler]);
};

export default useBeforeUnload;
