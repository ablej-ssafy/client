import {useEffect, useState} from 'react';

import getResumeListAction from '@/actions/getResumeListAction';
import {ResumePDF} from '@/types/ableJ/resume';

const useFetchResumeList = () => {
  const [resumeList, setResumeList] = useState<ResumePDF[]>([]);

  const fetchResumeList = async () => {
    const result = await getResumeListAction();
    if (result) {
      console.log(result);
      setResumeList(result);
    }
  };

  useEffect(() => {
    fetchResumeList();
  }, []);

  return resumeList;
};

export default useFetchResumeList;
