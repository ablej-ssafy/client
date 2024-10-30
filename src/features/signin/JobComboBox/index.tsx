'use client';
import classNames from 'classnames/bind';
import {disassemble} from 'es-hangul';
import {MouseEvent, useState} from 'react';

import {Job} from '@/types/ableJ';

import styles from './jobComboBox.module.scss';

const cx = classNames.bind(styles);

const JOBS: Job[] = [
  {id: 1, title: '개발자'},
  {id: 2, title: '디자이너'},
  {id: 3, title: '기획자'},
  {
    id: 4,
    title: '마케터',
  },
  {id: 5, title: '기타'},
  {id: 6, title: '기타2'},
];

const JobComboBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState<Job['id'][]>([]);
  const [keyword, setKeyword] = useState('');

  const handleSelectJobs = (e: MouseEvent<HTMLButtonElement>) => {
    const jobId = +e.currentTarget.value;

    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(prevJobs => prevJobs.filter(id => id !== jobId));
      return;
    }
    setSelectedJobs(prevJobs => [...prevJobs, jobId]);
  };

  return (
    <div className={cx('combobox')}>
      {selectedJobs.map(jobId => (
        <input key={jobId} type="hidden" readOnly name="jobIds" value={jobId} />
      ))}
      <button
        className={cx('combobox-button')}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedJobs
          .map(jobId => JOBS.find(({id}) => jobId === id)?.title)
          .join(' ')}
      </button>
      {isOpen && (
        <div className={cx('dropdown')}>
          <input
            type="text"
            placeholder="직무를 입력해주세요."
            className={cx('combobox-input')}
            onChange={e => setKeyword(e.currentTarget.value)}
            value={keyword}
          />
          <ul className={cx('dropdown-list')}>
            {JOBS.filter(job =>
              disassemble(job.title).includes(disassemble(keyword)),
            ).map(job => (
              <li key={job.id}>
                <button
                  className={cx('dropdown-button', {
                    selected: selectedJobs.includes(job.id),
                  })}
                  value={job.id}
                  onClick={handleSelectJobs}
                >
                  {job.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobComboBox;
