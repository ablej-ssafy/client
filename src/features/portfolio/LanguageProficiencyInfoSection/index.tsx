import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';

const LanguageProficiencyInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="어학 성적">
        <AddSectionItemButton text="어학 추가" />
      </SectionHeader>
      <Divider />
      <Columns>
        <Input isLabeled label="자격증명" />
        <Input isLabeled label="점수/등급" />
      </Columns>
      <Columns>
        <Input isLabeled label="발급기관" />
        <DatePicker isLabeled label="취득일" />
      </Columns>
    </Board>
  );
};

export default LanguageProficiencyInfoSection;
