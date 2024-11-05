import AddSectionItemButton from '@/features/portfolio/components/AddSectionItemButton';
import Board from '@/features/portfolio/components/Board';
import Columns from '@/features/portfolio/components/Column';
import DatePicker from '@/features/portfolio/components/DatePicker';
import Divider from '@/features/portfolio/components/Divider';
import Input from '@/features/portfolio/components/Input';
import SectionHeader from '@/features/portfolio/components/SectionHeader';

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
