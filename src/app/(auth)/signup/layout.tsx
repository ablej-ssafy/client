'use client';

import {ReactNode} from 'react';

import {SignupFormProvider} from '@/context/SignupContext';

const SignupLayout = ({children}: {children: ReactNode}) => {
  return <SignupFormProvider>{children}</SignupFormProvider>;
};

export default SignupLayout;
