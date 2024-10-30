'use client';

import classNames from 'classnames/bind';

import LabelInput from '@/components/common/LabelInput';

import styles from './infoStep.module.scss';

interface InfoStepProps {
  handleNext: VoidFunction;
}

const cx = classNames.bind(styles);

const InfoStep = ({handleNext}: InfoStepProps) => {
  return (
    <div className={cx('signup-form')}>
      <p className={cx('text-header')}>이제 곧 시작</p>
      <p className={cx('text-content')}>얼마 안남았어요...!</p>
      <p className={cx('text-content')}>
        회원가입을 하시면 AI 큐레이팅을 사용할 수 있습니다.
      </p>
      <LabelInput
        inputStyle="primary"
        label="이메일"
        placeholder="example@gmail.com"
        name="email"
        type="email"
      />
      <LabelInput
        inputStyle="primary"
        label="비밀번호"
        name="password"
        type="password"
      />
      <LabelInput inputStyle="primary" label="비밀번호 확인" type="password" />
      <LabelInput
        inputStyle="primary"
        label="이름"
        type="text"
        placeholder="홍길동"
      />
      <button type="button" className={cx('button')} onClick={handleNext}>
        다음
      </button>
    </div>
  );
};

export default InfoStep;
