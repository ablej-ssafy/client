'use client';

import deleteResumeCertificationInfoAction from '@/actions/portfolio/deleteResumeCertificateInfoAction';
import SubmitButton from '@/features/portfolio/components/SubmitButton';

interface EducationInfoDeleteButtonProps {
  certificationId: number;
}

const CertificationInfoDeleteButton = ({
  certificationId,
}: EducationInfoDeleteButtonProps) => {
  const handleDelete = async () => {
    await deleteResumeCertificationInfoAction(certificationId);
  };

  return (
    <SubmitButton type="button" onClick={handleDelete}>
      삭제
    </SubmitButton>
  );
};

export default CertificationInfoDeleteButton;
