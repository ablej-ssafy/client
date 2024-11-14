import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

interface CompanyRecruitmentCardProps {
  scrap: () => void;
  isScrap: boolean;
}

const CardScrapButton = ({scrap, isScrap}: CompanyRecruitmentCardProps) => {
  return (
    <button onClick={scrap}>
      {isScrap ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default CardScrapButton;
