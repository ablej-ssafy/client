import classNames from 'classnames/bind';
import {Fragment} from 'react';
import {FaGithub} from 'react-icons/fa';
import {RiNotionLine} from 'react-icons/ri';

import Input from '@/features/portfolio/components/Input';
import SkillCombobox from '@/features/portfolio/components/SkillCombobox';
import {GetTechStackInfoResponseData} from '@/types/ableJ';

import styles from './skillSection.module.scss';

interface SkillSectionProps {
  techStackInfo: GetTechStackInfoResponseData;
}

const cx = classNames.bind(styles);

const SkillSection = ({techStackInfo}: SkillSectionProps) => {
  return (
    <Fragment key={techStackInfo.techId}>
      <SkillCombobox techSkills={techStackInfo?.techSkills || null} />
      <div className={cx('skill-input')}>
        <FaGithub size={24} />
        <Input
          placeholder="Github 주소를 입력해주세요."
          name="githubUrl"
          defaultValue={techStackInfo?.githubUrl || ''}
        />
      </div>
      <div className={cx('skill-input')}>
        <RiNotionLine size={24} />
        <Input
          placeholder="Notion 주소를 입력해주세요."
          name="notionUrl"
          defaultValue={techStackInfo?.notionUrl || ''}
        />
      </div>
      <input name="techId" hidden defaultValue={techStackInfo?.techId} />
    </Fragment>
  );
};

export default SkillSection;
