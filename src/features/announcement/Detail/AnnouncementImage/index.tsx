import Image from 'next/image';

import Image1 from '@/assets/images/announcement1.png';
import Image2 from '@/assets/images/announcement2.png';

import styles from './announcementImage.module.scss';

const AnnouncementImage = () => {
  return (
    <div className={styles['image-container']}>
      <Image
        src={Image1}
        alt="회사 이미지"
        width={650}
        height={350}
        className={styles.image}
      />
      <Image
        src={Image2}
        alt="회사 이미지"
        width={650}
        height={350}
        className={styles.image}
      />
    </div>
  );
};

export default AnnouncementImage;
