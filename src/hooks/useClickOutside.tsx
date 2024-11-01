import {RefObject, useCallback, useEffect} from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: VoidFunction,
) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      callback();
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);
};

export default useClickOutside;
