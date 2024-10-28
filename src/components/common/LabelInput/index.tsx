import classNames from 'classnames/bind';

import Input, {InputProps} from '@/components/common/Input';

import styles from './lableInput.module.scss';

type LabelInputProps = InputProps & {
  label: string;
  name: string;
};

const cx = classNames.bind(styles);

const LabelInput = ({label, ...props}: LabelInputProps) => {
  return (
    <div className={cx('input-container')}>
      <label htmlFor={props.name}>{label}</label>
      <Input {...props} id={props.name} />
    </div>
  );
};

export default LabelInput;
