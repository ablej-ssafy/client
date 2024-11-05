import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';

const EducationInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="학력">
        <AddSectionItemButton />
      </SectionHeader>
      <Divider />
      <Input isLabeled label="대학교" />
      <Columns>
        <DatePicker isLabeled label="입학년월" />
        <DatePicker isLabeled label="졸업년월" />
      </Columns>
      <Input isLabeled label="전공" />
      <Columns>
        <Input isLabeled label="학점" />
        <Input isLabeled label="기준 학점" />
      </Columns>
    </Board>
  );
};

export default EducationInfoSection;
