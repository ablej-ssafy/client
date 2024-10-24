'use client';

import {ErrorMessage} from '@hookform/error-message';

import styles from './signInput.module.scss';

interface SignInputProps {
  name: string;
  placeholder: string;
  type?: string;
  register: React.InputHTMLAttributes<HTMLInputElement>;
  errors: object;
}

const SignInput = ({
  name,
  placeholder,
  type,
  register,
  errors,
}: SignInputProps) => {
  return (
    <>
      <input
        className={styles.input}
        {...register}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <p>{message}</p>}
      />
    </>
  );
};

export default SignInput;
