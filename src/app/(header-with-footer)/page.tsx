import Footer from '@/components/layout/Footer';
import FifthSection from '@/features/landing/Sections/FifthSection';
import FourthSection from '@/features/landing/Sections/FourthSection';
import MainSection from '@/features/landing/Sections/MainSection';
import SecondSection from '@/features/landing/Sections/SecondSection';
import ThirdSection from '@/features/landing/Sections/ThirdSection';

export default function Home() {
  return (
    <>
      <main>
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </main>
      <Footer />
    </>
  );
}
