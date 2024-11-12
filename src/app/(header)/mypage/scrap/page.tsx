import classNames from 'classnames/bind';

import RecruitmentCard from '@/components/common/RecruitmentCard';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const ScrapPage = () => {
  return (
    <main className={cx('page')}>
      {Array.from({length: 10}, () => null).map((_, i) => (
        <RecruitmentCard key={i} />
      ))}
    </main>
  );
};

export default ScrapPage;
