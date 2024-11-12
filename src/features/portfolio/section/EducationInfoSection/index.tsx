import {Fragment, ReactNode} from 'react';

import EDUCATION_TYPE from '@/constants/educationType';
import GRADE_TYPE from '@/constants/gradeType';
import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import DropdownMenu from '@/features/portfolio/components/DropdownMenu';
import Input from '@/features/portfolio/components/Input';
import {EducationInfo} from '@/types/ableJ';

interface EducationInfoSectionProps {
  education?: EducationInfo;
  readOnly?: boolean;
  children?: ReactNode;
}

const EducationInfoSection = ({
  education,
  readOnly,
  children,
}: EducationInfoSectionProps) => {
  return (
    <Fragment key={education?.educationId}>
      <Input
        isLabeled
        label="학교"
        name={'name'}
        defaultValue={education?.name || ''}
        readOnly={readOnly}
      />
      <Input
        isLabeled
        label="설명"
        name={'description'}
        defaultValue={education?.description || ''}
        readOnly={readOnly}
      />
      <Columns>
        <Input
          isLabeled
          label="전공"
          name={'major'}
          defaultValue={education?.major || ''}
          readOnly={readOnly}
        />
        <DropdownMenu
          items={EDUCATION_TYPE}
          isLabeled
          label="학력"
          name={'category'}
          defaultValue={education?.category || ''}
          readOnly={readOnly}
        />
      </Columns>
      <Columns>
        <Input
          isLabeled
          label="학점"
          name={'grade'}
          defaultValue={education?.grade || ''}
          readOnly={readOnly}
        />
        <DropdownMenu
          isLabeled
          label="기준 학점"
          name={'gradeType'}
          items={GRADE_TYPE}
          defaultValue={education?.gradeType || ''}
          readOnly={readOnly}
        />
      </Columns>
      <Columns>
        <DatePicker
          isLabeled
          label="입학년월"
          name={'startAt'}
          defaultValue={education?.startAt || ''}
          readOnly={readOnly}
        />
        <DatePicker
          isLabeled
          label="졸업년월"
          name={'endAt'}
          defaultValue={education?.endAt || ''}
          readOnly={readOnly}
        />
      </Columns>
      <input
        name="educationId"
        hidden
        defaultValue={education?.educationId || ''}
      />
      {children}
      <Divider />
    </Fragment>
  );
};

export default EducationInfoSection;
