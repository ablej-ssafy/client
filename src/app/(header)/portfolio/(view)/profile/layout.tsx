'use client';
import {ReactNode, useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeBasicInfoAction from '@/actions/portfolio/updateResumeBasicInfoAction';
import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import useBeforeUnload from '@/hooks/useBeforeUnload';

const INITIAL_STATE = {
  error: '',
  success: false,
};

const ProfileLayout = ({children}: {children: ReactNode}) => {
  useBeforeUnload();
  const [state, action] = useFormState(
    updateResumeBasicInfoAction,
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
  }, [state]);

  return (
    <Board action={action}>
      <SectionHeader title="기본 정보" />
      <Divider />
      {children}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default ProfileLayout;
