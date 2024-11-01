'use client';

import {ReactNode} from 'react';

import {SignupFormProvider} from '@/context/signup-context';

const SignupModalLayout = ({children}: {children: ReactNode}) => {
  return <SignupFormProvider>{children}</SignupFormProvider>;
};

export default SignupModalLayout;
