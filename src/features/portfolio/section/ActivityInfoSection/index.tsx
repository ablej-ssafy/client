import {Fragment, PropsWithChildren} from 'react';

import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import {ExperienceInfo} from '@/types/ableJ';

interface ActivityInfoSectionProps extends PropsWithChildren {
  activity?: ExperienceInfo;
}

const ActivityInfoSection = ({
  activity,
  children,
}: ActivityInfoSectionProps) => {
  return (
    <Fragment key={activity?.experienceId}>
      <Input
        isLabeled
        label="활동명"
        name="title"
        defaultValue={activity?.title || ''}
      />
      <Input
        isLabeled
        label="소속"
        name="affiliation"
        defaultValue={activity?.affiliation || ''}
      />
      <Input
        isLabeled
        label="활동 소개"
        name="description"
        defaultValue={activity?.description || ''}
      />
      <Columns>
        <DatePicker
          isLabeled
          label="시작년월"
          name="startAt"
          defaultValue={activity?.startAt || ''}
        />
        <DatePicker
          isLabeled
          label="종료년월"
          name="endAt"
          defaultValue={activity?.endAt || ''}
        />
      </Columns>
      <input
        name="experienceId"
        hidden
        defaultValue={activity?.experienceId || ''}
      />
      <input name="experienceType" hidden defaultValue="ACTIVITY" />
      {children}
      <Divider />
    </Fragment>
  );
};

export default ActivityInfoSection;
