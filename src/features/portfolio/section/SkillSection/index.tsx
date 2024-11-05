import Board from '@/features/portfolio/components/Board';
import Divider from '@/features/portfolio/components/Divider';
import SectionHeader from '@/features/portfolio/components/SectionHeader';
import SkillCombobox from '@/features/portfolio/components/SkillCombobox';

const SkillSection = () => {
  return (
    <Board>
      <SectionHeader title="기술 스택" />
      <Divider />
      <SkillCombobox />
    </Board>
  );
};

export default SkillSection;
