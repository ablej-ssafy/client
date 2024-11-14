import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import RecruitmentTag from '@/features/recruitment/Detail/RecruitmentTag';
import {Category, Company} from '@/types/ableJ';
import {convertAnnual} from '@/utils/annual';
import {convertLocation} from '@/utils/location';

import styles from './recruitmentTitle.module.scss';

const cx = classNames.bind(styles);

interface RecruitmentTitleProps {
  name: string;
  category: Category;
  childCategories: Category[];
  company: Company;
  dueTime?: string;
  annualTo: number;
  annualFrom: number;
  thumbnail: string;
}

const RecruitmentTitle = ({
  name,
  category,
  childCategories,
  company,
  dueTime,
  annualTo,
  annualFrom,
  thumbnail,
}: RecruitmentTitleProps) => {
  const location = convertLocation(company.location, company.strict);
  const annual = convertAnnual(annualTo, annualFrom);
  const closedDate = dueTime || '상시 채용';
  const categoryJoin = `${category.name} > ${childCategories.map(child => child.name).join(', ')}`;
  return (
    <div>
      <div className={cx('display-row', 'margin-y')}>
        <Link
          className={styles['display-row']}
          href={`/company/${company.companyId}`}
        >
          <Image
            className={styles['margin-right']}
            src={thumbnail}
            alt="회사 로고"
            width={45}
            height={45}
          />
          <span className={styles['text-bold-18']}>{company.name}</span>
        </Link>
      </div>
      <span className={styles['text-bold-24']}>{name}</span>
      <div className={styles['margin-y']}>
        <RecruitmentTag title="근무 지역" content={location} />
        <RecruitmentTag title="경력" content={annual} />
        <RecruitmentTag title="마감일" content={closedDate} />
        <RecruitmentTag title="직무" content={categoryJoin} />
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default RecruitmentTitle;
