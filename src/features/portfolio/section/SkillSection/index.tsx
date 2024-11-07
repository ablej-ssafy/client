import classNames from 'classnames/bind';
import {FaGithub} from 'react-icons/fa';
import {RiNotionLine} from 'react-icons/ri';

import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SkillCombobox from '@/features/portfolio/components/SkillCombobox';

import styles from './skillSection.module.scss';

const cx = classNames.bind(styles);

const SkillSection = () => {
  return (
    <Board>
      <SectionHeader title="기술 스택" />
      <Divider />
      <SkillCombobox />
      <div className={cx('skill-input')}>
        <FaGithub size={24} />
        <Input placeholder="Github 주소를 입력해주세요." />
      </div>
      <div className={cx('skill-input')}>
        <RiNotionLine size={24} />
        <Input placeholder="Notion 주소를 입력해주세요." />
      </div>
    </Board>
  );
};

export default SkillSection;
