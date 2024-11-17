'use client';

import classNames from 'classnames/bind';
import {getCookie} from 'cookies-next';
import {useRouter} from 'next/navigation';
import {ChangeEvent, DragEvent, PropsWithChildren, useState} from 'react';
import toast from 'react-hot-toast';

import toggleResumeVisibilityAction from '@/actions/resume/toggleResumeVisibilityAction';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ToggleButton from '@/components/common/ToggleButton';
import DragAndDropMenu from '@/features/portfolio/components/DragAndDropMenu';
import useResumeInfo from '@/hooks/useResumeInfo';
import ableJ from '@/services/ableJ';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

const PortfolioLayout = ({children}: PropsWithChildren) => {
  const router = useRouter();
  const {resumeInfo, fetchResumeInfo} = useResumeInfo();
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = getCookie('accessToken');

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

    setIsLoading(true);
    await ableJ.uploadResume(resume, accessToken as string);
    setIsLoading(false);
    router.push('/portfolio/auto');
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || file.type !== 'application/pdf') {
      toast.error('PDF 파일만 업로드 가능합니다.');
      return;
    }
    setIsLoading(true);
    await ableJ.uploadResume(file, accessToken as string);
    setIsLoading(false);
    router.push('/portfolio/auto');
  };

  const handleVisibility = async () => {
    await toggleResumeVisibilityAction(resumeInfo!.private);
    await fetchResumeInfo();
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
        <div className={cx('button-container')}>
          <div className={cx('toggle-button')}>
            공개
            <ToggleButton
              onToggle={handleVisibility}
              isToggled={!!resumeInfo?.private}
            />
          </div>
          <DragAndDropMenu />
        </div>
        <div className={cx('button-container')}>
          <label className={cx('template-button')}>
            이력서 업로드
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </label>
          <button className={cx('template-button')}>템플릿 선택</button>
        </div>
      </aside>
      {isLoading && (
        <div className={cx('loading')}>
          <p className={cx('loading-description')}>
            이력서 데이터를 AI가 읽고 있습니다
          </p>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default PortfolioLayout;
