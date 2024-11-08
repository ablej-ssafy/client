'use client';

import classNames from 'classnames/bind';
import {useEffect, useState} from 'react';

import {CATEGORY} from '@/constants/category';

import styles from './categoryBox.module.scss';

const cx = classNames.bind(styles);

const CategoryBox = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (categoryId: number) => {
    setSelected(categoryId);
  };

  useEffect(() => {
    // console.log('selected', selected);
  }, [selected]);

  return (
    <div className={styles.container}>
      {CATEGORY.slice(0, 10).map(category => {
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
