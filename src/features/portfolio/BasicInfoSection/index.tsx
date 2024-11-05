import AddSectionItemButton from '@/features/portfolio/AddSectionItemButton';
import Board from '@/features/portfolio/Board';
import Divider from '@/features/portfolio/Divider';
import ImageInput from '@/features/portfolio/ImageInput';
import Input from '@/features/portfolio/Input';
import SectionHeader from '@/features/portfolio/SectionHeader';
import TextArea from '@/features/portfolio/TextArea';

const BasicInfoSection = () => {
  return (
    <Board>
      <SectionHeader title="기본 정보">
        <AddSectionItemButton />
      </SectionHeader>
      <Divider />
      <ImageInput isLabeled={true} label="프로필 사진" />
      <Input isLabeled={true} label="이름" />
      <Input isLabeled={true} label="직업" />
      <TextArea isLabeled={true} label="한 줄 소개" />
    </Board>
  );
};

export default BasicInfoSection;