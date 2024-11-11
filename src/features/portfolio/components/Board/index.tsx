import classNames from 'classnames/bind';
import type {FormHTMLAttributes, ReactNode} from 'react';

import styles from './board.module.scss';

interface BoardProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const Board = ({children, ...props}: BoardProps) => {
  return (
    <section className={cx('board')}>
      <form {...props}>{children}</form>
    </section>
  );
};

export default Board;
