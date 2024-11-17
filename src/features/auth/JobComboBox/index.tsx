'use client';
import classNames from 'classnames/bind';
import {disassemble} from 'es-hangul';
import {MouseEvent, useRef, useState} from 'react';

import LabelWrapper from '@/components/common/LabelWrapper';
import useClickOutside from '@/hooks/useClickOutside';
import useJobs from '@/hooks/useJobs';
import {Job} from '@/types/ableJ';

import styles from './jobComboBox.module.scss';

const cx = classNames.bind(styles);

const JobComboBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job['id']>();
  const [keyword, setKeyword] = useState('');
  const jobs = useJobs();
  useClickOutside(ref, () => setIsOpen(false));

  const handleSelectJob = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const jobId = +e.currentTarget.value;
    setSelectedJob(jobId);
    setIsOpen(false);
  };

  return (
    <LabelWrapper label="관심직무">
      <div className={cx('combobox')} ref={ref}>
        <input type="hidden" readOnly name="jobId" value={selectedJob} />
        <button
          className={cx('combobox-button')}
          onClick={() => setIsOpen(prev => !prev)}
          id="관심직무"
          type="button"
        >
          {jobs.find(job => job.id === selectedJob)?.name ||
            '직무를 선택해주세요.'}
        </button>
        <div className={cx('dropdown', {open: isOpen})}>
          <input
            type="text"
            placeholder="직무를 입력해주세요."
            className={cx('combobox-input')}
            onChange={e => setKeyword(e.currentTarget.value)}
            value={keyword}
          />
          <ul className={cx('dropdown-list')}>
            {!!jobs?.length &&
              jobs
                .filter(job =>
                  disassemble(job.name).includes(disassemble(keyword)),
                )
                .map(job => (
                  <li key={job.id}>
                    <button
                      className={cx('dropdown-button', {
                        selected: job.id === selectedJob,
                      })}
                      value={job.id}
                      onClick={handleSelectJob}
                      type="button"
                    >
                      {job.name}
                    </button>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </LabelWrapper>
  );
};

export default JobComboBox;
