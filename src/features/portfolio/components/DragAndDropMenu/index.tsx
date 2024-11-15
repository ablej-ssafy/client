import classNames from 'classnames/bind';
import {useEffect, useMemo, useRef, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import DragAndDrop from '@/components/common/DragAndDropItem';
import useResumeOrder from '@/hooks/useResumeOrder';

import styles from './dragAndDrop.module.scss';

interface Task {
  id: number;
  title: string;
  essential: boolean;
  path: string;
  serverKey: string;
}

const cx = classNames.bind(styles);

const TASKS: Task[] = [
  {
    id: 0,
    title: '프로필',
    essential: true,
    path: 'profile',
    serverKey: 'basic',
  },
  {
    id: 1,
    title: '학력',
    essential: false,
    path: 'education',
    serverKey: 'education',
  },
  {
    id: 2,
    title: '경력 및 분야',
    essential: false,
    path: 'experience',
    serverKey: 'company',
  },
  {
    id: 3,
    title: '수상 및 활동',
    essential: false,
    path: 'activity',
    serverKey: 'activity',
  },
  {
    id: 4,
    title: '기술스택',
    essential: false,
    path: 'skill',
    serverKey: 'tech',
  },
  {
    id: 5,
    title: '프로젝트',
    essential: false,
    path: 'project',
    serverKey: 'project',
  },
  {
    id: 6,
    title: '자격증',
    essential: false,
    path: 'license',
    serverKey: 'qualification',
  },
  {
    id: 7,
    title: '어학성적',
    essential: false,
    path: 'language',
    serverKey: 'language',
  },
] as const;

const DragAndDropMenu = () => {
  const resumeOrder = useResumeOrder();
  const sortedResume: Task[] = useMemo(() => {
    const sortedArr = Array.from({length: TASKS.length}, (_, index) => ({
      ...TASKS[index],
    }));

    for (const [sectionName, order] of Object.entries(resumeOrder)) {
      sortedArr[order] = TASKS.find(task => task.serverKey === sectionName)!;
    }

    return sortedArr;
  }, [resumeOrder]);

  const dndContextElement = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState(sortedResume);

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    if (dragIndex === hoverIndex) return;

    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const [draggedItem] = updatedItems.splice(dragIndex, 1); // 드래그된 아이템 삭제
      updatedItems.splice(hoverIndex, 0, draggedItem); // 드래그된 아이템 새 위치에 삽입
      return updatedItems;
    });
  };

  // console.log('resumeOrder', resumeOrder);
  console.log('sortedResume', sortedResume);

  useEffect(() => {
    setItems([...sortedResume]);
  }, [sortedResume]);

  return (
    <div className={cx('drag-and-drop')} ref={dndContextElement}>
      <DndProvider
        backend={HTML5Backend}
        options={{rootElement: dndContextElement.current}}
      >
        {items.map((item, index) => {
          return (
            <DragAndDrop
              key={item.id}
              id={item.id}
              index={index}
              title={item.title}
              serverKey={item.serverKey}
              essential={item.essential}
              path={item.path}
              moveCardHandler={moveCardHandler}
            />
          );
        })}
      </DndProvider>
    </div>
  );
};

export default DragAndDropMenu;
