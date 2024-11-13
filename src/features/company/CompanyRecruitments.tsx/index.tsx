import {cookies} from 'next/headers';

import recruitmentScrapAction from '@/actions/scrap/recruitmentScrapAction';
import CompanyRecruitmentCard from '@/components/common/CompanyRecruitmentCard';
import {Company} from '@/types/ableJ';

import styles from './companyRecruitments.module.scss';

interface CompanyRecruitmentsProps {
  companyInfo: Company;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getCompanyRecruitmentScrap = async (
  recruitmentIds: number[],
  companyId: number,
) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log('accessToken이 없습니다.');
    return;
  }
  const params = new URLSearchParams();
  params.append('recruitmentIds', recruitmentIds.join(','));
  const response = await fetch(
    `${BASE_URL}/api/v1/recruitments/scraps?${params}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: [`company-${companyId}-recruitments-scrap`],
      },
    },
  );

  const {data} = await response.json();

  return data;
};

const CompanyRecruitments = async ({companyInfo}: CompanyRecruitmentsProps) => {
  const recruitmentIds = companyInfo.recruitments.map(
    recruitment => recruitment.recruitmentId,
  );

  const recruitmentScrap = await getCompanyRecruitmentScrap(
    recruitmentIds,
    companyInfo.companyId,
  );

  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <span className={styles['company-name']}>{companyInfo.name}</span>
        <span className={styles['recruitment-count']}>
          의 채용 공고가 총 {companyInfo.recruitments.length}건 있습니다.
        </span>
      </div>
      <form className={styles.recruitment} action={recruitmentScrapAction}>
        <input
          name="tag"
          type="hidden"
          value={`company-${companyInfo.companyId}-recruitments-scrap`}
        />
        {companyInfo.recruitments.length > 0 &&
          companyInfo.recruitments.map(recruitment => (
            <CompanyRecruitmentCard
              key={recruitment.recruitmentId}
              recruitmentId={recruitment.recruitmentId}
              name={recruitment.name}
              thumbnail={recruitment.thumbnail}
              companyName={companyInfo.name}
              isScrap={recruitmentScrap.includes(recruitment.recruitmentId)}
            />
          ))}
      </form>
    </div>
  );
};

export default CompanyRecruitments;
