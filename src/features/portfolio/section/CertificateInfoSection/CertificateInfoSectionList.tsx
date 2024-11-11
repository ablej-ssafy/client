import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import CertificationInfoDeleteButton from '@/features/portfolio/section/CertificateInfoSection/CertificationInfoDeleteButton';
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
      >
        <CertificationInfoDeleteButton
          certificationId={certification.certificationId!}
        />
      </CertificateInfoSection>
    ))
  );
};

export default CertificateInfoSectionList;
