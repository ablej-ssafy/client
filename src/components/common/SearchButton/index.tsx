import classNames from 'classnames/bind';
import Link from 'next/link';
import {IoSearchSharp} from 'react-icons/io5';

import styles from './searchButton.module.scss';

const cx = classNames.bind(styles);

const SearchButton = () => {
  return (
    <Link href="" className={cx('search-button')}>
      <IoSearchSharp size={20} />
      채용공고 및 회사 검색
    </Link>
  );
};

export default SearchButton;
