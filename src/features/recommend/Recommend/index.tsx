'use client';

import {getCookie} from 'cookies-next';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

import CompanyCard from '@/components/common/CompanyCard';
import recruitmentService from '@/services/ableJ';
import {RecruitmentCard} from '@/types/ableJ';

import styles from './recommend.module.scss';

const Recommend = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const resumeId = pathSegments[pathSegments.length - 1];

  const [recruitments, setRecruitments] = useState<RecruitmentCard[]>([]);
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    const fetchRecruitments = async () => {
      if (!resumeId || !accessToken) return;

      try {
        const {data} = await recruitmentService.getRecommendedRecruitments(
          Number(resumeId),
          accessToken,
        );
        setRecruitments(data);
      } catch (error) {
        console.log('추천 공고 가져오는 중 오류 발생', error);
      }
    };

    fetchRecruitments();
  }, []);

  return (
    <div className={styles.container}>
      {!!recruitments &&
        recruitments.map(recruitment => (
          <CompanyCard key={recruitment.id} item={recruitment} />
        ))}
    </div>
  );
};

export default Recommend;
