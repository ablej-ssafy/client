'use client';

import classNames from 'classnames/bind';
// import { useSearchParams } from 'next/navigation';
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
  setNowItem: (title: string) => void;
}

const DragAndDrop = ({
  id,
  index,
  title,
  essential,
  path,
  moveCardHandler,
  setNowItem,
}: DragAndDropProps) => {
  // const searchParams = useSearchParams()
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

  const handleClick = () => {
    setNowItem(path);
  };

  return (
    <div
      ref={ref}
      className={cx('container')}
      style={{opacity: isDragging ? '0.4' : '1'}}
      onClick={handleClick}
    >
      <div>
        <span className={styles.title}>{title}</span>
        {essential && <FaStarOfLife className={styles.essential} />}
      </div>
      <div className={styles.menu}>
        <IoMenu size={18} />
      </div>
    </div>
  );
};

export default DragAndDrop;
