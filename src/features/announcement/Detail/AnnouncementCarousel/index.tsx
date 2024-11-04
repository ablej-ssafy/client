'use client';

import Image, {StaticImageData} from 'next/image';
import {TouchEventHandler, useEffect, useRef, useState} from 'react';
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi';

import Image1 from '@/assets/images/announcement1.png';
import Image2 from '@/assets/images/announcement2.png';
import Image3 from '@/assets/images/announcement3.png';
import Image4 from '@/assets/images/announcement4.png';
import Image5 from '@/assets/images/announcement5.png';
import Image6 from '@/assets/images/announcement6.png';

import styles from './announcementCarousel.module.scss';

interface ImageListType {
  id: number;
  imageURL: StaticImageData;
}

const ImageList: ImageListType[] = [
  {
    id: 1,
    imageURL: Image1,
  },
  {id: 2, imageURL: Image2},
  {id: 3, imageURL: Image3},
  {id: 4, imageURL: Image4},
  {id: 5, imageURL: Image5},
  {id: 6, imageURL: Image6},
];

const AnnouncementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentList, setCurrentList] = useState<ImageListType[]>([]);
  let touchStartX: number;
  let touchEndX: number;

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 50}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (ImageList.length) {
      const startData = ImageList[0];
      const endData = ImageList[ImageList.length - 1];
      const newList = [endData, ...ImageList, startData];

      setCurrentList(newList);
    }
  }, []);

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
    if (newIndex === ImageList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      // 맨 앞이면 맨 뒤로 이동
      moveToNthSlide(ImageList.length);
    }

    setCurrentIndex(prev => prev + direction);

    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = e => {
    touchStartX = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = e => {
    const currentTouchX = e.nativeEvent.changedTouches[0].clientX;

    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(calc(-${currentIndex}00% - ${
        (touchStartX - currentTouchX) * 2 || 0
      }px))`;
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = e => {
    touchEndX = e.nativeEvent.changedTouches[0].clientX;

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
                <Image src={image.imageURL} alt="carousel=img" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
