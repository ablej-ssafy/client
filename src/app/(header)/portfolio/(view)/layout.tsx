'use client';

import classNames from 'classnames/bind';
import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {DragEvent, PropsWithChildren, useState} from 'react';
import toast from 'react-hot-toast';

import DragAndDropMenu from '@/features/portfolio/components/DragAndDropMenu';
import ableJ from '@/services/ableJ';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const PortfolioLayout = ({children}: PropsWithChildren) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsActive(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDropPdf = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(false);

    const resume = e.dataTransfer.files[0];

    if (resume.type !== 'application/pdf') {
      toast.error('PDF 파일만 업로드 가능합니다.');
      return;
    }

    const accessToken = getCookie('accessToken');

    if (!accessToken) router.replace('/signin');

    await ableJ.uploadResume(resume, accessToken as string);
  };

  return (
    <div className={cx('container')}>
      <main
        className={cx('main', {active: isActive})}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDropPdf}
      >
        {children}
      </main>
      <aside className={cx('sidebar')}>
        <DragAndDropMenu />
      </aside>
    </div>
  );
};

export default PortfolioLayout;
