import {PropsWithChildren} from 'react';

import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import type {CertificationInfo} from '@/types/ableJ';

interface CertificateInfoSectionProps extends PropsWithChildren {
  certificate?: CertificationInfo;
}

const CertificateInfoSection = ({
  certificate,
  children,
}: CertificateInfoSectionProps) => {
  return (
    <>
      <Input
        isLabeled
        label="자격증명"
        name="name"
        defaultValue={certificate?.name || ''}
      />
      <Columns>
        <Input
          isLabeled
          label="발급기관"
          name="organization"
          defaultValue={certificate?.organization || ''}
        />
        <DatePicker
          isLabeled
          label="취득일"
          name="acquisitionAt"
          defaultValue={certificate?.acquisitionAt || ''}
        />
      </Columns>
      <Columns>
        <Input
          isLabeled
          label="등급"
          name="grade"
          defaultValue={certificate?.grade || ''}
        />
        <Input
          isLabeled
          label="인증번호"
          name="credential"
          defaultValue={certificate?.credential || ''}
        />
      </Columns>
      <input
        name="certificationId"
        hidden
        defaultValue={certificate?.certificationId || ''}
      />
      <input
        name="certificationType"
        hidden
        readOnly
        defaultValue="QUALIFICATION"
      />
      {children}
      <Divider />
    </>
  );
};

export default CertificateInfoSection;
