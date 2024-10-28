import classNames from 'classnames/bind';
import React from 'react';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('section')}>
        <p>
          <a href="tel:0200000000">문의전화: 02-0000-0000</a>
          <span>(운영시간: 평일 11:00 - 18:00)</span>
          <a href="mailto:support@headhunting.me">support@headhunting.me</a>
        </p>
        <p>
          <span>에이블제이 주식회사</span>
          <span>대표 박경호</span>
          <span>사업자 등록번호: 000-00-00000</span>
        </p>
        <p>경기도 성남시 수정구 대왕판교로 815, 7층 703호</p>
      </div>
      <div className={cx('section')}>
        <p>
          <span>이용약관</span>
          <span>개인정보처리 방침</span>
        </p>
        <p>2024 HeadHunting. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
