'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

import DeleteScrapAction from '@/actions/recruitment/deleteScrapAction';
import ScrapAction from '@/actions/recruitment/scrapAction';
import {RecruitmentCardType} from '@/types/ableJ';
import {useRootStore} from '@/zustand/rootStore';

import styles from './recruitmentCard.module.scss';

interface RecruitmentCardProps {
  item?: RecruitmentCardType;
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

const RecruitmentCard = ({
  item = dummy,
  scrap = true,
}: RecruitmentCardProps) => {
  const [isScrapped, setIsScrapped] = useState(item.scrapped);
  const toggleScrapStatus = useRootStore(state => state.toggleScrapStatus);

  const handleScrap = async () => {
    const result = isScrapped
      ? await DeleteScrapAction(item.id)
      : await ScrapAction(item.id);

    if (result.success) {
      const newScrappedState = !isScrapped;
      setIsScrapped(newScrappedState);

      toggleScrapStatus(item.id, newScrappedState);
    } else {
      console.error(isScrapped ? '스크랩 취소 실패' : '스크랩 실패');
    }
  };

  return (
    <Link href={`/recruitments/${item.id}`} className={styles.link}>
      <div className={styles.container}>
        <Image
          src={item.thumbnail}
          alt="sample_img"
          width={280}
          height={180}
          quality={100}
          className={styles.img}
        />
        {scrap && (
          <div
            onClick={e => {
              e.preventDefault();
              handleScrap();
            }}
          >
            {isScrapped ? <FaBookmark /> : <FaRegBookmark />}
          </div>
        )}
        <div className={styles['job-title']}>{item.title}</div>
        <div className={styles['company-name']}>
          {item.companyName}
          {scrap && <span>적합률 {Math.round(item.similarity * 100)}%</span>}
        </div>
      </div>
    </Link>
  );
};

export default RecruitmentCard;
