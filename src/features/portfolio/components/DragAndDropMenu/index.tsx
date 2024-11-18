import classNames from 'classnames/bind';
import {useCallback, useEffect, useRef, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import changeResumeOrderAction from '@/actions/resume/changeResumeOrderAction';
import DragAndDrop from '@/components/common/DragAndDropItem';
import useResumeOrder from '@/hooks/useResumeOrder';
import {ChangeResumeOrderForm} from '@/types/ableJ';

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
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [sortedResume, setSortedResume] = useState<Task[]>(() => {
    const sortedArr = Array.from({length: TASKS.length}, (_, index) => ({
      ...TASKS[index],
    })).sort((a, b) => a.id - b.id);

    for (const [sectionName, order] of Object.entries(resumeOrder)) {
      sortedArr[order] = TASKS.find(task => task.serverKey === sectionName)!;
    }

    return sortedArr;
  });

  const dndContextElement = useRef<HTMLDivElement>(null);

  const moveCardHandler = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setSortedResume(prevItems => {
        const newItems = [...prevItems];
        const [removed] = newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, removed);
        return newItems;
      });
    },
    [],
  );

  useEffect(() => {
    const updateOrder = async () => {
      if (isDrop) {
        let orderIndex = 1;
        const newOrder = sortedResume.reduce(
          (acc, item) => {
            if (item.serverKey !== 'basic') {
              acc[item.serverKey] = orderIndex++;
            }

            return acc;
          },
          {} as Record<string, number>,
        );
        await changeResumeOrderAction(newOrder as ChangeResumeOrderForm);
      }
    };

    updateOrder();
  }, [isDrop, sortedResume]);

  return (
    <div className={cx('drag-and-drop')} ref={dndContextElement}>
      <DndProvider
        backend={HTML5Backend}
        options={{rootElement: dndContextElement.current}}
      >
        {sortedResume.map((item, index) => {
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
              setIsDrop={setIsDrop}
            />
          );
        })}
      </DndProvider>
    </div>
  );
};

export default DragAndDropMenu;
