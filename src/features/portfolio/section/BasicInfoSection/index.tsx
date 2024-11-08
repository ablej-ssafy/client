import classNames from 'classnames/bind';
import {useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeBasicInfoAction from '@/actions/portfolio/updateResumeBasicInfoAction';
import Board from '@/features/portfolio/components/Board';
import DatePicker from '@/features/portfolio/components/DatePicker';
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

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
  }, [state]);

  return (
    <Board action={formAction}>
      <SectionHeader title="기본 정보" />
      <Divider />
      <div className={cx('profile')}>
        <ImageInput
          isLabeled={true}
          label="프로필 사진"
          name="profile"
          imageUrl={basicInfo?.profile || ''}
        />
        <div className={cx('profile-input-container')}>
          <Input
            isLabeled={true}
            label="이메일"
            placeholder="example@gmail.com"
            name="email"
            defaultValue={basicInfo?.email || ''}
          />
          <DatePicker
            isLabeled
            label="생년월일"
            defaultValue={basicInfo?.birth || ''}
            name="birth"
          />
          <Input
            isLabeled={true}
            label="전화번호"
            placeholder="010-0000-0000"
            name="phone"
            defaultValue={basicInfo?.phone || ''}
          />
        </div>
      </div>
      <Input
        isLabeled={true}
        label="이름"
        name="name"
        placeholder="민준수"
        defaultValue={basicInfo?.name || ''}
      />
      <Input
        isLabeled={true}
        label="직업"
        name="job"
        placeholder="프론트엔드 개발자"
        defaultValue={basicInfo?.job || ''}
      />
      <TextArea
        isLabeled={true}
        label="한 줄 소개"
        name="introduce"
        placeholder="한 줄 소개를 남겨주세요."
        defaultValue={basicInfo?.introduce || ''}
      />
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default BasicInfoSection;
