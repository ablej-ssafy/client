import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';

const ActivityInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="활동">
        <AddSectionItemButton text="활동 추가" />
      </SectionHeader>
      <Divider />
      <Input isLabeled label="활동명" />
      <Input isLabeled label="소속" />
      <Input isLabeled label="활동 소개" />
      <Columns>
        <DatePicker isLabeled label="시작년월" />
        <DatePicker isLabeled label="종료년월" />
      </Columns>
    </Board>
  );
};

export default ActivityInfoSection;
