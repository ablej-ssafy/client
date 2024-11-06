'use client';

import Image from 'next/image';
import {TouchEventHandler, useEffect, useRef, useState} from 'react';
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi';

import Image1 from '@/assets/images/announcement1.png';

import styles from './recruitmentCarousel.module.scss';

interface RecruitmentCarouselProps {
  imageArray: string[];
}

const RecruitmentCarousel = ({imageArray}: RecruitmentCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentList, setCurrentList] = useState<string[]>([]);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const translateValue =
        window.innerWidth <= 512 ? currentIndex * 100 : currentIndex * 50;
      carouselRef.current.style.transform = `translateX(-${translateValue}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (imageArray.length) {
      const startData = imageArray[0];
      const endData = imageArray[imageArray.length - 1];
      const newList = [endData, ...imageArray, startData];

      setCurrentList(newList);
    }
  }, [imageArray]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currentIndex + direction;

    // 슬라이드가 끝일때 가장 앞으로 이동
    if (newIndex === imageArray.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      // 맨 앞이면 맨 뒤로 이동
      moveToNthSlide(imageArray.length);
    }

    setCurrentIndex(prev => prev + direction);

    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = e => {
    touchStartX.current = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = e => {
    const currentTouchX = e.nativeEvent.changedTouches[0].clientX;

    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(calc(-${currentIndex}00% - ${
        (touchStartX.current - currentTouchX) * 2 || 0
      }px))`;
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = e => {
    touchEndX.current = e.nativeEvent.changedTouches[0].clientX;

    if (touchStartX >= touchEndX) {
      handleSwipe(1);
    } else {
      handleSwipe(-1);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles['carousel-wrapper']}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <HiArrowCircleLeft
          className={styles['swipe-left']}
          onClick={() => handleSwipe(-1)}
          color="white"
          size={40}
        />
        <HiArrowCircleRight
          className={styles['swipe-right']}
          onClick={() => handleSwipe(1)}
          color="white"
          size={40}
        />
        <ul className={styles.carousel} ref={carouselRef}>
          {currentList?.map((image, index) => {
            const key = `image-${index}`;

            return (
              <li key={key} className={styles['carousel-item']}>
                {/* <Image src={image} alt="carousel=img" /> */}
                <Image src={Image1} alt="carousel=img" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecruitmentCarousel;
