import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import LanguageProficiencyInfoSection from '@/features/portfolio/section/LanguageProficiencyInfoSection';
import LanguageProficiencyInfoDeleteButton from '@/features/portfolio/section/LanguageProficiencyInfoSection/LanguageProficiencyInfoDeleteButton';
import ableJ from '@/services/ableJ';

const LanguageProficiencyInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getCertificationInfo('language', accessToken);
  const {certifications} = response.data;

  return (
    !!certifications?.length &&
    certifications.map(languageInfo => (
      <LanguageProficiencyInfoSection
        key={languageInfo.certificationId}
        languageInfo={languageInfo}
      >
        <LanguageProficiencyInfoDeleteButton
          certificationId={languageInfo.certificationId!}
        />
      </LanguageProficiencyInfoSection>
    ))
  );
};

export default LanguageProficiencyInfoSectionList;
