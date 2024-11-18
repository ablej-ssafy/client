import httpClient from '@/configs/httpClient';
import {GetAllJobsResponse} from '@/types/ableJ';

export default {
  getAllJobs: async () => {
    return httpClient.get<GetAllJobsResponse>('/recruitments/category');
  },
  updatePreferredJob: async (jobId: number, accessToken: string) => {
    return httpClient.patch(
      `/member/category`,
      {id: jobId},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
};
