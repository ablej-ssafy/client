import {getCookie} from 'cookies-next';
import {useCallback, useEffect, useState} from 'react';

import ableJ from '@/services/ableJ';
import {Skill} from '@/types/ableJ';

const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const accessToken = getCookie('accessToken');

  const fetchAllSkills = useCallback(async () => {
    const {data} = await ableJ.getAllSkills(accessToken);
    setSkills([...data]);
  }, [accessToken]);

  useEffect(() => {
    (async () => fetchAllSkills())();
  }, [fetchAllSkills]);

  return skills;
};

export default useSkills;
