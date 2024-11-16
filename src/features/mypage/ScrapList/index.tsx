import Link from 'next/link';

import CompanyRecruitmentCard from '@/components/common/CompanyRecruitmentCard';
import {Search} from '@/types/ableJ';

import styles from './scrapList.module.scss';

interface ScrapListProps {
  data: Search[];
}

const ScrapList = async ({data = []}: ScrapListProps) => {
  if (data.length === 0) {
    return (
      <div className={styles['no-scrap']}>
        <div>스크랩한 채용공고가 없습니다.</div>{' '}
        <Link href="/recruitments">채용공고 보러가기</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map(item => (
        <CompanyRecruitmentCard
          key={item.recruitmentId}
          recruitmentId={item.recruitmentId}
          name={item.name}
          thumbnail={item.thumbnail}
          companyName={item.companyName}
          isScrap={item.scrapped}
        />
      ))}
    </div>
  );
};

export default ScrapList;
