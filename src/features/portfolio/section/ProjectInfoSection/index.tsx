import {Fragment, PropsWithChildren} from 'react';

import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import {ExperienceInfo} from '@/types/ableJ';

interface ProjectInfoSectionProps extends PropsWithChildren {
  project?: ExperienceInfo;
}

const ProjectInfoSection = ({project, children}: ProjectInfoSectionProps) => {
  return (
    <Fragment key={project?.experienceId}>
      <Input
        isLabeled
        label="프로젝트명"
        name="title"
        defaultValue={project?.title || ''}
      />
      <Input
        isLabeled
        label="소속"
        name="affiliation"
        defaultValue={project?.affiliation || ''}
      />
      <Input
        isLabeled
        label="내용"
        name="description"
        defaultValue={project?.description || ''}
      />
      <Columns>
        <DatePicker
          isLabeled
          label="시작년월"
          name="startAt"
          defaultValue={project?.startAt || ''}
        />
        <DatePicker
          isLabeled
          label="종료연월"
          name="endAt"
          defaultValue={project?.endAt || ''}
        />
      </Columns>
      <Input
        isLabeled
        label="프로젝트 URL"
        name="referenceUrl"
        defaultValue={project?.referenceUrl || ''}
      />
      <input
        name="experienceId"
        hidden
        defaultValue={project?.experienceId || ''}
      />
      <input name="experienceType" hidden readOnly defaultValue="PROJECT" />
      {children}
      <Divider />
    </Fragment>
  );
};

export default ProjectInfoSection;
