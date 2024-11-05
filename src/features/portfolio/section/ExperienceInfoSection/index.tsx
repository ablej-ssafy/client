import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import TextArea from '@/features/portfolio/components/TextArea';

const ExperienceInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="경력 및 분야">
        <AddSectionItemButton text="경력 추가" />
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
