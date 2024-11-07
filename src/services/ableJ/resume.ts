import httpClient from '@/configs/httpClient';
import {GetResumePDFResponse, RecruitmentCardListResponse} from '@/types/ableJ';

export default {
  /**
   * PDF 파일 업로드 요청을 보내는 함수
   * @param file 이력서 pdf 파일
   * @param accessToken 액세스 토큰
   */
  resumeUpload: async (formData: FormData, accessToken: string) => {
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
   * @param resumeId pdf 파일 id
   */
  resumeDelete: async (resumeId: number, accessToken: string) => {
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
  getResumeList: async (accessToken: string) => {
    return httpClient.get<GetResumePDFResponse>('/resume/pdf', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
