import httpClient from '@/configs/httpClient';
import {
  AccessToken,
  CertificationInfo,
  EducationInfo,
  ExperienceInfo,
  GetAiParsedResumeResponse,
  GetAllTechSkillsResponse,
  GetCertificationInfoResponse,
  GetEducationInfoResponse,
  GetExperienceInfoResponse,
  GetResumeBasicInfoResponse,
  GetResumePDFResponse,
  GetTechStackInfoResponse,
  PostProfileImageResponse,
  RecruitmentCardListResponse,
  ResumeBasicInfo,
  TechStackInfoForm,
} from '@/types/ableJ';
import {ResponseType} from '@/types/common';

export default {
  /**
   * PDF 파일 업로드 요청을 보내는 함수
   * @param formData PDF 파일
   * @param accessToken 액세스 토큰
   */
  resumeUpload: async (formData: FormData, accessToken: AccessToken) => {
    const file = formData.get('file') as File;
    const originalName = Buffer.from(file.name, 'ascii').toString('utf8');

    const newFormData = new FormData();
    newFormData.append('file', file, originalName);

    return httpClient.post<RecruitmentCardListResponse>(
      '/resume/pdf',
      newFormData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },

  /**
   * PDF 파일 삭제 요청을 보내는 함수
   * @param resumeId pdf 파일 experienceId
   */
  resumeDelete: async (resumeId: number, accessToken: AccessToken) => {
    return httpClient.delete(`/resume/pdf/${resumeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * PDF 파일 목록을 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getResumeList: async (accessToken: AccessToken) => {
    return httpClient.get<GetResumePDFResponse>('/resume/pdf', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * PDF 파일 다운로드 요청을 보내는 함수
   * @param accessToken 액세스 토큰
   */
  getAllSkills: async (accessToken?: AccessToken) => {
    return httpClient.get<GetAllTechSkillsResponse>('/tech/skill', {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });
  },

  /**
   * 이력서 생성 요청을 보내는 함수
   * @param accessToken 액세스 토큰
   */
  createResume: async (accessToken: AccessToken) => {
    return httpClient.post('/resume', undefined, {
      headers: {Authorization: `Bearer ${accessToken}`},
    });
  },

  /**
   * 이력서 기본 정보를 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getResumeBasicInfo: async (accessToken: AccessToken) => {
    return httpClient.get<GetResumeBasicInfoResponse>('/resume/basic', {
      headers: {Authorization: `Bearer ${accessToken}`},
    });
  },
  /**
   * 이력서 기본 정보를 업데이트하는 함수
   * @param resumeBasicInfo 이력서 기본 정보
   * @param accessToken 액세스 토큰
   */
  updateResumeBasicInfo: async (
    resumeBasicInfo: Omit<ResumeBasicInfo, 'resumeBasicId'>,
    accessToken: AccessToken,
  ) => {
    return httpClient.post<ResponseType<null>>(
      '/resume/basic',
      resumeBasicInfo,
      {
        headers: {Authorization: `Bearer ${accessToken}`},
      },
    );
  },
  /**
   * 프로필 이미지를 업로드하는 함수
   * @param file 프로필 이미지 파일
   * @param accessToken 액세스 토큰
   */
  uploadProfileImage: async (file: File, accessToken: AccessToken) => {
    const form = new FormData();
    form.append('file', file);
    return httpClient.post<PostProfileImageResponse>(
      '/resume/basic/profile',
      form,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  /**
   * 학교 정보를 조회하는 함수
   * @param accessToken 액세스 토큰
   */
  getEducationInfo: async (accessToken: AccessToken) => {
    return httpClient.get<GetEducationInfoResponse>('/education', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 학교 정보를 업데이트하는 함수
   * @param educationInfos 학교 정보
   * @param accessToken 액세스 토큰
   */
  updateEducationInfos: async (
    educationInfos: {educations: Omit<EducationInfo, 'educationId'>[]},
    accessToken: AccessToken,
  ) => {
    return httpClient.post<ResponseType<null>>('/education', educationInfos, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 학교 정보를 삭제하는 함수
   * @param educationalId 학교 정보 experienceId
   * @param accessToken 액세스 토큰
   */
  deleteEducationInfo: async (
    educationalId: number,
    accessToken: AccessToken,
  ) => {
    return httpClient.delete(`/education/${educationalId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 경험 정보를 조회하는 함수
   * @param type 경험 정보 타입
   * @param accessToken 액세스 토큰
   */
  getExperienceInfo: async (
    type: 'company' | 'activity' | 'project',
    accessToken: AccessToken,
  ) => {
    return httpClient.get<GetExperienceInfoResponse>(
      `/experience?type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  /**
   * 경험 정보를 업데이트하는 함수
   * @param experienceInfos 경험 정보
   * @param accessToken 액세스 토큰
   */
  updateExperienceInfo: async (
    experienceInfos: {experiences: Omit<ExperienceInfo, 'experienceId'>[]},
    accessToken: AccessToken,
  ) => {
    return httpClient.post<ResponseType<null>>('/experience', experienceInfos, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 경험 정보를 삭제하는 함수
   * @param experienceId 경험 정보 experienceId
   * @param accessToken 액세스 토큰
   */
  deleteExperienceInfo: async (
    experienceId: number,
    accessToken: AccessToken,
  ) => {
    return httpClient.delete(`/experience/${experienceId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 자격증 정보를 조회하는 함수
   * @param type 자격증 정보 타입
   * @param accessToken 액세스 토큰
   */
  getCertificationInfo: async (
    type: 'language' | 'qualification',
    accessToken: AccessToken,
  ) => {
    return httpClient.get<GetCertificationInfoResponse>(
      `/certification?type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  /**
   * 자격증 정보를 업데이트하는 함수
   * @param certificationInfos 자격증 정보
   * @param accessToken 액세스 토큰
   */
  updateCertificationInfo: async (
    certificationInfos: {
      certifications: CertificationInfo[];
    },
    accessToken: AccessToken,
  ) => {
    return httpClient.post<ResponseType<null>>(
      '/certification',
      certificationInfos,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  /**
   * 기술 스택 정보를 조회하는 함수
   * @param accessToken 액세스 토큰
   */
  getTechStackInfo: async (accessToken: AccessToken) => {
    return httpClient.get<GetTechStackInfoResponse>('/tech/stack', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 기술 스택 정보를 업데이트하는 함수
   * @param techStackInfos 기술 스택 정보
   * @param accessToken 액세스 토큰
   */
  updateTechStackInfo: async (
    techStackInfos: TechStackInfoForm,
    accessToken: AccessToken,
  ) => {
    return httpClient.post<ResponseType<null>>('/tech/stack', techStackInfos, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 자격증 정보를 삭제하는 함수
   * @param certificationId 자격증 정보 experienceId
   * @param accessToken 액세스 토큰
   */
  deleteCertificationInfo: async (
    certificationId: number,
    accessToken: AccessToken,
  ) => {
    return httpClient.delete(`/certification/${certificationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * 이력서 PDF 파일을 업로드하는 함수
   * @param file PDF 파일
   * @param accessToken 액세스 토큰
   */
  uploadResume: async (file: File, accessToken: AccessToken) => {
    const form = new FormData();
    form.append('file', file);
    return httpClient.post<ResponseType<null>>('/resume/auto', form, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  /**
   * AI로 파싱된 이력서를 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getAiParsedResume: async (accessToken: AccessToken) => {
    return httpClient.get<GetAiParsedResumeResponse>('/resume/auto', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
