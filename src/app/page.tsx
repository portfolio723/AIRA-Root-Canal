import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { NetZero } from '@/components/sections/net-zero';
import { Calculator } from '@/components/sections/calculator';
import { Impact } from '@/components/sections/impact';
import { Installations } from '@/components/sections/installations';
import { InstallationVideos } from '@/components/sections/installation-videos';
import { Process } from '@/components/sections/process';
import { Reviews } from '@/components/sections/reviews';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/layout/footer';
import { CTABanner } from '@/components/sections/cta-banner';
import { MobileStickyFooter } from '@/components/layout/mobile-sticky-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Calculator />
        <WhyChooseUs />
        <Installations />
        <InstallationVideos />
        <Process />
        <NetZero />
        <Impact />
        <Reviews />
        <CTABanner />
        <FAQ />
      </main>

      <Footer />
      
      {/* Mobile Sticky Footer */}
      <MobileStickyFooter />
      
      {/* Spacer for sticky footer on mobile */}
      <div className="h-24 lg:hidden" />
    </div>
  );
}
