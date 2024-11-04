import classNames from 'classnames/bind';
import {TextareaHTMLAttributes} from 'react';

import styles from './textArea.module.scss';

const cx = classNames.bind(styles);

type TextAreaProps = NormalTextAreaProps | LabeledTextAreaProps;

type NormalTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  isLabeled?: false;
};

type LabeledTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  isLabeled: true;
  label: string;
};

const TextArea = (props: TextAreaProps) => {
  const id = props.isLabeled ? props.label : undefined;

  return (
    <div className={cx('textarea-container')}>
      {props.isLabeled && (
        <label className={cx('textarea-label')}>{props.label}</label>
      )}
      <textarea {...props} className={cx('textarea')} id={id} />
    </div>
  );
};
export default TextArea;
