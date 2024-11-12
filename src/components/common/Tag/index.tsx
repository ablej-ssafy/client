import classNames from 'classnames/bind';

import styles from './tag.module.scss';

const cx = classNames.bind(styles);

interface TagProps {
  title: string;
  type?: 'primary' | 'secondary';
}

const Tag = ({title, type = 'primary'}: TagProps) => {
  return <span className={cx('title', type)}>{title}</span>;
};

export default Tag;
