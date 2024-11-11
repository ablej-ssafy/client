'use client';
import deleteResumeExperienceInfoAction from '@/actions/portfolio/deleteResumeExperienceInfoAction';
import SubmitButton from '@/features/portfolio/components/SubmitButton';

interface ExperienceInfoDeleteButtonProps {
  experienceId: number;
}

const ExperienceInfoDeleteButton = ({
  experienceId,
}: ExperienceInfoDeleteButtonProps) => {
  const handleDelete = async () => {
    await deleteResumeExperienceInfoAction(experienceId);
  };

  return (
    <SubmitButton type="button" onClick={handleDelete}>
      삭제
    </SubmitButton>
  );
};

export default ExperienceInfoDeleteButton;
