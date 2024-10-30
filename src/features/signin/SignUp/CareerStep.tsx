'use client';

import Slider from '@/components/common/Slider';

import styles from './careerStep.module.scss';

const CareerStep = () => {
  return (
    <div className={styles['signup-form']}>
      <label htmlFor="career" className={styles['form-label']}>
        관심 직무
      </label>
      {/* 선택된 직무들 */}
      {/*<Controller*/}
      {/*  name="career"*/}
      {/*  render={({field}) => (*/}
      {/*    <div className={styles.work}>*/}
      {/*      {field.value.map((item, index) => (*/}
      {/*        <div key={index} className={styles['work-tag']}>*/}
      {/*          <p>{item}</p>*/}
      {/*          <RxCross2 size={12} onClick={() => handleRemove(item)} />*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*/>*/}
      <input id="career" className={styles.input} placeholder="관심 직무" />

      <div className={styles.work}>
        {/* 검색 결과를 예시로 작성 */}
        {/*{['개발자', '디자이너', '기획자'].map((item, index) => (*/}
        {/*  <p key={index} onClick={() => handleClick(item)}>*/}
        {/*    {item}*/}
        {/*  </p>*/}
        {/*))}*/}
      </div>
      <Slider max={25} name="age" value={0} fill label="경력" />
      <button type="submit" className={styles.button}>
        회원가입 완료
      </button>
    </div>
  );
};

export default CareerStep;
