'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import {useState} from 'react';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import RecruitmentTag from '@/features/recruitment/Detail/RecruitmentTag';
import {Category, Company} from '@/types/ableJ';

import styles from './recruitmentTitle.module.scss';

const cx = classNames.bind(styles);

interface RecruitmentTitleProps {
  name: string;
  category: Category;
  childCategories: Category[];
  company: Company;
  hireRound?: string;
  dueTime?: Date;
  annualTo: number;
  annualFrom?: number;
  thumbnail: string;
}

const RecruitmentTitle = ({
  name,
  category,
  childCategories,
  company,
  hireRound,
  dueTime,
  annualTo,
  annualFrom,
  thumbnail,
}: RecruitmentTitleProps) => {
  const [isScrap, setIsScrap] = useState(false);
  const location = company.location + ' > ' + company.strict;
  const annual = annualFrom
    ? `${annualFrom} ~ ${annualTo}년`
    : `${annualTo}년 이상`;
  const hire = hireRound ? `(${hireRound})` : '';
  const closedDate = dueTime ? dueTime.toISOString().slice(0, 10) : '상시 채용';
  const categoryJoin = `${category.name} > ${childCategories.map(child => child.name).join(', ')}`;

  const handleClick = () => {
    setIsScrap(!isScrap);
  };

  console.log('thunbnail', thumbnail);

  return (
    <div>
      <div className={cx('display-row', 'margin-y')}>
        <div className={styles['display-row']}>
          <Image
            className={styles['margin-right']}
            src={thumbnail}
            alt="회사 로고"
            width={45}
            height={45}
          />
          <span className={styles['text-bold-18']}>{company.name}</span>
        </div>
        <div className={styles.circle} onClick={handleClick}>
          {isScrap ? <MdBookmark size={25} /> : <MdBookmarkBorder size={25} />}
        </div>
      </div>
      <span className={styles['text-bold-24']}>{name}</span>
      <div className={styles['margin-y']}>
        <RecruitmentTag title="근무 지역" content={location} />
        <RecruitmentTag title="경력" content={`${annual} ${hire}`} />
        <RecruitmentTag title="마감일" content={closedDate} />
        <RecruitmentTag title="직무" content={categoryJoin} />
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default RecruitmentTitle;
