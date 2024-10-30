'use client';

import {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {FaStarOfLife} from 'react-icons/fa6';
import {IoMenu} from 'react-icons/io5';

import styles from './dragAndDrop.module.scss';

interface DragAndDropProps {
  id: number;
  index: number;
  title: string;
  essential?: boolean;
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
}

const DragAndDrop = ({
  id,
  index,
  title,
  essential,
  moveCardHandler,
}: DragAndDropProps) => {
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
    <div
      ref={ref}
      className={styles.container}
      style={{opacity: isDragging ? '0.5' : '1'}}
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
