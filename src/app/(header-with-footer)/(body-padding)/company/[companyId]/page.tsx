import {Metadata} from 'next';

import Carousel from '@/components/common/Carousel';
import CompanyInfo from '@/features/company/CompanyInfo';
import CompanyRecruitments from '@/features/company/CompanyRecruitments.tsx';
import {CompanyResponse} from '@/types/ableJ';

interface CompanyPageProps {
  params: {
    companyId: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const revalidate = 10; // 1 days
export const dynamic = 'force-static';

async function getCompanyInfo(companyId: number) {
  const response = await fetch(`${BASE_URL}/api/v1/companies/${companyId}`);

  const {data}: CompanyResponse = await response.json();

  return data;
}

export async function generateMetadata({
  params: {companyId},
}: CompanyPageProps): Promise<Metadata> {
  const company = await getCompanyInfo(Number(companyId));

  return {
    title: company.name,
  };
}

const CompanyPage = async ({params: {companyId}}: CompanyPageProps) => {
  const data = await getCompanyInfo(Number(companyId));

  return (
    <>
      <Carousel imageArray={data.images} />
      <CompanyInfo companyInfo={data} />
      <CompanyRecruitments companyInfo={data} />
    </>
  );
};

export default CompanyPage;
