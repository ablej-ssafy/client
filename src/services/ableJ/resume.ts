import httpClient from '@/configs/httpClient';
import {GetResumePDFResponse} from '@/types/ableJ';

export default {
  /**
   * 이력서 업로드 요청을 보내는 함수
   * @param file 이력서 pdf 파일
   * @param accessToken 액세스 토큰
   */
  resumeUpload: async (formData: FormData, accessToken: string) => {
    const file = formData.get('file') as File;
    const originalName = Buffer.from(file.name, 'ascii').toString('utf8');

    const newFormData = new FormData();
    newFormData.append('file', file, originalName);

    return httpClient.post('/recruitment/recommend', newFormData, {
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
    return httpClient.get<GetResumePDFResponse>('/resume/pdf', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
