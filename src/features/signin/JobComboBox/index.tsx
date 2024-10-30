'use client';
import classNames from 'classnames/bind';
import {useState} from 'react';

import styles from './jobComboBox.module.scss';

const cx = classNames.bind(styles);

// const JOBS: Job[] = [
//   {id: 1, title: '개발자'},
//   {id: 2, title: '디자이너'},
//   {id: 3, title: '기획자'},
//   {
//     id: 4,
//     title: '마케터',
//   },
//   {id: 5, title: '기타'},
//   {id: 6, title: '기타2'},
// ];

const JobComboBox = () => {
  const [, setOpen] = useState(false);
  const [text, setText] = useState('');
  // const [selectedJob, setSelectedJob] = useState<number[]>([]);
  // const jobs = useJobs();

  // const handleClickJob = (e: MouseEvent<HTMLButtonElement>) => {
  //   const {value} = e.currentTarget;
  //   setSelectedJob(prev => [...prev, Number(value)]);
  //   setOpen(false);
  // };

  return (
    <div className={cx('combobox')}>
      <button
        className={cx('combobox-button')}
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        onClick={() => setOpen(prev => !prev)}
      >
        {/*{selectedJob.join(' ')}*/}
      </button>
      {/*{open && <div>(*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      className={cx('dropdown-input')}*/}
      {/*      value={text}*/}
      {/*      onChange={e => setText(e.currentTarget.value)}*/}
      {/*    />*/}
      {/*  ) &&*/}
      {/*  !!JOBS.length && (*/}
      {/*    <ul className={cx('dropdown')}>*/}
      {/*      {JOBS.map(job => (*/}
      {/*        <li className={cx('dropdown-menu')} key={job.id}>*/}
      {/*          <button onClick={handleClickJob} value={job.id}>*/}
      {/*            {job.title}*/}
      {/*          </button>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  ) }*/}
    </div>
  );
};

export default JobComboBox;
