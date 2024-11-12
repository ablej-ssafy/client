import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

import DeleteScrapAction from '@/actions/recruitment/deleteScrapAction';
import ScrapAction from '@/actions/recruitment/scrapAction';
import {RecruitmentCard} from '@/types/ableJ';
import {useRootStore} from '@/zustand/rootStore';

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
  const [isScrapped, setIsScrapped] = useState(item.scrapped);

  const handleScrap = async () => {
    const result = isScrapped
      ? await DeleteScrapAction(item.id)
      : await ScrapAction(item.id);

    if (result.success) {
      const newScrappedState = !isScrapped;
      setIsScrapped(newScrappedState);

      const recommendData = sessionStorage.getItem('recommend');
      if (recommendData) {
        // 세션 스토리지 데이터 업데이트
        const parsedData = JSON.parse(recommendData);
        const recruitments = parsedData.state.recruitments;

        Object.keys(recruitments).forEach(key => {
          recruitments[key] = recruitments[key].map(
            (recruitment: RecruitmentCard) =>
              recruitment.id === item.id
                ? {...recruitment, scrapped: newScrappedState}
                : recruitment,
          );
        });

        parsedData.state.recruitments = recruitments;
        sessionStorage.setItem('recommend', JSON.stringify(parsedData));

        // zustand 데이터 업데이트
        useRootStore.setState(state => {
          const updatedRecruitments: {[key: string]: RecruitmentCard[]} = {
            ...state.recruitments,
          };
          Object.keys(updatedRecruitments).forEach(key => {
            updatedRecruitments[key] = updatedRecruitments[key].map(
              (recruitment: RecruitmentCard) =>
                recruitment.id === item.id
                  ? {...recruitment, scrapped: newScrappedState}
                  : recruitment,
            );
          });
          return {recruitments: updatedRecruitments};
        });
      }
    } else {
      console.error(isScrapped ? '스크랩 취소 실패' : '스크랩 실패');
    }
  };

  return (
    <Link href={`/recruitment/${item.id}`} className={styles.link}>
      <div className={styles.container}>
        <Image
          src={item.thumbnail}
          alt="sample_img"
          width={280}
          height={180}
          quality={100}
          objectFit="cover"
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
          {scrap && <span>적합률 {Math.round(item.similarity * 100)}</span>}
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
