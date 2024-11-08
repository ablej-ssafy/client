import httpClient from '@/configs/httpClient';
import {
  AccessToken,
  GetAllTechSkillsResponse,
  GetResumeBasicInfoResponse,
  GetResumePDFResponse,
  PostProfileImageResponse,
  ResumeBasicInfo,
} from '@/types/ableJ';
import {ResponseType} from '@/types/common';

export default {
  /**
   * PDF 파일 업로드 요청을 보내는 함수
   * @param file 이력서 pdf 파일
   * @param accessToken 액세스 토큰
   */
  resumeUpload: async (formData: FormData, accessToken: AccessToken) => {
    const file = formData.get('file') as File;
    const originalName = Buffer.from(file.name, 'ascii').toString('utf8');

    const newFormData = new FormData();
    newFormData.append('file', file, originalName);

    return httpClient.post('/resume/pdf', newFormData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * PDF 파일 삭제 요청을 보내는 함수
   * @param resumeId pdf 파일 id
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
};
