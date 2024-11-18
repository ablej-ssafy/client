'use server';
import classNames from 'classnames/bind';
import {cookies} from 'next/headers';
import Link from 'next/link';
import {redirect} from 'next/navigation';

import changeToAiParsedResumeAction from '@/actions/resume/changeToAiParsedResumeAction';
import ActivityInfoSection from '@/features/portfolio/section/ActivityInfoSection';
import BasicInfoSection from '@/features/portfolio/section/BasicInfoSection';
import CertificateInfoSection from '@/features/portfolio/section/CertificateInfoSection';
import EducationInfoSection from '@/features/portfolio/section/EducationInfoSection';
import ExperienceInfoSection from '@/features/portfolio/section/ExperienceInfoSection';
import LanguageProficiencyInfoSection from '@/features/portfolio/section/LanguageProficiencyInfoSection';
import ProjectInfoSection from '@/features/portfolio/section/ProjectInfoSection';
import ableJ from '@/services/ableJ';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const AutoResumeSelectPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/signin');
  }

  const settled = await Promise.allSettled([
    ableJ.getResumeBasicInfo(accessToken),
    ableJ.getEducationInfo(accessToken),
    ableJ.getExperienceInfo('company', accessToken),
    ableJ.getExperienceInfo('project', accessToken),
    ableJ.getExperienceInfo('activity', accessToken),
    ableJ.getCertificationInfo('qualification', accessToken),
    ableJ.getCertificationInfo('language', accessToken),
  ]);

  const {data, success} = await ableJ.getAiParsedResume(accessToken);

  if (!success || settled.some(({status}) => status === 'rejected')) {
    redirect('/portfolio');
  }

  const basicInfo =
    settled[0].status === 'fulfilled' ? settled[0].value.data : undefined;
  const educationInfo =
    settled[1].status === 'fulfilled' ? settled[1].value.data : undefined;
  const company =
    settled[2].status === 'fulfilled' ? settled[2].value.data : undefined;
  const project =
    settled[3].status === 'fulfilled' ? settled[3].value.data : undefined;
  const activity =
    settled[4].status === 'fulfilled' ? settled[4].value.data : undefined;
  const qualification =
    settled[5].status === 'fulfilled' ? settled[5].value.data : undefined;
  const language =
    settled[6].status === 'fulfilled' ? settled[6].value.data : undefined;

  return (
    <div className={cx('grid')}>
      <div className={cx('column-left')}>
        <h2>사용자 작성 포트폴리오</h2>
        <BasicInfoSection readOnly basicInfo={basicInfo} />
        {educationInfo &&
          educationInfo.educations.map(education => (
            <EducationInfoSection
              key={education.educationId}
              readOnly
              education={education}
            />
          ))}
        {company &&
          company.experiences.map(experience => (
            <ExperienceInfoSection
              key={experience.experienceId}
              readOnly
              experience={experience}
            />
          ))}
        {activity &&
          activity.experiences.map(experience => (
            <ExperienceInfoSection
              key={experience.experienceId}
              readOnly
              experience={experience}
            />
          ))}
        {project &&
          project.experiences.map(experience => (
            <ExperienceInfoSection
              key={experience.experienceId}
              readOnly
              experience={experience}
            />
          ))}
        {qualification &&
          qualification.certifications.map(certificate => (
            <CertificateInfoSection
              key={certificate.certificationId}
              readOnly
              certificate={certificate}
            />
          ))}
        {language &&
          language.certifications.map(languageInfo => (
            <LanguageProficiencyInfoSection
              key={languageInfo.certificationId}
              readOnly
              languageInfo={languageInfo}
            />
          ))}
      </div>
      <div className={cx('column-right')}>
        <h2>AI가 자동으로 채워준 포트폴리오</h2>
        <BasicInfoSection basicInfo={data.aiBasic} readOnly />
        {data.aiEducationals.map(educationInfo => (
          <EducationInfoSection
            key={educationInfo.educationId}
            education={educationInfo}
            readOnly
          />
        ))}
        {data.aiExperiences
          .filter(experience => experience.experienceType === 'COMPANY')
          .map(experience => (
            <ExperienceInfoSection
              key={experience.experienceId}
              experience={experience}
              readOnly
            />
          ))}
        {data.aiExperiences
          .filter(experience => experience.experienceType === 'ACTIVITY')
          .map(experience => (
            <ActivityInfoSection
              key={experience.experienceId}
              activity={experience}
              readOnly
            />
          ))}
        {data.aiExperiences
          .filter(experience => experience.experienceType === 'PROJECT')
          .map(experience => (
            <ProjectInfoSection
              key={experience.experienceId}
              project={experience}
              readOnly
            />
          ))}
        {data.aiCertifications
          .filter(
            certificationInfo =>
              certificationInfo.certificationType === 'QUALIFICATION',
          )
          .map(certificationInfo => (
            <CertificateInfoSection
              key={certificationInfo.certificationId}
              certificate={certificationInfo}
              readOnly
            />
          ))}
        {data.aiCertifications
          .filter(
            certificationInfo =>
              certificationInfo.certificationType === 'QUALIFICATION',
          )
          .map(certificationInfo => (
            <LanguageProficiencyInfoSection
              key={certificationInfo.certificationId}
              languageInfo={certificationInfo}
              readOnly
            />
          ))}
      </div>
      <div className={cx('info')}>
        <p className={cx('info-text')}>작성한 포트폴리오가 업데이트 됩니다</p>
        <form
          className={cx('button-container')}
          action={changeToAiParsedResumeAction}
        >
          <Link href="/portfolio" className={cx('button')}>
            취소
          </Link>
          <button type="submit" className={cx('button')}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoResumeSelectPage;
