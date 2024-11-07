import classNames from 'classnames/bind';
import {useState} from 'react';

import Board from '@/features/portfolio/components/Board';
import CustomDatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import ImageInput from '@/features/portfolio/components/ImageInput';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import TextArea from '@/features/portfolio/components/TextArea';
import useResumeBasicInfo from '@/hooks/useResumeBasicInfo';

import styles from './basicInfoSection.module.scss';

const cx = classNames.bind(styles);

const BasicInfoSection = () => {
  const basicInfo = useResumeBasicInfo();
  const [introduce, setIntroduce] = useState(basicInfo?.introduce);
  const [job, setJob] = useState(basicInfo?.job);
  const [phone, setPhone] = useState(basicInfo?.phone);

  return (
    <Board>
      <SectionHeader title="기본 정보" />
      <Divider />
      <div className={cx('profile')}>
        <ImageInput isLabeled={true} label="프로필 사진" />
        <div className={cx('profile-input-container')}>
          <Input
            isLabeled={true}
            label="이메일"
            value={basicInfo?.email}
            placeholder="example@gmail.com"
            name="email"
            readOnly
          />
          <CustomDatePicker
            isLabeled
            label="생년월일"
            value={basicInfo?.birth}
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
        value={basicInfo?.name}
        name="name"
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
    </Board>
  );
};

export default BasicInfoSection;
