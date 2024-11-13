'use client';

import useInfiniteRecruitment from '@/actions/recruitment/useInfiniteRecruitment';
import recruitmentScrapAction from '@/actions/scrap/recruitmentScrapAction';
import CompanyRecruitmentCard from '@/components/common/CompanyRecruitmentCard';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import {Search} from '@/types/ableJ';

import styles from './resultBox.module.scss';

interface ResultBoxProps {
  keyword: string | undefined;
  categoryId: string | undefined;
  initialRecruitments: Search[];
}

const ResultBox = ({
  initialRecruitments,
  keyword,
  categoryId,
}: ResultBoxProps) => {
  // TODO: 실제 스크랩 업데이트 된 결과를 처리하기 위해 해당 부분을 optimistically update로 변경해야 함.
  // TODO: 과정에서 기존에 채용공고 상세 페이지에서 처리한 서버 액션 방식으로 처리하는게 더 나을 듯.
  // TODO: 최초에는 서버 사이드 렌더링 이후에는 클라이언트 사이드 렌더링으로 변경해야 함.

  const {recruitments, fetchNextPage, isLoading} = useInfiniteRecruitment({
    initialRecruitments,
    keyword,
    categoryId: Number(categoryId),
  });

  return (
    <div className={styles.container}>
      <p className={styles['result-count']}>
        총 {recruitments.length}개의 채용 공고가 있습니다.
      </p>
      <form className={styles['result-box']} action={recruitmentScrapAction}>
        <InfiniteScroll onIntersect={fetchNextPage}>
          {recruitments.length > 0 &&
            recruitments.map(recruitment => {
              return (
                <CompanyRecruitmentCard
                  key={recruitment.recruitmentId}
                  recruitmentId={recruitment.recruitmentId}
                  name={recruitment.name}
                  thumbnail={recruitment.thumbnail}
                  companyName={recruitment.companyName}
                  isScrap={recruitment.scrapped}
                />
              );
            })}
          {isLoading && <div>Loading more...</div>}
        </InfiniteScroll>
      </form>
    </div>
  );
};

export default ResultBox;
