import {useEffect, useState} from 'react';
import {useFormState} from 'react-dom';
import toast from 'react-hot-toast';

import updateResumeEducationInfoAction from '@/actions/portfolio/updateResumeEducationInfoAction';
import EDUCATION_TYPE from '@/constants/educationType';
import GRADE_TYPE from '@/constants/gradeType';
import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import DropdownMenu from '@/features/portfolio/components/DropdownMenu';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SubmitButton from '@/features/portfolio/components/SubmitButton';
import useEducationInfos from '@/hooks/useEducationInfos';

const INITIAL_STATE = {
  error: '',
  success: false,
};

const EducationInfoSection = () => {
  const [addNew, setAddNew] = useState(false);
  const [state, formAction] = useFormState(
    updateResumeEducationInfoAction,
    INITIAL_STATE,
  );
  const {educationals} = useEducationInfos();

  useEffect(() => {
    if (!state.error) return;
    toast.error(state.error);
  }, [state]);

  useEffect(() => {
    if (!state.success) return;
    toast.success('저장되었습니다.');
  }, [state]);

  return (
    <Board action={formAction}>
      <SectionHeader title="학력">
        <AddSectionItemButton
          text="학력 추가"
          onClick={() => setAddNew(true)}
          type="button"
        />
      </SectionHeader>
      <Divider />
      {educationals?.length ? (
        educationals.map(education => (
          <>
            <Input
              isLabeled
              label="학교"
              name={'name'}
              defaultValue={education.name || ''}
            />
            <Columns>
              <Input
                isLabeled
                label="전공"
                name={'major'}
                defaultValue={education.major || ''}
              />
              <DropdownMenu
                items={EDUCATION_TYPE}
                isLabeled
                label="학력"
                name={'category'}
                defaultValue={education.category || ''}
              />
            </Columns>
            <Columns>
              <Input
                isLabeled
                label="학점"
                name={'grade'}
                defaultValue={education.grade || ''}
              />
              <DropdownMenu
                isLabeled
                label="기준 학점"
                name={'gradeType'}
                items={GRADE_TYPE}
                defaultValue={education.gradeType || ''}
              />
            </Columns>
            <Columns>
              <DatePicker
                isLabeled
                label="입학년월"
                name={'startAt'}
                defaultValue={education.startAt || ''}
              />
              <DatePicker
                isLabeled
                label="졸업년월"
                name={'endAt'}
                defaultValue={education.endAt || ''}
              />
            </Columns>
            <input
              name="educationalId"
              hidden
              defaultValue={education.educationalId || ''}
            />
          </>
        ))
      ) : (
        <>
          <Input isLabeled label="학교" name={'name'} defaultValue="" />
          <Columns>
            <Input isLabeled label="전공" name={'major'} defaultValue="" />
            <DropdownMenu
              items={EDUCATION_TYPE}
              isLabeled
              label="학력"
              name={'category'}
              defaultValue=""
            />
          </Columns>
          <Columns>
            <Input isLabeled label="학점" name={'grade'} defaultValue="" />
            <DropdownMenu
              isLabeled
              label="기준 학점"
              name={'gradeType'}
              items={GRADE_TYPE}
              defaultValue=""
            />
          </Columns>
          <Columns>
            <DatePicker
              isLabeled
              label="입학년월"
              name={'startAt'}
              defaultValue=""
            />
            <DatePicker
              isLabeled
              label="졸업년월"
              name={'endAt'}
              defaultValue=""
            />
          </Columns>
        </>
      )}
      {addNew && (
        <>
          <Input isLabeled label="학교" name={'name'} defaultValue="" />
          <Columns>
            <Input isLabeled label="전공" name={'major'} defaultValue="" />
            <DropdownMenu
              items={EDUCATION_TYPE}
              isLabeled
              label="학력"
              name={'category'}
              defaultValue=""
            />
          </Columns>
          <Columns>
            <Input isLabeled label="학점" name={'grade'} defaultValue="" />
            <DropdownMenu
              isLabeled
              label="기준 학점"
              name={'gradeType'}
              items={GRADE_TYPE}
              defaultValue=""
            />
          </Columns>
          <Columns>
            <DatePicker
              isLabeled
              label="입학년월"
              name={'startAt'}
              defaultValue=""
            />
            <DatePicker
              isLabeled
              label="졸업년월"
              name={'endAt'}
              defaultValue=""
            />
          </Columns>
        </>
      )}
      <SubmitButton>저장</SubmitButton>
    </Board>
  );
};

export default EducationInfoSection;
