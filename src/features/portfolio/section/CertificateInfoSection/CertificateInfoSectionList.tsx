import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import CertificateInfoSection from '@/features/portfolio/section/CertificateInfoSection/index';
import ableJ from '@/services/ableJ';

const CertificateInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getCertificationInfo(
    'qualification',
    accessToken,
  );
  const {certifications} = response.data;

  return (
    !!certifications?.length &&
    certifications.map(certification => (
      <CertificateInfoSection
        key={certification.certificationId}
        certificate={certification}
      />
    ))
  );
};

export default CertificateInfoSectionList;
