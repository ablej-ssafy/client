import httpClient from '@/configs/httpClient';
import {CompanyResponse} from '@/types/ableJ';

export default {
  /**
   * 회사 정보를 가져오는 함수
   * @param companyId 회사 ID
   * @param accessToken 액세스 토큰
   */
  getCompanyInfo: async (
    companyId: number,
    accessToken?: string,
  ): Promise<CompanyResponse> => {
    return httpClient.get<CompanyResponse>(`/companies/${companyId}`, {
      headers: accessToken ? {Authorization: `Bearer ${accessToken}`} : {},
    });
  },
};
