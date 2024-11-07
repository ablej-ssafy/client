import classNames from 'classnames/bind';
import {useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeBasicInfoAction from '@/actions/portfolio/updateResumeBasicInfoAction';
import Board from '@/features/portfolio/components/Board';
import CustomDatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import ImageInput from '@/features/portfolio/components/ImageInput';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import TextArea from '@/features/portfolio/components/TextArea';
import useResumeBasicInfo from '@/hooks/useResumeBasicInfo';

import styles from './basicInfoSection.module.scss';

const cx = classNames.bind(styles);

const INITIAL_STATE = {
  error: '',
  success: false,
};

const BasicInfoSection = () => {
  const [state, formAction] = useFormState(
    updateResumeBasicInfoAction,
    INITIAL_STATE,
  );

  const basicInfo = useResumeBasicInfo();
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
  }, [state]);

  useEffect(() => {
    setName(basicInfo?.name || '');
    setIntroduce(basicInfo?.introduce || '');
    setJob(basicInfo?.job || '');
    setPhone(basicInfo?.phone || '');
    setBirth(basicInfo?.birth || '');
    setEmail(basicInfo?.email || '');
  }, [basicInfo]);

  return (
    <Board action={formAction}>
      <SectionHeader title="기본 정보" />
      <Divider />
      <div className={cx('profile')}>
        <ImageInput isLabeled={true} label="프로필 사진" />
        <div className={cx('profile-input-container')}>
          <Input
            isLabeled={true}
            label="이메일"
            value={email}
            placeholder="example@gmail.com"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <CustomDatePicker
            isLabeled
            label="생년월일"
            value={birth}
            name="birth"
          />
          <Input
            isLabeled={true}
            label="전화번호"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            name="phone"
          />
        </div>
      </div>
      <Input
        isLabeled={true}
        label="이름"
        value={name}
        name="name"
        onChange={e => setName(e.target.value)}
        placeholder="민준수"
      />
      <Input
        isLabeled={true}
        label="직업"
        name="job"
        value={job}
        onChange={e => setJob(e.target.value)}
        placeholder="프론트엔드 개발자"
      />
      <TextArea
        isLabeled={true}
        label="한 줄 소개"
        name="introduce"
        value={introduce}
        onChange={e => setIntroduce(e.target.value)}
        placeholder="한 줄 소개를 남겨주세요."
      />
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default BasicInfoSection;
