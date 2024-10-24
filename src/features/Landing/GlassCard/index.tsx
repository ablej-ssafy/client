import classNames from 'classnames/bind';

import styles from './glassCard.module.scss';

const cx = classNames.bind(styles);

const GlassCard = () => {
  return (
    <div className={cx('glass-card')}>
      <div className={cx('card-section')}>
        <p>
          지금까지 <span className={cx('strong')}>AI HeadHunting</span>을 사용해
          취업한 <span>구직자 수</span>
        </p>
      </div>
      <div className={cx('card-section')}>
        <p>
          <span className={cx('number')}>10000</span>+
        </p>
      </div>
    </div>
  );
};

export default GlassCard;
