'use client';
import deleteResumeEducationInfoAction from '@/actions/portfolio/deleteResumeEducationInfoAction';
import SubmitButton from '@/features/portfolio/components/SubmitButton';

interface EducationInfoDeleteButtonProps {
  educationId: number;
}

const EducationInfoDeleteButton = ({
  educationId,
}: EducationInfoDeleteButtonProps) => {
  const handleDelete = async () => {
    await deleteResumeEducationInfoAction(educationId);
  };

  return (
    <SubmitButton type="button" onClick={handleDelete}>
      삭제
    </SubmitButton>
  );
};

export default EducationInfoDeleteButton;
