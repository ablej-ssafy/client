import httpClient from '@/configs/httpClient';
import {GetAllJobsResponse} from '@/types/ableJ';

export default {
  getAllJobs: async () => {
    return httpClient.get<GetAllJobsResponse>('/api/v1/jobs');
  },
};
