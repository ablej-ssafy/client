import classNames from 'classnames/bind';

import ActivityInfoSection from '@/features/portfolio/section/ActivityInfoSection';
import BasicInfoSection from '@/features/portfolio/section/BasicInfoSection';
import CertificateInfoSection from '@/features/portfolio/section/CertificateInfoSection';
import EducationInfoSection from '@/features/portfolio/section/EducationInfoSection';
import ExperienceInfoSection from '@/features/portfolio/section/ExperienceInfoSection';
import LanguageProficiencyInfoSection from '@/features/portfolio/section/LanguageProficiencyInfoSection';
import ProjectInfoSection from '@/features/portfolio/section/ProjectInfoSection';
import SkillSection from '@/features/portfolio/section/SkillSection';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const AutoResumeSelectPage = () => {
  return (
    <main className={cx('grid')}>
      <div className={cx('column-left')}>
        <BasicInfoSection />
      </div>
      <div className={cx('column-right')}>
        <BasicInfoSection />
        <EducationInfoSection />
        <ExperienceInfoSection />
        <ActivityInfoSection />
        <ProjectInfoSection />
        <SkillSection />
        <CertificateInfoSection />
        <LanguageProficiencyInfoSection />
      </div>
    </main>
  );
};

export default AutoResumeSelectPage;
