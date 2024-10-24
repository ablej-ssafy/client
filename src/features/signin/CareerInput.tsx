'use client';

import {ChangeEvent, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {RxCross2} from 'react-icons/rx';

import styles from './careerInput.module.scss';

interface CareerForm {
  career: string[];
  years: number;
}

// interface CareerInputProps {
//   setSignInOpen: (value: boolean) => void;
// }

const CareerInput = () => {
  const [years, setYears] = useState<number>(0);

  const {handleSubmit, setValue, getValues, control} = useForm<CareerForm>({
    defaultValues: {
      career: [],
      years: 0,
    },
  });

  const handleClick = (item: string) => {
    const currentCareer = getValues('career');
    setValue('career', [...currentCareer, item]);
  };

  const handleRemove = (item: string) => {
    const currentCareer = getValues('career');
    setValue(
      'career',
      currentCareer.filter(career => career !== item),
    );
  };

  const handleYearsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('years', parseInt(e.target.value));
    setYears(parseInt(e.target.value));
  };

  const onSubmit = (data: CareerForm) => {
    console.log(data);
  };

  const onInValid = (errors: object) => {
    console.log(errors);
  };

  return (
    <form
      className={styles['signup-form']}
      onSubmit={handleSubmit(onSubmit, onInValid)}
    >
      <label htmlFor="career" className={styles['form-label']}>
        관심 직무
      </label>
      {/* 선택된 직무들 */}
      <Controller
        name="career"
        control={control}
        render={({field}) => (
          <div className={styles.work}>
            {field.value.map((item, index) => (
              <div key={index} className={styles['work-tag']}>
                <p>{item}</p>
                <RxCross2 size={12} onClick={() => handleRemove(item)} />
              </div>
            ))}
          </div>
        )}
      />
      <input id="career" className={styles.input} placeholder="관심 직무" />

      <div className={styles.work}>
        {/* 검색 결과를 예시로 작성 */}
        {['개발자', '디자이너', '기획자'].map((item, index) => (
          <p key={index} onClick={() => handleClick(item)}>
            {item}
          </p>
        ))}
      </div>

      <label htmlFor="years" className={styles['form-label']}>
        경력 : {years}
      </label>
      <div className={styles['slider-container']}>
        <div className={styles['slider-rail']} />
        <div
          className={styles['slider-fill']}
          style={{width: `${(years / 30) * 100}%`}}
        />
        <input
          id="years"
          className={styles.years}
          type="range"
          min={0}
          max={30}
          value={years}
          onChange={handleYearsChange}
        />
      </div>

      <button type="submit" className={styles.button}>
        회원가입 완료
      </button>
    </form>
  );
};

export default CareerInput;
