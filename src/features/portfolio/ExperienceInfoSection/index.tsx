import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';
import TextArea from '@/features/portfolio/TextArea';

const ExperienceInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="경력 및 분야">
        <AddSectionItemButton />
      </SectionHeader>
      <Divider />
      <Input isLabeled label="회사명" />
      <TextArea isLabeled label="회사 소개" />
      <Columns>
        <Input isLabeled label="부서명" />
        <Input isLabeled label="직책" />
      </Columns>
      <Columns>
        <DatePicker isLabeled label="입사년월" />
        <DatePicker isLabeled label="퇴사년월" />
      </Columns>
    </Board>
  );
};

export default ExperienceInfoSection;
