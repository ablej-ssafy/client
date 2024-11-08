'use client';

import {useCallback, useEffect, useState} from 'react';

import ableJ from '@/services/ableJ';
import {Category} from '@/types/ableJ';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchAllCategories = useCallback(async () => {
    try {
      const {data} = await ableJ.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Failed to get all categories:', error);
    }
  }, []);

  useEffect(() => {
    (async () => await fetchAllCategories())();
  }, [fetchAllCategories]);

  return categories;
};

export default useCategories;
