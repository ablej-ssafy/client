'use client';
import {ReactNode, useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeLanguageProficiencyInfoAction from '@/actions/portfolio/updateResumeLanguageProficiencyInfoAction';
import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import LanguageProficiencyInfoSection from '@/features/portfolio/section/LanguageProficiencyInfoSection';

const INITIAL_STATE = {
  success: false,
  error: '',
};

const LanguageLayout = ({children}: {children: ReactNode}) => {
  const [state, action] = useFormState(
    updateResumeLanguageProficiencyInfoAction,
    INITIAL_STATE,
  );
  const [openNewForm, setOpenNewForm] = useState(false);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
    setOpenNewForm(false);
  }, [state]);

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  return (
    <Board action={action}>
      <SectionHeader title="어학 성적">
        <AddSectionItemButton
          text="어학 추가"
          type="button"
          onClick={() => setOpenNewForm(true)}
        />
      </SectionHeader>
      <Divider />
      {children}
      {openNewForm && (
        <LanguageProficiencyInfoSection>
          <SubmitButton type="button" onClick={() => setOpenNewForm(false)}>
            삭제
          </SubmitButton>
        </LanguageProficiencyInfoSection>
      )}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default LanguageLayout;
