import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';

const EducationInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="학력">
        <AddSectionItemButton text="학력 추가" />
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
