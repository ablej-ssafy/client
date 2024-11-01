import httpClient from '@/configs/httpClient';

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
};
