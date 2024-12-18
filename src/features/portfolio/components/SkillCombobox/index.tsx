'use client';
import classNames from 'classnames/bind';
import {MouseEvent, useRef, useState} from 'react';
import {IoIosClose} from 'react-icons/io';

import Input from '@/features/portfolio/components/Input';
import useClickOutside from '@/hooks/useClickOutside';
import useSkills from '@/hooks/useSkills';
import {Skill} from '@/types/ableJ';

import styles from './skillCombobox.module.scss';

interface SkillComboboxProps {
  techSkills: Skill[] | null;
  readOnly?: boolean;
}

const cx = classNames.bind(styles);

const SkillCombobox = ({techSkills, readOnly}: SkillComboboxProps) => {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<Skill['skillId'][]>(
    techSkills?.map(techSkill => techSkill.skillId) || [],
  );
  const skills = useSkills();
  const listRef = useRef<HTMLDivElement>(null);
  useClickOutside(listRef, () => setIsOpen(false));

  const handleClickSkill = (e: MouseEvent<HTMLButtonElement>) => {
    const skillId = +e.currentTarget.value;
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter(id => id !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  const handleDeleteSkill = (e: MouseEvent<HTMLButtonElement>) => {
    const skillId = +e.currentTarget.value;
    if (!selectedSkills.includes(skillId)) return;
    setSelectedSkills(selectedSkills.filter(id => id !== skillId));
  };

  return (
    <div className={cx('skill-combobox')} ref={listRef}>
      <div className={cx('skill-combobox-input')}>
        <Input
          isLabeled
          label="기술 스택 (업무 툴/스킬)"
          placeholder="기술 스택을 선택해주세요."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onFocus={() => setIsOpen(true)}
          readOnly={readOnly}
        />
        {isOpen && (
          <ul className={cx('skill-list')}>
            {skills
              .filter(
                skill =>
                  keyword &&
                  skill.skillName.toUpperCase().includes(keyword.toUpperCase()),
              )
              .map(skill => (
                <li
                  key={skill.skillId}
                  className={cx('skill-item', {
                    selected: selectedSkills.includes(skill.skillId),
                  })}
                >
                  <button
                    value={skill.skillId}
                    onClick={handleClickSkill}
                    type="button"
                  >
                    {skill.skillName}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className={cx('selected-skills')}>
        {skills
          .filter(skill => selectedSkills.includes(skill.skillId))
          .map(skill => (
            <>
              <button
                key={skill.skillId}
                value={skill.skillId}
                className={cx('skill-item')}
                onClick={handleDeleteSkill}
                disabled={readOnly}
              >
                <IoIosClose size={20} />
                {skill.skillName}
              </button>
              <input hidden defaultValue={skill.skillId} name="techSkills" />
            </>
          ))}
      </div>
    </div>
  );
};

export default SkillCombobox;
