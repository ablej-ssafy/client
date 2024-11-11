import {cookies} from 'next/headers';

import Carousel from '@/components/common/Carousel';
import CompanyInfo from '@/features/company/CompanyInfo';
import CompanyRecruitments from '@/features/company/CompanyRecruitments.tsx';
import companyService from '@/services/ableJ';

interface CompanyPageProps {
  params: {
    companyId: string;
  };
}

const CompanyPage = async ({params}: CompanyPageProps) => {
  const {companyId} = params;

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const {data} = await companyService.getCompanyInfo(
    Number(companyId),
    accessToken,
  );

  console.log('data', data);
  return (
    <>
      <Carousel imageArray={data.images} />
      <CompanyInfo companyInfo={data} />
      <CompanyRecruitments companyInfo={data} />
    </>
  );
};

export default CompanyPage;
