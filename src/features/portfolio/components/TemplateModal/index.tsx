import classNames from 'classnames/bind';
import type {MouseEvent, MouseEventHandler} from 'react';

import BasicDarkImage from '@/assets/images/basic_dark.png';
import BasicLightImage from '@/assets/images/basic_light.png';
import ModernDarkImage from '@/assets/images/modern_dark.png';
import ModernLightImage from '@/assets/images/modern_light.png';
import TemplateButton from '@/features/portfolio/components/TemplateButton';
import {ResumeTemplateType} from '@/types/ableJ';

import styles from './templateModal.module.scss';

interface TemplateModalProps {
  selectedTemplate?: ResumeTemplateType;
  onClickOutside: () => void;
  onSelectedTemplate: MouseEventHandler<HTMLButtonElement>;
}

const cx = classNames.bind(styles);

const TemplateModal = ({
  selectedTemplate = 'BASIC_LIGHT',
  onClickOutside,
  onSelectedTemplate,
}: TemplateModalProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onClickOutside();
  };

  return (
    <div className={cx('backdrop')} onClick={handleClose}>
      <div className={cx('template-modal')}>
        <h2 className={cx('template-modal-title')}>템플릿 선택</h2>
        <div className={cx('template-container')}>
          <TemplateButton
            imgSrc={BasicLightImage}
            value="BASIC_LIGHT"
            selectedTemplate={selectedTemplate}
            onClick={onSelectedTemplate}
          />
          <TemplateButton
            imgSrc={BasicDarkImage}
            value="BASIC_DARK"
            selectedTemplate={selectedTemplate}
            onClick={onSelectedTemplate}
          />
          <TemplateButton
            imgSrc={ModernLightImage}
            value="MODERN_LIGHT"
            selectedTemplate={selectedTemplate}
            onClick={onSelectedTemplate}
          />
          <TemplateButton
            imgSrc={ModernDarkImage}
            value="MODERN_DARK"
            selectedTemplate={selectedTemplate}
            onClick={onSelectedTemplate}
          />
        </div>
      </div>
    </div>
  );
};
export default TemplateModal;
