import {PropsWithChildren} from 'react';

import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import type {CertificationInfo} from '@/types/ableJ';

interface LanguageProficiencyInfoSection extends PropsWithChildren {
  languageInfo?: CertificationInfo;
}

const LanguageProficiencyInfoSection = ({
  languageInfo,
  children,
}: LanguageProficiencyInfoSection) => {
  return (
    <>
      <Columns>
        <Input
          isLabeled
          label="자격증명"
          name="name"
          defaultValue={languageInfo?.name || ''}
        />
        <Input
          isLabeled
          label="점수/등급"
          name="grade"
          defaultValue={languageInfo?.grade || ''}
        />
      </Columns>
      <Columns>
        <Input
          isLabeled
          label="발급기관"
          name="organization"
          defaultValue={languageInfo?.organization || ''}
        />
        <DatePicker isLabeled label="취득일" />
      </Columns>
      <input
        name="certificationId"
        hidden
        defaultValue={languageInfo?.certificationId || ''}
      />
      <input name="certificationType" hidden readOnly defaultValue="LANGUAGE" />
      {children}
      <Divider />
    </>
  );
};

export default LanguageProficiencyInfoSection;
