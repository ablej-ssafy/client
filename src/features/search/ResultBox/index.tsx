import CompanyCard from '@/components/common/CompanyCard';
import {Search} from '@/types/ableJ';

import styles from './resultBox.module.scss';

interface ResultBoxProps {
  recruitments: Search[];
}

const ResultBox = async ({recruitments}: ResultBoxProps) => {
  return (
    <div className={styles.container}>
      <p className={styles['result-count']}>
        총 {recruitments.length}개의 검색 결과가 있습니다.
      </p>
      <div className={styles['result-box']}>
        {recruitments.length > 0 &&
          recruitments.map(result => {
            return <CompanyCard key={result.recruitmentId} />;
          })}
      </div>
    </div>
  );
};

export default ResultBox;
