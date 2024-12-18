'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {FaStarOfLife} from 'react-icons/fa6';
import {IoMenu} from 'react-icons/io5';

import {ResumeOrder} from '@/types/ableJ';

import styles from './dragAndDrop.module.scss';

const cx = classNames.bind(styles);

interface DragAndDropProps {
  id: number;
  index: number;
  title: string;
  serverKey: string;
  essential?: boolean;
  path: string;
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
  setIsDrop: (isDrop: boolean) => void;
}

const DragAndDropItem = ({
  id,
  index,
  title,
  essential,
  serverKey,
  path,
  moveCardHandler,
  setIsDrop,
}: DragAndDropProps) => {
  const pathname = usePathname().split('/')[2];
  const selected = pathname === path;
  const ref = useRef<HTMLDivElement>(null);

  const isDraggable = id !== 0;

  const [{isDragging}, drag, preview] = useDrag({
    type: 'PROFILE',
    item: () => {
      setIsDrop(false);
      return {id, index, serverKey};
    }, // 드래깅 물체 안에 넣어줄 정보 세팅
    collect: monitor => ({
      isDragging: monitor.isDragging(), // 드래그 중인지 아닌지를 리턴
    }),
    canDrag: () => isDraggable,
  });

  const [, drop] = useDrop({
    accept: 'PROFILE',
    hover: (draggedItem: {
      id: number;
      index: number;
      serverKey: keyof ResumeOrder;
    }) => {
      if (id === 0) return;

      if (draggedItem.index !== index) {
        moveCardHandler(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    drop: () => {
      setIsDrop(true);
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
        {isDraggable && (
          <div className={styles.menu}>
            <IoMenu size={18} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default DragAndDropItem;
