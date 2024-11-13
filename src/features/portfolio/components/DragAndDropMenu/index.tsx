import classNames from 'classnames/bind';
import {useRef, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import DragAndDrop from '@/components/common/DragAndDropItem';

import styles from './dragAndDrop.module.scss';

interface Task {
  id: number;
  title: string;
  essential: boolean;
  path: string;
}

const cx = classNames.bind(styles);

const tasks: Task[] = [
  {id: 1, title: '프로필', essential: true, path: 'profile'},
  {id: 2, title: '학력', essential: true, path: 'education'},
  {id: 3, title: '경력 및 분야', essential: false, path: 'experience'},
  {id: 4, title: '수상 및 활동', essential: false, path: 'activity'},
  {id: 5, title: '기술스택', essential: false, path: 'skill'},
  {id: 6, title: '프로젝트', essential: false, path: 'project'},
  {id: 7, title: '자격증', essential: false, path: 'license'},
  {id: 8, title: '어학성적', essential: false, path: 'language'},
];

const DragAndDropMenu = () => {
  const dndContextElement = useRef<HTMLDivElement>(null);
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
    <DndProvider
      backend={HTML5Backend}
      options={{rootElement: dndContextElement}}
    >
      <div className={cx('drag-and-drop')} ref={dndContextElement}>
        {items.map((item, index) => {
          return (
            <DragAndDrop
              key={item.id}
              id={item.id}
              index={index}
              title={item.title}
              essential={item.essential}
              path={item.path}
              moveCardHandler={moveCardHandler}
            />
          );
        })}
      </div>
    </DndProvider>
  );
};

export default DragAndDropMenu;
