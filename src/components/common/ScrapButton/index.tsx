'use client';

import {FormEvent, useEffect} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';
import {MdBookmark, MdBookmarkBorder} from 'react-icons/md';

import createRecruitmentScarpAction from '@/actions/scrap/createRecruitmentScrapAction';
import deleteRecruitmentScarpAction from '@/actions/scrap/deleteRecruitmentScrapAction';
import useGetScrap from '@/hooks/useGetScrap';

import styles from './scrapButton.module.scss';

interface ScrapButtonProps {
  recruitmentId: number;
}

const INITIAL_STATE = {
  success: false,
  error: '',
};

const ScrapButton = ({recruitmentId}: ScrapButtonProps) => {
  const {isScrap, refetch} = useGetScrap(recruitmentId);
  console.log(isScrap);
  const [createState, createAction] = useFormState(
    createRecruitmentScarpAction,
    INITIAL_STATE,
  );

  const [deleteState, deleteAction] = useFormState(
    deleteRecruitmentScarpAction,
    INITIAL_STATE,
  );

  const nowState = isScrap ? deleteState : createState;
  const nowAction = isScrap ? deleteAction : createAction;

  useEffect(() => {
    if (!nowState.success) return;
    refetch();
  }, [nowState, isScrap, refetch]);

  useEffect(() => {
    if (!nowState.error) return;
    toast.error(nowState.error);
  }, [nowState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    nowAction(formData);
    toast.success(isScrap ? '스크랩이 취소되었습니다.' : '스크랩 되었습니다.');
  };

  return (
    <form
      className={styles.container}
      action={nowAction}
      onSubmit={handleSubmit}
      onClick={e => e.currentTarget.requestSubmit()}
    >
      <input name="recruitmentId" type="hidden" value={String(recruitmentId)} />
      <span className={styles.scrap}>스크랩</span>
      {isScrap ? (
        <MdBookmark size={25} color="white" />
      ) : (
        <MdBookmarkBorder size={25} color="white" />
      )}
    </form>
  );
};

export default ScrapButton;
