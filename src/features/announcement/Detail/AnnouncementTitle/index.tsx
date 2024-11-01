import classNames from 'classnames/bind';
import Image from 'next/image';
import {LuBookmark} from 'react-icons/lu';

import companyLogo from '@/assets/images/companylogo.png';
import AnnouncementTag from '@/features/announcement/Detail/AnnouncementTag';

import styles from './announcementTitle.module.scss';

const cx = classNames.bind(styles);

const AnnouncementTitle = () => {
  return (
    <div>
      <div className={cx('display-row', 'margin-y')}>
        <div className={styles['display-row']}>
          <Image
            className={styles['margin-right']}
            src={companyLogo}
            alt="회사 로고"
            width={45}
            height={45}
          />
          <span className={styles['text-bold-18']}>미리디</span>
        </div>
        <div className={styles.circle}>
          <LuBookmark size={25} />
        </div>
      </div>
      <span className={styles['text-bold-24']}>
        [커머스프로덕션] 프론트엔드 개발자
      </span>
      <div className={styles['margin-y']}>
        <AnnouncementTag title="근무 지역" content="서울 > 구로구" />
        <AnnouncementTag title="경력" content="3-10년" />
        <AnnouncementTag title="마감일" content="10.11" />
        <AnnouncementTag title="직무" content="프론트엔드" />
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default AnnouncementTitle;
