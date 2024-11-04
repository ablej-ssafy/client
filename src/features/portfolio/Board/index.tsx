import classNames from 'classnames/bind';
import type {ReactNode} from 'react';

import styles from './board.module.scss';

interface BoardProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Board = ({children}: BoardProps) => {
  return <section className={cx('board')}>{children}</section>;
};

export default Board;
