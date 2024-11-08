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
  id: 2143,
  title: '[광고 추천팀] 머신러닝 엔지니어 (신입, 전문연구요원 지원 가능)',
  companyName: '버즈빌(buzzvil)',
  thumbnail:
    'https://static.wanted.co.kr/images/company/99/8hp072pdi8l7xh7o__400_400.jpg',
  similarity: 0.8176840604652934,
  scrapped: false,
};

const CompanyCard = ({item = dummy, scrap = true}: CompanyCardProps) => {
  return (
    <Link href={`/recruitment/${item.id}`} className={styles.link}>
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
        <div className={styles['job-title']}>{item.title}</div>
        <div className={styles['company-name']}>{item.companyName}</div>
      </div>
    </Link>
  );
};

export default CompanyCard;
