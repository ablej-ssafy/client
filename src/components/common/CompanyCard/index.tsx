import Image from 'next/image';
import Link from 'next/link';
import {FaRegBookmark} from 'react-icons/fa6';

import {RecruitmentCard} from '@/types/ableJ';

import styles from './companyCard.module.scss';

interface CompanyCardProps {
  item?: RecruitmentCard;
  scrap?: boolean;
}

const dummy = {
  recruitmentId: 0,
  name: '공고의 이름 자리 입니다.',
  thumbnail: '',
  companyId: 0,
  companyName: '회사 이름',
  location: '회사 위치',
  strict: '뭔데 이거',
  category: '카테고리',
  scrapped: false,
};

const CompanyCard = ({
  item = dummy,
  scrap = true,
}: CompanyCardProps): JSX.Element => {
  return (
    <Link href={`/recruitment/${item.recruitmentId}`} className={styles.link}>
      <div className={styles.container}>
        <Image
          src={item.thumbnail}
          alt="sample_img"
          width={280}
          height={180}
          quality={100}
          className={styles.img}
        />
        {scrap && <FaRegBookmark />}
        <div className={styles['job-title']}>{item.name}</div>
        <div className={styles['company-name']}>{item.companyName}</div>
      </div>
    </Link>
  );
};

export default CompanyCard;
