import classNames from 'classnames/bind';
import Link from 'next/link';

import {CATEGORY} from '@/constants/category';

import styles from './categoryBox.module.scss';

const cx = classNames.bind(styles);

interface CategoryBoxProps {
  categoryId?: string;
}

const CategoryBox = ({categoryId = '0'}: CategoryBoxProps) => {
  return (
    <div className={styles.container}>
      {CATEGORY.map(category => {
        return (
          <Link
            href={`/recruitments?categoryId=${category.id}`}
            key={category.id}
            className={cx(
              Number(categoryId) === category.id ? 'selected' : 'no-selected',
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryBox;
