import classNames from 'classnames/bind';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {Fragment} from 'react';
import {FaGithub} from 'react-icons/fa';
import {RiNotionLine} from 'react-icons/ri';

import Input from '@/features/portfolio/components/Input';
import SkillCombobox from '@/features/portfolio/components/SkillCombobox';
import ableJ from '@/services/ableJ';

import styles from './skillSection.module.scss';

const cx = classNames.bind(styles);

const SkillSection = async () => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const {data} = await ableJ.getTechStackInfo(accessToken);

  return (
    <Fragment key={data?.techId}>
      <SkillCombobox techSkills={data?.techSkills || null} />
      <div className={cx('skill-input')}>
        <FaGithub size={24} />
        <Input
          placeholder="Github 주소를 입력해주세요."
          name="githubUrl"
          defaultValue={data?.githubUrl || ''}
        />
      </div>
      <div className={cx('skill-input')}>
        <RiNotionLine size={24} />
        <Input
          placeholder="Notion 주소를 입력해주세요."
          name="notionUrl"
          defaultValue={data?.notionUrl || ''}
        />
      </div>
      <input name="techId" hidden defaultValue={data?.techId} />
    </Fragment>
  );
};

export default SkillSection;
