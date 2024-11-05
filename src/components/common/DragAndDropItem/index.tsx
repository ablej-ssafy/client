'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {FaStarOfLife} from 'react-icons/fa6';
import {IoMenu} from 'react-icons/io5';

import styles from './dragAndDrop.module.scss';

const cx = classNames.bind(styles);

interface DragAndDropProps {
  id: number;
  index: number;
  title: string;
  essential?: boolean;
  path: string;
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
}

const DragAndDropItem = ({
  id,
  index,
  title,
  essential,
  path,
  moveCardHandler,
}: DragAndDropProps) => {
  const pathname = usePathname().split('/')[2];
  const selected = pathname === path;
  const ref = useRef<HTMLDivElement>(null);

  const [{isDragging}, drag, preview] = useDrag({
    type: 'PROFILE',
    item: {id, index}, // 드래깅 물체 안에 넣어줄 정보 세팅
    collect: monitor => ({
      isDragging: monitor.isDragging(), // 드래그 중인지 아닌지를 리턴
    }),
  });

  const [, drop] = useDrop({
    accept: 'PROFILE',
    hover: (draggedItem: {id: number; index: number}) => {
      if (draggedItem.index !== index) {
        moveCardHandler(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  preview(drop(drag(ref)));

  return (
    <Link href={`/portfolio/${path}`}>
      <div
        ref={ref}
        className={cx('container', {selected})}
        style={{opacity: isDragging ? '0.4' : '1'}}
      >
        <div className={styles.text}>
          <span className={styles.title}>{title}</span>
          {essential && <FaStarOfLife className={styles.essential} size={6} />}
        </div>
        <div className={styles.menu}>
          <IoMenu size={18} />
        </div>
      </div>
    </Link>
  );
};

export default DragAndDropItem;
