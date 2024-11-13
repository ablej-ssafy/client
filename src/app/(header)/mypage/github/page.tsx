import classNames from 'classnames/bind';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

const GithubPage = () => {
  return <main className={cx('page')}>깃허브 기능</main>;
};

export default GithubPage;
