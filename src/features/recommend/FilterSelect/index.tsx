'use client';

import classNames from 'classnames/bind';
import {usePathname, useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {CiFileOn} from 'react-icons/ci';
import {IoIosArrowDown, IoIosRefresh} from 'react-icons/io';

import Button from '@/components/common/Button';
import PreviewModal from '@/features/resume/PreViewModal';
import {ResumePDF} from '@/types/ableJ';
import {useRootStore} from '@/zustand/rootStore';

import styles from './filterSelect.module.scss';

const cx = classNames.bind(styles);

interface ResumePDFProps {
  data: ResumePDF[];
}

const FilterSelect = ({data = []}: ResumePDFProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathLast = pathname.split('/')[2];
  const hasData = data.length;
  const [selectedOpen, setSelectedOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('선택된 파일이 없습니다');
  const [selectedUrl, setSelectedUrl] = useState('');

  useEffect(() => {
    if (hasData) {
      if (pathLast) {
        const selectedData = data.find(item => item.id === Number(pathLast));
        if (selectedData) {
          setSelectedItem(selectedData.fileName);
          setSelectedUrl(selectedData.url);
        }
      } else {
        setSelectedItem(data[data.length - 1].fileName);
        setSelectedUrl(data[data.length - 1].url);
        router.push(`/recommend/${data[hasData - 1].id}`);
      }
    }
  }, [hasData, pathLast, data, router]);

  const handleToggleDropdown = () => {
    if (!!hasData) {
      setSelectedOpen(prev => !prev);
    }
  };

  // selectBox 선택
  const handleSelectItem = (item: ResumePDF) => {
    setSelectedItem(item.fileName);
    setSelectedUrl(item.url);
    setSelectedOpen(false);
    router.push(`/recommend/${item.id}`);
  };

  // 이력서 펼치기
  const handleOpenPDF = () => {
    setIsOpen(true);
  };

  // 이력서 닫기
  const handleClosePDF = () => {
    setIsOpen(false);
  };

  // 새로고침
  const handleRefresh = () => {
    const recommendData = sessionStorage.getItem('recommend');
    const pathId = Number(pathLast);

    if (recommendData) {
      const parsedData = JSON.parse(recommendData);

      if (parsedData.state && parsedData.state.recruitments) {
        delete parsedData.state.recruitments[pathId];

        sessionStorage.setItem('recommend', JSON.stringify(parsedData));
        useRootStore.setState(state => {
          const updatedRecruitments = {...state.recruitments};
          delete updatedRecruitments[pathId];
          return {recruitments: updatedRecruitments};
        });
      }
    }

    router.replace(`/recommend/${pathId}`);
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
              {data
                .slice()
                .reverse()
                .map(item => (
                  <li key={item.id} onMouseDown={() => handleSelectItem(item)}>
                    {item.fileName}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className={styles['right-button']}>
          <Button text="이력서 펼치기" height={40} onClick={handleOpenPDF} />
          <Button
            text="새로고침"
            color="type2"
            height={40}
            onClick={handleRefresh}
          />
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
