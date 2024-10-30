'use client';

import CareerStep from '@/features/signin/SignUp/CareerStep';
import InfoStep from '@/features/signin/SignUp/InfoStep';
import useFunnel from '@/hooks/useFunnel';

const SignUpModal = () => {
  const {setStep, Step, Funnel} = useFunnel('info');

  return (
    <Funnel>
      <Step name="info">
        <InfoStep handleNext={() => setStep('career')} />
      </Step>
      <Step name="career">
        <CareerStep />
      </Step>
    </Funnel>
  );
};

export default SignUpModal;
