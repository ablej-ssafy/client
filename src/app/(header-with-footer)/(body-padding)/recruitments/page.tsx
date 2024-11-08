'use server';

import TotalRecruitements from '@/features/recruitment/TotalRecruitments';
import SearchResult from '@/features/search/SearchResult';

const RecruitmentPage = async ({
  searchParams: {keyword, categoryId},
}: {
  searchParams: {
    keyword: string | undefined;
    categoryId: string | undefined;
  };
}) => {
  return (
    <>
      {keyword || categoryId ? (
        <SearchResult keyword={keyword} categoryId={categoryId} />
      ) : (
        <TotalRecruitements />
      )}
    </>
  );
};

export default RecruitmentPage;
