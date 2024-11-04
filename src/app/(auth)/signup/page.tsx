'use client';
import SignUpCareerStep from '@/features/auth/SignUpCareerStep';
import SignUpInfoStep from '@/features/auth/SignUpInfoStep';
import useFunnel from '@/hooks/useFunnel';

const SignUpPage = () => {
  const {setStep, Step, Funnel} = useFunnel('info');

  return (
    <Funnel>
      <Step name="info">
        <SignUpInfoStep handleNext={() => setStep('career')} />
      </Step>
      <Step name="career">
        <SignUpCareerStep />
      </Step>
    </Funnel>
  );
};

export default SignUpPage;
