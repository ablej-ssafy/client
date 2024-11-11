import Carousel from '@/components/common/Carousel';
import CompanyInfo from '@/features/company/CompanyInfo';
import CompanyRecruitments from '@/features/company/CompanyRecruitments.tsx';

const CompanyPage = () => {
  return (
    <>
      <Carousel imageArray={['', '', '', '']} />
      <CompanyInfo />
      <CompanyRecruitments />
    </>
  );
};

export default CompanyPage;
