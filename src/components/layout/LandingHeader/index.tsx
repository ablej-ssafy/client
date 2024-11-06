'use client';

import Header, {HeaderProps} from '@/components/layout/Header';
import useInvertNavigation from '@/hooks/useInvertNavigation';

type LandingHeaderProps = Omit<HeaderProps, 'invert'>;

const LandingHeader = ({rightComponent}: LandingHeaderProps) => {
  const inverted = useInvertNavigation(1);
  return <Header invert={!inverted} rightComponent={rightComponent} />;
};

export default LandingHeader;
