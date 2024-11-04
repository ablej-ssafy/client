'use client';

import classNames from 'classnames/bind';
import type {ChangeEvent, DragEvent, FormEvent, KeyboardEvent} from 'react';
import React, {useRef, useState} from 'react';
import {useFormState} from 'react-dom';
import {IoMdClose} from 'react-icons/io';

import resumeUpdateAction from '@/actions/resume/resumeUpdateAction';
import Button from '@/components/common/Button';

import styles from './resumeRegistration.module.scss';

// 파일 확장자 검사
const isValidFileType = (file: File, allowedTypes: string[]) => {
  return allowedTypes.includes(file.type) ? true : false;
};

const cx = classNames.bind(styles);
const INITIAL_STATE = {file: null, error: '', success: false};

const ResumeRegistration = () => {
  const [, formAction] = useFormState(resumeUpdateAction, INITIAL_STATE);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log('선택된 파일이 없습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formAction(formData);
  };

  // 접근성을 위한 key 동작 추가
  const handleKeyDown = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      fileInputRef.current?.click();
    }
  };

  // 파일 변경을 위한 선택 파일 제거
  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className={styles.container}>
      <h2>PDF 이력서 등록</h2>
      <form onSubmit={handleSubmit} className={cx('upload-form')}>
        <div
          className={cx('upload', {dragging: isDragging})}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            id="file"
            ref={fileInputRef}
            name="file"
          />
          {!file ? (
            <>
              <label htmlFor="file" tabIndex={0} onKeyDown={handleKeyDown}>
                <Button text="업로드 파일 선택" />
              </label>
              <p>또는 파일을 이곳으로 드래그합니다</p>
            </>
          ) : (
            <div className={styles['file-selected']}>
              <p>파일을 업로드 하시겠습니까?</p>
              <div className={styles.title}>
                {file.name}
                <IoMdClose size={16} onClick={handleRemoveFile} />
              </div>
              <button type="submit">
                <Button color="type2" text="이력서 업로드" />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResumeRegistration;
