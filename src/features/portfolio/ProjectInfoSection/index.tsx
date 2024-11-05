import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';

const ProjectInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="프로젝트">
        <AddSectionItemButton text="프로젝트 추가" />
      </SectionHeader>
      <Divider />
      <Input isLabeled label="프로젝트명" />
      <Input isLabeled label="소속" />
      <Input isLabeled label="내용" />
      <Columns>
        <DatePicker isLabeled label="시작년월" />
        <DatePicker isLabeled label="종료연월" />
      </Columns>
      <Input isLabeled label="프로젝트 URL" />
    </Board>
  );
};

export default ProjectInfoSection;
