'use client';

import classNames from 'classnames/bind';
import Image, {StaticImageData} from 'next/image';
import {ButtonHTMLAttributes, useState} from 'react';

import {ResumeTemplateType} from '@/types/ableJ';

import styles from './templateButton.module.scss';

interface TemplateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc: StaticImageData;
  selectedTemplate: ResumeTemplateType;
}

const cx = classNames.bind(styles);

const TemplateButton = ({
  imgSrc,
  selectedTemplate,
  ...props
}: TemplateButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const selected = selectedTemplate === props.value;

  return (
    <button
      className={cx('template')}
      type="button"
      value="BASIC_LIGHT"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <Image
        src={imgSrc}
        alt="템플릿 프리뷰 이미지"
        className={cx('template-image')}
      />
      {isHovered && (
        <button
          className={cx('preview-button', {hover: isHovered || selected})}
        >
          미리보기
        </button>
      )}
    </button>
  );
};

export default TemplateButton;
