import {createContext, ReactNode, useContext, useState} from 'react';

import {SignupForm} from '@/types/ableJ';

const INITIAL_FORM_STATE: SignupForm = {
  email: '',
  password: '',
  name: '',
  careerYear: 0,
  jobIds: [],
};

const INITIAL_VALUE = {
  form: {...INITIAL_FORM_STATE},
  setForm: () => {},
};

const SignupFormContext = createContext<{
  form: SignupForm;
  setForm: (form: Partial<SignupForm>) => void;
}>(INITIAL_VALUE);

const SignupFormProvider = ({children}: {children: ReactNode}) => {
  const [form, formState] = useState(INITIAL_FORM_STATE);

  const setForm = (newForm: Partial<SignupForm>) => {
    formState(prevForm => {
      return {
        ...prevForm,
        ...newForm,
      };
    });
  };

  return (
    <SignupFormContext.Provider value={{form, setForm}}>
      {children}
    </SignupFormContext.Provider>
  );
};

const useSignupForm: () => [
  SignupForm,
  (form: Partial<SignupForm>) => void,
] = () => {
  const {form, setForm} = useContext(SignupFormContext);

  return [form, setForm];
};

export {SignupFormProvider, useSignupForm};
