'use client';

import classNames from 'classnames/bind';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {CiFileOn} from 'react-icons/ci';
import {IoIosArrowDown, IoIosRefresh} from 'react-icons/io';

import Button from '@/components/common/Button';
import PreviewModal from '@/features/resume/PreViewModal';
import {ResumePDF} from '@/types/ableJ';

import styles from './filterSelect.module.scss';

const cx = classNames.bind(styles);

interface ResumePDFProps {
  data: ResumePDF[];
}

const FilterSelect = ({data}: ResumePDFProps) => {
  const router = useRouter();
  const hasData = data.length;
  const [selectedOpen, setSelectedOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    hasData ? data[data.length - 1].fileName : '등록된 파일이 없습니다',
  );
  const [selectedUrl, setSelectedUrl] = useState(
    hasData ? data[data.length - 1].url : '',
  );

  useEffect(() => {
    if (hasData) {
      router.push(`/recommend/${data[hasData - 1].id}`);
    }
  }, [hasData]);

  const handleToggleDropdown = () => {
    if (!!hasData) {
      setSelectedOpen(prev => !prev);
    }
  };

  const handleSelectItem = (item: ResumePDF) => {
    setSelectedItem(item.fileName);
    setSelectedUrl(item.url);
    setSelectedOpen(false);
    router.push(`/recommend/${item.id}`);
  };

  const handleOpenPDF = () => {
    setIsOpen(true);
  };

  const handleClosePDF = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.selectbox}
          onClick={handleToggleDropdown}
          onBlur={() => setSelectedOpen(false)}
          tabIndex={0} // 포커스 관리
        >
          <div>
            <div>{selectedItem}</div>
            <IoIosArrowDown className={cx({'icon-open': selectedOpen})} />
          </div>
          {!!hasData && selectedOpen && (
            <ul className={styles.dropdown}>
              {data.map(item => (
                <li key={item.id} onMouseDown={() => handleSelectItem(item)}>
                  {item.fileName}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles['right-button']}>
          <Button text="이력서 펼치기" height={40} onClick={handleOpenPDF} />
          <Button text="새로고침" color="type2" height={40} />
        </div>
        <div className={styles['mobile-right-button']}>
          <CiFileOn size={24} />
          <IoIosRefresh size={24} />
        </div>
      </div>
      <PreviewModal
        isOpen={isOpen}
        onClose={handleClosePDF}
        pdfUrl={selectedUrl}
      />
    </>
  );
};

export default FilterSelect;
