import {FaBookmark, FaRegBookmark} from 'react-icons/fa6';

import createRecruitmentScarpAction from '@/actions/scrap/createRecruitmentScrapAction';
import deleteRecruitmentScarpAction from '@/actions/scrap/deleteRecruitmentScrapAction';

interface CompanyRecruitmentCardProps {
  recruitmentId: number;
  isScrap: boolean;
  tag?: string;
}

const CardScrapButton = ({
  recruitmentId,
  isScrap,
  tag,
}: CompanyRecruitmentCardProps) => {
  const action = isScrap
    ? deleteRecruitmentScarpAction
    : createRecruitmentScarpAction;
  return (
    <form action={action}>
      <input name="tag" type="hidden" value={tag} />
      <input name="recruitmentId" type="hidden" value={String(recruitmentId)} />
      {isScrap ? <FaBookmark /> : <FaRegBookmark />}
    </form>
  );
};

export default CardScrapButton;
