'use client';

import {useFormState} from 'react-dom';

import signupAction from '@/actions/signupAction';
import CareerStep from '@/features/signin/SignUp/CareerStep';
import InfoStep from '@/features/signin/SignUp/InfoStep';
import useFunnel from '@/hooks/useFunnel';

const INITIAL_STATE = {
  email: [],
  password: [],
  name: [],
  careerYear: [],
  jobIds: [],
  error: '',
};

const SignUpModal = () => {
  const [, formAction] = useFormState(signupAction, INITIAL_STATE);
  const {setStep, Step, Funnel} = useFunnel('info');

  console.log('Im SignUpModal');

  return (
    <form action={formAction}>
      <Funnel>
        <Step name="info">
          <InfoStep handleNext={() => setStep('career')} />
        </Step>
        <Step name="career">
          <CareerStep />
        </Step>
      </Funnel>
    </form>
  );
};

export default SignUpModal;
