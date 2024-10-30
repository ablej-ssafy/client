'use client';

import classNames from 'classnames/bind';
import {FormEventHandler} from 'react';
import {z} from 'zod';

import LabelInput from '@/components/common/LabelInput';
import {useSignupForm} from '@/context/signup-context';

import styles from './infoStep.module.scss';

interface InfoStepProps {
  handleNext: VoidFunction;
}

const cx = classNames.bind(styles);

const InfoStepScheme = z.object({
  email: z.string().email({message: '이메일 형식이 잘못 되었습니다.'}),
  password: z.string().min(8, {message: '비밀번호는 8자 이상이어야 합니다.'}),
  passwordConfirm: z
    .string()
    .min(8, {message: '비밀번호는 8자 이상이어야 합니다.'}),
  name: z.string(),
});

const InfoStep = ({handleNext}: InfoStepProps) => {
  const [, setForm] = useSignupForm();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const {data, error, success} = InfoStepScheme.safeParse({
      email: form.get('email'),
      password: form.get('password'),
      passwordConfirm: form.get('password-confirm'),
      name: form.get('name'),
    });

    if (!success) {
      console.log(error);
      return;
    }

    setForm(data);
    handleNext();
  };

  return (
    <form className={cx('signup-form')} onSubmit={handleSubmit}>
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
        defaultValue=""
      />
      <LabelInput
        inputStyle="primary"
        label="비밀번호"
        name="password"
        type="password"
        defaultValue=""
      />
      <LabelInput
        inputStyle="primary"
        label="비밀번호 확인"
        type="password"
        name="password-confirm"
        defaultValue=""
      />
      <LabelInput
        inputStyle="primary"
        label="이름"
        type="text"
        name="name"
        placeholder="홍길동"
        defaultValue=""
      />
      <button type="submit" className={cx('button')}>
        다음
      </button>
    </form>
  );
};

export default InfoStep;
