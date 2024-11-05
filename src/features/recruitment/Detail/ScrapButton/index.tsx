'use client';

import {useState} from 'react';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import styles from './scrapButton.module.scss';

const ScrapButton = () => {
  const [isScrap, setIsScrap] = useState<boolean>(false);

  const handleClick = () => {
    setIsScrap(!isScrap);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.scrap}>스크랩</span>
      {isScrap ? (
        <MdBookmark size={25} color="white" />
      ) : (
        <MdBookmarkBorder size={25} color="white" />
      )}
    </div>
  );
};

export default ScrapButton;
