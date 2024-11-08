'use client';

import classNames from 'classnames/bind';
import {useRouter, useSearchParams} from 'next/navigation';
import {useState} from 'react';

import {CATEGORY} from '@/constants/category';

import styles from './categoryBox.module.scss';

const cx = classNames.bind(styles);

const CategoryBox = () => {
  const searchParams = useSearchParams();
  const paramCategoryId = searchParams.get('categoryId');
  const [selected, setSelected] = useState<number>(
    paramCategoryId ? Number(paramCategoryId) : 0,
  );

  const router = useRouter();

  const handleClick = (categoryId: number) => {
    setSelected(categoryId);
    router.push(`/recruitments?categoryId=${categoryId}`);
  };

  return (
    <div className={styles.container}>
      {CATEGORY.map(category => {
        return (
          <span
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={cx(
              selected === category.id ? 'selected' : 'no-selected',
            )}
          >
            {category.name}
          </span>
        );
      })}
    </div>
  );
};

export default CategoryBox;
