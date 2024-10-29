import classNames from 'classnames/bind';

import type {InputProps} from '@/components/common/Input';
import Input from '@/components/common/Input';

import styles from './labelInput.module.scss';

type LabelInputProps = InputProps & {
  label: string;
};

const cx = classNames.bind(styles);

const LabelInput = ({label, ...props}: LabelInputProps) => {
  return (
    <div className={cx('input-container')}>
      <label htmlFor={props.name} className={cx(props.inputStyle)}>
        {label}
      </label>
      <Input {...props} id={props.name} />
    </div>
  );
};

export default LabelInput;
