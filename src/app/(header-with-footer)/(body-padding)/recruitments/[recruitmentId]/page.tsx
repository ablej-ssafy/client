import {notFound} from 'next/navigation';

import Carousel from '@/components/common/Carousel';
import RecruitmentBox from '@/features/recruitment/Detail/RecruitmentBox';
import RecruitmentTitle from '@/features/recruitment/Detail/RecruitmentTitle';
import {RecruitmentDetailResponse} from '@/types/ableJ';

import styles from './recruitmentDetailPage.module.scss';

interface RecruitmentDetailPageProps {
  params: {
    recruitmentId: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getRecruitment(recruitmentId: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/v1/recruitments/${recruitmentId}`,
      {
        next: {
          revalidate: 3600 * 24,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw new Error('Failed to fetch recruitment');
    }

    const {data: recruitment}: RecruitmentDetailResponse =
      await response.json();

    if (!recruitment) {
      notFound();
    }

    return recruitment;
  } catch (error) {
    if ((error as Error).message === 'NEXT_NOT_FOUND') {
      notFound();
    }
    throw error;
  }
}

export async function generateMetadata({
  params,
}: {
  params: {recruitmentId: string};
}) {
  const recruitment = await getRecruitment(params.recruitmentId);
  let thumbnail = '';
  if (recruitment.images.length > 0) {
    thumbnail = recruitment.images[0];
  }
  return {
    title: `${recruitment.company.name} | ${recruitment.name}`,
    description: recruitment.intro,
    images: recruitment.images,
    openGraph: {
      title: recruitment.name,
      type: 'website',
      images: {
        url: thumbnail,
      },
      description: recruitment.intro,
    },
    twitter: {
      card: thumbnail,
      image: thumbnail,
    },
  };
}

const RecruitmentDetailPage = async ({
  params: {recruitmentId},
}: RecruitmentDetailPageProps) => {
  const recruitment = await getRecruitment(recruitmentId);

  return (
    <div className={styles.container}>
      <Carousel imageArray={recruitment.images} />
      <RecruitmentTitle
        name={recruitment.name}
        category={recruitment.category}
        childCategories={recruitment.childCategories}
        company={recruitment.company}
        dueTime={recruitment.dueTime}
        annualTo={recruitment.annualTo}
        annualFrom={recruitment.annualFrom}
        thumbnail={recruitment.company.thumbnail}
      />
      <RecruitmentBox
        recruitmentId={Number(recruitmentId)}
        intro={recruitment.intro}
        task={recruitment.task}
        requirement={recruitment.requirement}
        preference={recruitment.preference}
        benefit={recruitment.benefit}
        companyInfo={recruitment.company}
        hireRound={recruitment.hireRound}
      />
    </div>
  );
};

export default RecruitmentDetailPage;
