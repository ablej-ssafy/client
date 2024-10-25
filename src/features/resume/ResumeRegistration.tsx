'use client';

import classNames from 'classnames/bind';
import React, {
  ChangeEvent,
  DragEvent,
  KeyboardEvent,
  useRef,
  useState,
} from 'react';

import Button from '@/components/common/Button';

import styles from './resumeRegistration.module.scss';

// 파일 확장자 검사
const isValidFileType = (file: File, allowedTypes: string[]) => {
  if (allowedTypes.includes(file.type)) {
    console.log('유효한 파일이 선택되었습니다:', file);
    return true;
  } else {
    console.log(`${allowedTypes} 파일만 업로드할 수 있습니다.`);
    return false;
  }
};

const cx = classNames.bind(styles);

const ResumeRegistration = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 선택 시
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFileType(selectedFile, ['application/pdf'])) {
      setFile(selectedFile);
      e.target.value = '';
    }
  };

  // 파일 드래그 시
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const selectedFile = e.dataTransfer.files?.[0];
    if (isValidFileType(selectedFile, ['application/pdf'])) {
      setFile(selectedFile);
    }
  };

  // 접근성을 위한 key 동작 추가
  const handleKeyDown = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      fileInputRef.current?.click();
    }
  };

  // 파일 등록 - 임시 함수입니다. 로직 이사갈 예정
  const handleUpload = async () => {
    if (!file) {
      return;
    }

    console.log('이력서 등록 요청');

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await fetch('https://noteme.kro.kr/api/v1/resume/pdf', {
        method: 'POST',
        // headers: {
        //   Authorization: 'Bearer ',
        // },
        body: formData,
      });

      const result = await response.json();
      console.log('파일 업로드 성공:', result);
    } catch (error) {
      console.error('업로드 중 오류 발생:', error);
    }
  };

  // 파일 변경을 위한 선택 파일 제거
  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className={styles.container}>
      <h2>PDF 이력서 등록</h2>
      <div
        className={cx('upload', {dragging: isDragging})}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!file ? (
          <>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              id="file"
            />
            <label htmlFor="file" tabIndex={0} onKeyDown={handleKeyDown}>
              <Button text="업로드 파일 선택" />
            </label>
            <p>또는 파일을 이곳으로 드래그합니다</p>
          </>
        ) : (
          <div className={styles['file-selected']}>
            <p>파일을 업로드 하시겠습니까?</p>
            <div className={styles.title}>{file.name}</div>
            <Button color="type2" text="이력서 업로드" onClick={handleUpload} />
            <div className={styles['change-file']} onClick={handleRemoveFile}>
              다른 파일 선택
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeRegistration;
