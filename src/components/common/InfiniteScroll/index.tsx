'use client';

import {useEffect, useRef} from 'react';

interface InfiniteScrollProps {
  onIntersect: () => Promise<void>;
  children: React.ReactNode;
}

export default function InfiniteScroll({
  onIntersect,
  children,
}: InfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async entries => {
        if (entries[0].isIntersecting) {
          await onIntersect();
        }
      },
      {threshold: 1.0},
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [onIntersect]);

  return (
    <>
      {children}
      <div ref={observerRef} style={{height: '10px'}} />
    </>
  );
}
