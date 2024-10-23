import classNames from 'classnames/bind';
import {useEffect, useRef} from 'react';

import CompanyImage1 from '@/assets/images/company1.png';
import CompanyImage2 from '@/assets/images/company2.png';
import CompanyImage3 from '@/assets/images/company3.png';
import CompanyImage4 from '@/assets/images/company4.png';
import CompanyImage5 from '@/assets/images/company5.png';
import CompanyImage6 from '@/assets/images/company6.png';
import CompanyImage7 from '@/assets/images/company7.png';
import CompanyImage8 from '@/assets/images/company8.png';
import CompanyImage9 from '@/assets/images/company9.png';
import CompanyImage from '@/components/common/CompanyImage';

import styles from './companyCarousel.module.scss';

const cx = classNames.bind(styles);

const Images = [
  CompanyImage1,
  CompanyImage2,
  CompanyImage3,
  CompanyImage4,
  CompanyImage5,
  CompanyImage6,
  CompanyImage7,
  CompanyImage8,
  CompanyImage9,
];

const MAX_VISIBILITY = 3;

interface CompanyCarouselProps {
  activeCard: number;
}

const CompanyCarousel = ({activeCard}: CompanyCarouselProps) => {
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    Images.forEach((_, i) => {
      const element = imageRefs.current[i];
      if (element) {
        element.style.setProperty('--activeCard', i === activeCard ? '1' : '0');
        element.style.setProperty('--offset', String((activeCard - i) / 3));
        element.style.setProperty(
          '--direction',
          String(Math.sign(activeCard - i)),
        );
        element.style.setProperty(
          '--abs-offset',
          String(Math.abs(activeCard - i) / 3),
        );
      }
    });
  }, [activeCard]);

  return (
    <div className={cx('carousel')}>
      {Images.map((image, i) => (
        <div
          key={i}
          className={cx('card-container')}
          ref={el => {
            imageRefs.current[i] = el;
          }}
          style={{
            opacity: Math.abs(activeCard - i) >= MAX_VISIBILITY ? '0' : '1',
            display:
              Math.abs(activeCard - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          <CompanyImage src={image} alt={`회사이미지-${i}`} />
        </div>
      ))}
    </div>
  );
};

export default CompanyCarousel;
