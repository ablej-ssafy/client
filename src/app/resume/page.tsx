import React from 'react';

import MyResume from '@/features/resume/MyResume';
import ResumeRegistration from '@/features/resume/ResumeRegistration';

const ResumePage = () => {
  return (
    <>
      <ResumeRegistration />
      <MyResume />
    </>
  );
};

export default ResumePage;
