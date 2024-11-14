import SearchResult from '@/features/search/SearchResult';

const RecruitmentPage = async ({
  searchParams: {keyword, categoryId},
}: {
  searchParams: {
    keyword?: string;
    categoryId?: string;
  };
}) => {
  return <SearchResult keyword={keyword} categoryId={categoryId} />;
};

export default RecruitmentPage;
