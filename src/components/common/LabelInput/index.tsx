import type {InputProps} from '@/components/common/Input';
import Input from '@/components/common/Input';
import LabelWrapper from '@/components/common/LabelWrapper';

type LabelInputProps = InputProps & {
  label: string;
};

const LabelInput = ({label, ...props}: LabelInputProps) => {
  return (
    <LabelWrapper label={label}>
      <Input {...props} id={label} />
    </LabelWrapper>
  );
};

export default LabelInput;
