import {useCallback, useEffect, useState} from 'react';

import ableJ from '@/services/ableJ';
import {Job} from '@/types/ableJ';

const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchAllJobs = useCallback(async () => {
    const {data} = await ableJ.getAllJobs();
    setJobs(data);
  }, []);

  useEffect(() => {
    (async () => await fetchAllJobs())();
  }, [fetchAllJobs]);

  return jobs;
};

export default useJobs;
