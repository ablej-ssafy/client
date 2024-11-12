import {PersistStorage} from 'zustand/middleware';

import {RecruitmentCard} from '@/types/ableJ';

const recommendSessionStorage: PersistStorage<{
  [resumeId: number]: RecruitmentCard[];
}> = {
  getItem: name => {
    const item = sessionStorage.getItem(name);
    return Promise.resolve(item ? JSON.parse(item) : null);
  },
  setItem: (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
    return Promise.resolve();
  },
  removeItem: name => {
    sessionStorage.removeItem(name);
    return Promise.resolve();
  },
};

export default recommendSessionStorage;
