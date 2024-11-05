import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Columns from '@/features/portfolio/Column';
import DatePicker from '@/features/portfolio/DatePicker';
import Divider from '@/features/portfolio/Divider';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';

const CertificateInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="자격증">
        <AddSectionItemButton text="자격증 추가" />
      </SectionHeader>
      <Divider />
      <Input isLabeled label="자격증명" />
      <Columns>
        <Input isLabeled label="발급기관" />
        <DatePicker isLabeled label="취득일" />
      </Columns>
    </Board>
  );
};

export default CertificateInfoSection;
