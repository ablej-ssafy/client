'use client';
import 'react-virtualized/styles.css';

import {CSSProperties} from 'react';
import {AutoSizer, Grid, InfiniteLoader} from 'react-virtualized';

import CompanyRecruitmentCard from '@/components/common/CompanyRecruitmentCard';
// import InfiniteScroll from '@/components/common/InfiniteScroll';
// import Loading from '@/components/common/Loading';
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
  const {recruitments, scrap, fetchNextPage, isLoading, hasMore} =
    useInfiniteRecruitment({
      initialRecruitments,
      keyword,
      categoryId: Number(categoryId),
    });

  const isRowLoaded = ({index}: {index: number}) => {
    return !!recruitments[index];
  };
  const loadMoreRows = isLoading ? async () => {} : fetchNextPage;

  const cellRenderer = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: CSSProperties;
  }) => {
    const index = rowIndex * 3 + columnIndex;
    const recruitment = recruitments[index];

    if (!recruitment) return null;

    return (
      <div
        style={{
          ...style,
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        <CompanyRecruitmentCard
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
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <p className={styles['result-count']}>
        총 {recruitments.length}개의 채용 공고가 있습니다.
      </p>
      <div>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={hasMore ? recruitments.length + 3 : recruitments.length}
        >
          {({onRowsRendered, registerChild}) => (
            <AutoSizer
              style={{
                width: '100%',
                height: '70vh',
              }}
            >
              {({height, width}) => {
                return (
                  <Grid
                    ref={registerChild}
                    onSectionRendered={({rowStartIndex, rowStopIndex}) => {
                      onRowsRendered({
                        startIndex: rowStartIndex,
                        stopIndex: rowStopIndex,
                      });
                    }}
                    columnWidth={width / 3}
                    width={width}
                    height={height}
                    rowCount={recruitments.length}
                    columnCount={3}
                    rowHeight={280}
                    cellRenderer={cellRenderer}
                  />
                );
              }}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
};

export default ResultBox;
