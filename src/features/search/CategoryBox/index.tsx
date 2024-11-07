'use client';

import classNames from 'classnames/bind';
import {useEffect, useState} from 'react';

import styles from './categoryBox.module.scss';

const cx = classNames.bind(styles);

const mockCategory = [
  {
    id: 0,
    name: '직군 전체',
  },
  {
    id: 1,
    name: '카테고리 1',
  },
  {
    id: 2,
    name: '카테고리 2',
  },
  {
    id: 3,
    name: '카테고리 3',
  },
  {
    id: 4,
    name: '카테고리 4',
  },
  {
    id: 5,
    name: '카테고리 5',
  },
];

const CategoryBox = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (categoryId: number) => {
    setSelected(categoryId);
  };

  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);

  return (
    <div className={styles.container}>
      {mockCategory.map(category => (
        <span
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={cx(selected === category.id ? 'selected' : 'no-selected')}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default CategoryBox;
