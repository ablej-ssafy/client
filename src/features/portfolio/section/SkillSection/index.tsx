import classNames from 'classnames/bind';
import {Fragment} from 'react';
import {FaGithub} from 'react-icons/fa';
import {RiNotionLine} from 'react-icons/ri';

import Input from '@/features/portfolio/components/Input';
import SkillCombobox from '@/features/portfolio/components/SkillCombobox';
import {GetTechStackInfoResponseData} from '@/types/ableJ';

import styles from './skillSection.module.scss';

const cx = classNames.bind(styles);

interface SkillSectionProps {
  techSkill?: GetTechStackInfoResponseData;
  readOnly?: boolean;
}

const SkillSection = async ({techSkill, readOnly}: SkillSectionProps) => {
  return (
    <Fragment key={techSkill?.techId}>
      <SkillCombobox
        techSkills={techSkill?.techSkills || null}
        readOnly={readOnly}
      />
      <div className={cx('skill-input')}>
        <FaGithub size={24} />
        <Input
          placeholder="Github 주소를 입력해주세요."
          name="githubUrl"
          defaultValue={techSkill?.githubUrl || ''}
          readOnly={readOnly}
        />
      </div>
      <div className={cx('skill-input')}>
        <RiNotionLine size={24} />
        <Input
          placeholder="Notion 주소를 입력해주세요."
          name="notionUrl"
          defaultValue={techSkill?.notionUrl || ''}
          readOnly={readOnly}
        />
      </div>
      <input name="techId" hidden defaultValue={techSkill?.techId} />
    </Fragment>
  );
};

export default SkillSection;
