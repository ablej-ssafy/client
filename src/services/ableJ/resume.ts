import httpClient from '@/configs/httpClient';
import {GetResumePDFResponse} from '@/types/ableJ';

export default {
  /**
   * 이력서 업로드 요청을 보내는 함수
   * @param file 이력서 pdf 파일
   * @param accessToken 액세스 토큰
   */
  resumeUpload: async (formData: FormData, accessToken: string) => {
    return httpClient.post('/api/v1/recruitment/recommend', formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  /**
   * 이력서 목록을 가져오는 함수
   * @param accessToken 액세스 토큰
   */
  getResumeList: async (accessToken: string) => {
    return httpClient.get<GetResumePDFResponse>('/api/v1/resume/pdf', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
