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

async function getCompany(companyId: number) {
  const response = await fetch(`${BASE_URL}/api/v1/companies/${companyId}`, {
    next: {
      revalidate: 3600 * 24,
      tags: [`company-${companyId}`],
    },
  });

  const {data}: CompanyResponse = await response.json();

  return data;
}

export async function generateMetadata({
  params: {companyId},
}: {
  params: {companyId: string};
}) {
  const company = await getCompany(Number(companyId));
  let thumbnail = '';
  if (company.images.length > 0) {
    thumbnail = company.images[0];
  }
  return {
    title: company.name,
    description: company.description,
    images: company.images,
    openGraph: {
      title: company.name,
      type: 'website',
      images: {
        url: thumbnail,
      },
      description: company.description,
    },
    twitter: {
      card: thumbnail,
      image: thumbnail,
    },
  };
}

const CompanyPage = async ({params: {companyId}}: CompanyPageProps) => {
  const company = await getCompany(Number(companyId));

  return (
    <>
      <Carousel imageArray={company.images} />
      <CompanyInfo companyInfo={company} />
      <CompanyRecruitments companyInfo={company} />
    </>
  );
};

export default CompanyPage;
