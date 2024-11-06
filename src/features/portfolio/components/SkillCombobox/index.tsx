import classNames from 'classnames/bind';
import {useState} from 'react';

import Input from '@/features/portfolio/components/Input';

import styles from './skillCombobox.module.scss';

const cx = classNames.bind(styles);

const DUMMY_SKILLS = [
  {id: 1, name: 'React'},
  {id: 2, name: 'TypeScript'},
  {id: 3, name: 'JavaScript'},
  {id: 4, name: 'HTML'},
  {id: 5, name: 'CSS'},
  {id: 6, name: 'Sass'},
  {id: 7, name: 'Styled-components'},
  {id: 8, name: 'Redux'},
  {id: 9, name: 'MobX'},
  {id: 10, name: 'GraphQL'},
  {id: 11, name: 'Apollo'},
  {id: 12, name: 'REST API'},
  {id: 13, name: 'Node.js'},
  {id: 14, name: 'Express'},
  {id: 15, name: 'MongoDB'},
];

const SkillCombobox = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className={cx('skill-combobox')}>
      <Input
        isLabeled
        label="기술 스택 (업무 툴/스킬)"
        placeholder="기술 스택을 등록해주세요."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      {DUMMY_SKILLS.filter(skill =>
        skill.name.toUpperCase().includes(keyword.toUpperCase()),
      ).map(skill => (
        <button value={skill.id} key={skill.id}>
          {skill.name}
        </button>
      ))}
    </div>
  );
};

export default SkillCombobox;
