import SearchResult from '@/features/search/SearchResult';

const RecruitmentPage = async ({
  searchParams: {keyword, categoryId},
}: {
  searchParams: {
    keyword: string | undefined;
    categoryId: string | undefined;
  };
}) => {
  return <SearchResult keyword={keyword} categoryId={categoryId} />;
};

export default RecruitmentPage;
