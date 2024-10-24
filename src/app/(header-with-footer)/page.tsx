import Footer from '@/components/layout/Footer';
import FifthSection from '@/features/Landing/Sections/FifthSection';
import FourthSection from '@/features/Landing/Sections/FourthSection';
import MainSection from '@/features/Landing/Sections/MainSection';
import SecondSection from '@/features/Landing/Sections/SecondSection';
import ThirdSection from '@/features/Landing/Sections/ThirdSection';

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
