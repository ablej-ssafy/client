import classNames from 'classnames/bind';

import CompanyCard from '@/components/common/CompanyCard';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const ScrapPage = () => {
  return (
    <main className={cx('page')}>
      {Array.from({length: 10}, () => null).map((_, i) => (
        <CompanyCard key={i} />
      ))}
    </main>
  );
};

export default ScrapPage;
