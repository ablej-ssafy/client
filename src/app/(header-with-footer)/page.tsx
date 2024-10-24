import Footer from '@/components/layout/Footer';
import FifthSection from '@/features/temp/Sections/FifthSection';
import FourthSection from '@/features/temp/Sections/FourthSection';
import MainSection from '@/features/temp/Sections/MainSection';
import SecondSection from '@/features/temp/Sections/SecondSection';
import ThirdSection from '@/features/temp/Sections/ThirdSection';

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
