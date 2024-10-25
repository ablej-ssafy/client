'use client';

import React, {useEffect, useRef, useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';

import styles from './filterSelect.module.scss';

const FilterSelect = () => {
  const data = {
    resumeList: [
      '이력서 제ASDFAWEFAWED목1asdfasdfasfawesdfaWFASDFASDFA',
      '이력서 제목2',
      '이력서 제목3',
      '이력서 제목4',
      '이력서 제목5',
      '이력서 제목6',
      '이력서 제목7',
      '이력서 제목8',
      '이력서 제목9',
      '이력서 제목10',
      '이력서 제목11',
      '이력서 제목12',
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data.resumeList[0]);
  const selectBoxRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  // selectbox 외부 클릭 시 드롭다운 닫기
  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.selectbox}
        onClick={toggleDropdown}
        ref={selectBoxRef}
      >
        <div>
          <div>{selectedItem}</div>
          <IoIosArrowDown />
        </div>
        {isOpen && (
          <ul className={styles.dropdown}>
            {data.resumeList.map((item, index) => (
              <li key={index} onMouseDown={() => handleSelectItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles['right-button']}>
        <div>새로고침</div>
        <div>이력서 펼치기</div>
      </div>
    </div>
  );
};

export default FilterSelect;
