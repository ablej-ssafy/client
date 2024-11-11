import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import ExperienceInfoDeleteButton from '@/features/portfolio/section/ExperienceInfoSection/ExperienceInfoDeleteButton';
import ProjectInfoSection from '@/features/portfolio/section/ProjectInfoSection/index';
import ableJ from '@/services/ableJ';

const ProjectInfoSectionList = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const response = await ableJ.getExperienceInfo('project', accessToken);
  const {experiences} = response.data;

  console.log('experiences', experiences);

  return (
    !!experiences?.length &&
    experiences.map(project => (
      <ProjectInfoSection key={project.experienceId} project={project}>
        <ExperienceInfoDeleteButton experienceId={project.experienceId!} />
      </ProjectInfoSection>
    ))
  );
};

export default ProjectInfoSectionList;
