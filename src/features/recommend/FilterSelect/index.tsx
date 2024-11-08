'use client';

import classNames from 'classnames/bind';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {CiFileOn} from 'react-icons/ci';
import {IoIosArrowDown, IoIosRefresh} from 'react-icons/io';

import Button from '@/components/common/Button';
import {ResumePDF} from '@/types/ableJ';

import styles from './filterSelect.module.scss';

const cx = classNames.bind(styles);

interface ResumePDFProps {
  data: ResumePDF[];
}

const FilterSelect = ({data}: ResumePDFProps) => {
  const router = useRouter();
  const hasData = data.length;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    hasData ? data[data.length - 1].fileName : '등록된 파일이 없습니다',
  );

  useEffect(() => {
    if (hasData) {
      router.push(`/recommend/${data[hasData - 1].id}`);
    }
  }, [hasData]);

  const handleToggleDropdown = () => {
    if (!!hasData) {
      setIsOpen(prev => !prev);
    }
  };

  const handleSelectItem = (item: string, id: number) => {
    setSelectedItem(item);
    setIsOpen(false);
    router.push(`/recommend/${id}`);
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
        {!!hasData && isOpen && (
          <ul className={styles.dropdown}>
            {data.map(item => (
              <li
                key={item.id}
                onMouseDown={() => handleSelectItem(item.fileName, item.id)}
              >
                {item.fileName}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles['right-button']}>
        <Button text="이력서 펼치기" height={40} />
        <Button text="새로고침" color="type2" height={40} />
      </div>
      <div className={styles['mobile-right-button']}>
        <CiFileOn size={24} />
        <IoIosRefresh size={24} />
      </div>
    </div>
  );
};

export default FilterSelect;
