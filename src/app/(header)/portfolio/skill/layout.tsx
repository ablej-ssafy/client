'use client';
import {ReactNode, useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeTechStackInfoAction from '@/actions/portfolio/updateResumeTechStackInfoAction';
import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';

const INITIAL_STATE = {
  success: false,
  error: '',
};

const SkillLayout = ({children}: {children: ReactNode}) => {
  const [state, action] = useFormState(
    updateResumeTechStackInfoAction,
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
  }, [state]);

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  return (
    <Board action={action}>
      <SectionHeader title="기술 스택" />
      <Divider />
      {children}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default SkillLayout;
