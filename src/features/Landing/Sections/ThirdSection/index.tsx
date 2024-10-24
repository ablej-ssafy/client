import classNames from 'classnames/bind';

import DescriptionCard from '@/features/landing/DescriptionCard';

import styles from './thirdSection.module.scss';

const cx = classNames.bind(styles);

const ThirdSection = () => {
  return (
    <section className={cx('section')}>
      <DescriptionCard />
    </section>
  );
};

export default ThirdSection;
