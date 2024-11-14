import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

interface CompanyRecruitmentCardProps {
  scrap: () => void;
  isScrap: boolean;
}

const CardScrapButton = ({scrap, isScrap}: CompanyRecruitmentCardProps) => {
  return (
    <div onClick={scrap}>{isScrap ? <FaBookmark /> : <FaRegBookmark />}</div>
  );
};

export default CardScrapButton;
