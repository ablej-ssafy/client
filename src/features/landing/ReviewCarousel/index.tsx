'use client';

import classNames from 'classnames/bind';
import {useState} from 'react';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';

import styles from './reviewCarousel.module.scss';

const cx = classNames.bind(styles);

const REVIEW_DATA = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur finibus dolor. Vivamus dignissim a lorem ac fringilla. Donec convallis elementum justo et mattis. Phasellus ac velit vulputate, tristique tellus vel, condimentum urna. Sed eleifend diam porttitor est dictum ullamcorper. Nam viverra lorem id mauris tristique, sed aliquet est pharetra. Mauris fermentum posuere est, eget pharetra elit. Etiam ultricies nisl at elit varius auctor. Sed laoreet eu quam ut laoreet.',
  'Integer pharetra pulvinar rutrum. Sed non porttitor urna. Suspendisse metus turpis, tempus quis sodales eu, semper et augue. Donec accumsan, lorem vitae accumsan molestie, ligula est porta tellus, at ornare dui risus eget ante. Quisque imperdiet, libero at commodo pretium, nisl tortor consectetur lectus, et luctus quam neque at erat. Praesent lorem tellus, sagittis id justo sit amet, elementum tristique elit.',
  'Sed odio libero, sodales nec nibh et, iaculis consequat diam. Mauris vel cursus urna, sit amet iaculis ante. Nullam ac ultricies quam. Nam vestibulum massa sit amet tortor fermentum, sit amet tristique felis tristique. In convallis hendrerit urna eget malesuada.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum turpis nisl, ut dapibus neque faucibus nec. Quisque non nisl non urna feugiat accumsan eu eu mauris.',
];

const ReviewCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const firstIndex = 0;
  const lastIndex = REVIEW_DATA.length - 1;

  const clickRight = () => {
    if (selectedIndex >= lastIndex) return;
    setSelectedIndex(index => index + 1);
  };

  const clickLeft = () => {
    if (selectedIndex <= 0) return;
    setSelectedIndex(index => index - 1);
  };

  return (
    <div className={cx('carousel')}>
      {firstIndex < selectedIndex && (
        <button className={cx('button', 'left')} onClick={clickLeft}>
          <SlArrowLeft />
        </button>
      )}
      <div
        className={cx('review-container')}
        style={{transform: `translateX(-${selectedIndex * 100}%)`}}
      >
        {!!REVIEW_DATA.length &&
          REVIEW_DATA.map(review => (
            <div key={review.slice(10)} className={cx('review')}>
              {review}
            </div>
          ))}
      </div>
      {lastIndex > selectedIndex && (
        <button className={cx('button', 'right')} onClick={clickRight}>
          <SlArrowRight />
        </button>
      )}
    </div>
  );
};

export default ReviewCarousel;
