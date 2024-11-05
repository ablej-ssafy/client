'use client';
import Header from '@/components/layout/Header';
import useInvertNavigation from '@/hooks/useInvertNavigation';

const LandingHeader = () => {
  const inverted = useInvertNavigation(1);

  return <Header invert={!inverted} />;
};

export default LandingHeader;
