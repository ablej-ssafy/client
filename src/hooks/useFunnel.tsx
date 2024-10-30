import {ReactElement, ReactNode, useState} from 'react';

export type Step = {
  name: string;
  children: ReactNode;
};

type ExtractStepNames<T> =
  T extends Array<ReactElement<Step & {name: infer N}>> ? N : never;

interface FunnelProps<TSteps extends Array<ReactElement<Step>>> {
  children: TSteps;
}

const useFunnel = <TSteps extends Array<ReactElement<Step>>>(
  defaultStep: ExtractStepNames<TSteps>,
) => {
  const [step, setStep] = useState(defaultStep);

  const Step = (props: Step) => {
    return <>{props.children}</>;
  };

  const Funnel = ({children}: FunnelProps<TSteps>) => {
    const targetStep = children.find(child => child.props.name === step);
    return <>{targetStep}</>;
  };

  return {Step, setStep, Funnel};
};

export default useFunnel;
