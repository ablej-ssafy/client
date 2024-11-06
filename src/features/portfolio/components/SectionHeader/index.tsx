import classNames from 'classnames/bind';
import type {ReactNode} from 'react';

import styles from './sectionHeader.module.scss';

const cx = classNames.bind(styles);

interface SectionHeaderProps {
  title: string;
  children?: ReactNode;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className={cx('section-header')}>
      <h2 className={cx('section-title')}>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default SectionHeader;
