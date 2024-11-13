'use client';
import {ReactNode, useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeCertificationInfoAction from '@/actions/portfolio/updateResumeCertificationInfoAction';
import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import CertificateInfoSection from '@/features/portfolio/section/CertificateInfoSection';

const INITIAL_STATE = {
  success: false,
  error: '',
};

const LicenseLayout = ({children}: {children: ReactNode}) => {
  const [state, action] = useFormState(
    updateResumeCertificationInfoAction,
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
      <SectionHeader title="자격증">
        <AddSectionItemButton
          text="자격증 추가"
          type="button"
          onClick={() => setOpenNewForm(true)}
        />
      </SectionHeader>
      <Divider />
      {children}
      {openNewForm && (
        <CertificateInfoSection>
          <SubmitButton type="button" onClick={() => setOpenNewForm(false)}>
            삭제
          </SubmitButton>
        </CertificateInfoSection>
      )}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default LicenseLayout;
