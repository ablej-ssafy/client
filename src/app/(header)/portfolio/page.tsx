'use client';

import {useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import DragAndDrop from '@/components/common/DragAndDrop/index';

import styles from './page.module.scss';

interface Task {
  id: number;
  title: string;
  essential: boolean;
}

const tasks: Task[] = [
  {id: 1, title: '프로필', essential: true},
  {id: 2, title: '학력', essential: true},
  {id: 3, title: '경력 및 분야', essential: false},
  {id: 4, title: '수상 및 활동', essential: false},
  {id: 5, title: '기술스택', essential: false},
  {id: 6, title: '프로젝트', essential: false},
  {id: 7, title: '포트폴리오', essential: false},
  {id: 8, title: 'URL', essential: false},
  {id: 9, title: '자격증', essential: false},
];

const PortFolioPage = () => {
  const [items, setItems] = useState(tasks);

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    if (dragIndex === hoverIndex) return;

    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const [draggedItem] = updatedItems.splice(dragIndex, 1); // 드래그된 아이템 삭제
      updatedItems.splice(hoverIndex, 0, draggedItem); // 드래그된 아이템 새 위치에 삽입
      return updatedItems;
    });
  };

  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        {items.map((item, index) => {
          return (
            <DragAndDrop
              key={item.id}
              id={item.id}
              index={index}
              title={item.title}
              essential={item.essential}
              moveCardHandler={moveCardHandler}
            />
          );
        })}
      </DndProvider>
    </div>
  );
};

export default PortFolioPage;
