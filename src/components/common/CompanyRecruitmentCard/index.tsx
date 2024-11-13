import Image from 'next/image';
import Link from 'next/link';

import CardScrapButton from '@/components/common/CardScrapButton';

import styles from './companyRecruitmentCard.module.scss';

interface CompanyRecruitmentCardProps {
  recruitmentId: number;
  name: string;
  thumbnail: string;
  companyName: string;
  isScrap: boolean;
  tag?: string;
}

const CompanyRecruitmentCard = ({
  recruitmentId,
  name,
  thumbnail,
  companyName,
  isScrap,
  tag,
}: CompanyRecruitmentCardProps) => {
  return (
    <Link href={`/recruitments/${recruitmentId}`} className={styles.link}>
      <div className={styles.container}>
        <Image
          src={thumbnail}
          alt="sample_img"
          width={280}
          height={180}
          quality={100}
          objectFit="cover"
          className={styles.img}
        />
        <div className={styles['scrap-button']}>
          <CardScrapButton
            recruitmentId={recruitmentId}
            isScrap={isScrap}
            tag={tag}
          />
        </div>
        <div className={styles['job-title']}>{name}</div>
        <span className={styles['company-name']}>{companyName}</span>
      </div>
    </Link>
  );
};

export default CompanyRecruitmentCard;
