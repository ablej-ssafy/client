import classNames from 'classnames/bind';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {Fragment} from 'react';

import DatePicker from '@/features/portfolio/components/DatePicker';
import ImageInput from '@/features/portfolio/components/ImageInput';
import Input from '@/features/portfolio/components/Input';
import TextArea from '@/features/portfolio/components/TextArea';
import ableJ from '@/services/ableJ';

import styles from './basicInfoSection.module.scss';

const cx = classNames.bind(styles);

const BasicInfoSection = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getResumeBasicInfo(accessToken);
  const basicInfo = response.data;

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default BasicInfoSection;
