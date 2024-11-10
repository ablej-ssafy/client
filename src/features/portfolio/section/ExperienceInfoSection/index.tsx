import {PropsWithChildren} from 'react';

import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import TextArea from '@/features/portfolio/components/TextArea';
import {ExperienceInfo} from '@/types/ableJ';

interface ExperienceInfoSectionProps extends PropsWithChildren {
  experience?: ExperienceInfo;
}

const ExperienceInfoSection = ({
  experience,
  children,
}: ExperienceInfoSectionProps) => {
  const [department, position] = experience?.affiliation?.split('/') || [];
  return (
    <div>
      <Input
        isLabeled
        label="회사명"
        name="title"
        defaultValue={experience?.title || ''}
      />
      <TextArea
        isLabeled
        name="description"
        label="회사 소개"
        defaultValue={experience?.description || ''}
      />
      <Columns>
        <Input
          isLabeled
          name="department"
          label="부서명"
          defaultValue={department}
        />
        <Input isLabeled name="position" label="직책" defaultValue={position} />
      </Columns>
      <Columns>
        <DatePicker
          isLabeled
          name="startAt"
          label="입사년월"
          defaultValue={experience?.startAt || ''}
        />
        <DatePicker
          isLabeled
          name="endAt"
          label="퇴사년월"
          defaultValue={experience?.endAt || ''}
        />
      </Columns>
      <input
        name="experienceId"
        hidden
        defaultValue={experience?.experienceId || ''}
      />
      <input name="experienceType" hidden readOnly defaultValue="COMPANY" />
      {children}
      <Divider />
    </div>
  );
};

export default ExperienceInfoSection;
