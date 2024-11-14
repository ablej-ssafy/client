'use client';

import CompanyRecruitmentCard from '@/components/common/CompanyRecruitmentCard';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import useInfiniteRecruitment from '@/hooks/useInfiniteRecruitment';
import {Search} from '@/types/ableJ';

import styles from './resultBox.module.scss';

interface ResultBoxProps {
  keyword?: string;
  categoryId?: string;
  initialRecruitments: Search[];
}

const ResultBox = ({
  initialRecruitments,
  keyword,
  categoryId,
}: ResultBoxProps) => {
  const {recruitments, scrap, fetchNextPage, isLoading} =
    useInfiniteRecruitment({
      initialRecruitments,
      keyword,
      categoryId: Number(categoryId),
    });

  return (
    <div className={styles.container}>
      <p className={styles['result-count']}>
        총 {recruitments.length}개의 채용 공고가 있습니다.
      </p>
      <div className={styles['result-box']}>
        <InfiniteScroll onIntersect={fetchNextPage}>
          {recruitments.length > 0 &&
            recruitments.map((recruitment, index) => {
              return (
                <CompanyRecruitmentCard
                  key={`${recruitment.recruitmentId}-${index}`}
                  recruitmentId={recruitment.recruitmentId}
                  name={recruitment.name}
                  thumbnail={recruitment.thumbnail}
                  companyName={recruitment.companyName}
                  scrap={() =>
                    scrap({
                      recruitmentId: recruitment.recruitmentId,
                      isScrap: recruitment.scrapped,
                    })
                  }
                  isScrap={recruitment.scrapped}
                />
              );
            })}
          {isLoading && <div>Loading more...</div>}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ResultBox;
