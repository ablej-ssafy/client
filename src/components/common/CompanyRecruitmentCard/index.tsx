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
}

const CompanyRecruitmentCard = ({
  recruitmentId,
  name,
  thumbnail,
  companyName,
  isScrap,
}: CompanyRecruitmentCardProps) => {
  return (
    <div className={styles.container}>
      <Link
        href={`/recruitments/${recruitmentId}`}
        className={styles.link}
        prefetch={false}
      >
        <Image
          src={thumbnail}
          alt="sample_img"
          width={280}
          height={180}
          quality={100}
          className={styles.img}
        />
      </Link>
      <CardScrapButton recruitmentId={recruitmentId} isScrap={isScrap} />
      <div className={styles['job-title']}>{name}</div>
      <span className={styles['company-name']}>{companyName}</span>
    </div>
  );
};

export default CompanyRecruitmentCard;
