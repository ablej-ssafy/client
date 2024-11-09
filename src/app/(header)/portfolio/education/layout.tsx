'use client';
import {ReactNode, useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeEducationInfoAction from '@/actions/portfolio/updateResumeEducationInfoAction';
import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import EducationInfoSection from '@/features/portfolio/section/EducationInfoSection';

const INITIAL_STATE = {
  success: false,
  error: '',
};

const EducationLayout = ({children}: {children: ReactNode}) => {
  const [state, action] = useFormState(
    updateResumeEducationInfoAction,
    INITIAL_STATE,
  );
  const [openNewForm, setOpenNewForm] = useState(false);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
    setOpenNewForm(false);
  }, [state]);

  return (
    <Board action={action}>
      <SectionHeader title="학력">
        <AddSectionItemButton
          text="학력 추가"
          type="button"
          onClick={() => setOpenNewForm(true)}
        />
      </SectionHeader>
      <Divider />
      {children}
      {openNewForm && (
        <EducationInfoSection>
          <SubmitButton type="button" onClick={() => setOpenNewForm(false)}>
            삭제
          </SubmitButton>
        </EducationInfoSection>
      )}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};
export default EducationLayout;
