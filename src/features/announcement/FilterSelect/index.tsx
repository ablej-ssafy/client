'use client';

import classNames from 'classnames/bind';
import React, {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';

import Button from '@/components/common/Button';

import styles from './filterSelect.module.scss';

const cx = classNames.bind(styles);

const FilterSelect = () => {
  // 더미데이터입니다. 삭제될 코드.
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

  const handleToggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.selectbox}
        onClick={handleToggleDropdown}
        onBlur={() => setIsOpen(false)}
        tabIndex={0} // 포커스 관리
      >
        <div>
          <div>{selectedItem}</div>
          <IoIosArrowDown className={cx({'icon-open': isOpen})} />
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
        <Button text="이력서 펼치기" height={40} />
        <Button text="새로고침" color="type2" height={40} />
      </div>
    </div>
  );
};

export default FilterSelect;
