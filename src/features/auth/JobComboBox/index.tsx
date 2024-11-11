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
  const [selectedJobs, setSelectedJobs] = useState<Job['id'][]>([]);
  const [keyword, setKeyword] = useState('');
  const jobs = useJobs();
  useClickOutside(ref, () => setIsOpen(false));

  const handleSelectJobs = (e: MouseEvent<HTMLButtonElement>) => {
    const jobId = +e.currentTarget.value;

    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(prevJobs => prevJobs.filter(id => id !== jobId));
      return;
    }
    setSelectedJobs(prevJobs => [...prevJobs, jobId]);
  };

  return (
    <LabelWrapper label="관심직무">
      <div className={cx('combobox')} ref={ref}>
        {selectedJobs.map(jobId => (
          <input
            key={jobId}
            type="hidden"
            readOnly
            name="jobIds"
            value={jobId}
          />
        ))}
        <button
          className={cx('combobox-button')}
          onClick={() => setIsOpen(prev => !prev)}
          id="관심직무"
          type="button"
        >
          {selectedJobs
            .map(jobId => jobs.find(({id}) => jobId === id)?.name)
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
              {!!jobs?.length &&
                jobs
                  .filter(job =>
                    disassemble(job.name).includes(disassemble(keyword)),
                  )
                  .map(job => (
                    <li key={job.id}>
                      <button
                        className={cx('dropdown-button', {
                          selected: selectedJobs.includes(job.id),
                        })}
                        value={job.id}
                        onClick={handleSelectJobs}
                        type="button"
                      >
                        {job.name}
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
        )}
      </div>
    </LabelWrapper>
  );
};

export default JobComboBox;
