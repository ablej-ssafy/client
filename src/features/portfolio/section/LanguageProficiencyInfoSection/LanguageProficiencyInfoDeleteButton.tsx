'use client';
import deleteResumeLanguageProficiencyInfoAction from '@/actions/portfolio/deleteResumeLanguageProficiencyInfoAction';
import SubmitButton from '@/features/portfolio/components/SubmitButton';

interface LanguageProficiencyInfoDeleteButtonProps {
  certificationId: number;
}

const LanguageProficiencyInfoDeleteButton = ({
  certificationId,
}: LanguageProficiencyInfoDeleteButtonProps) => {
  const handleDelete = async () => {
    await deleteResumeLanguageProficiencyInfoAction(certificationId);
  };

  return (
    <SubmitButton type="button" onClick={handleDelete}>
      삭제
    </SubmitButton>
  );
};

export default LanguageProficiencyInfoDeleteButton;
