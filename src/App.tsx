import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/sections/Hero';
import { StatementBand } from '@/sections/StatementBand';
import { SignalDiagram } from '@/sections/SignalDiagram';
import { DarkBanner } from '@/sections/DarkBanner';
import { BookCarousel } from '@/sections/BookCarousel';
import { RiverJourney } from '@/sections/RiverJourney';
import { Philosophy } from '@/sections/Philosophy';
import { FeatureGrid } from '@/sections/FeatureGrid';
import { Iceberg } from '@/sections/Iceberg';
import { Seminar } from '@/sections/Seminar';
import { FounderMessage } from '@/sections/FounderMessage';
import { Faq } from '@/sections/Faq';
import { AppDownload } from '@/sections/AppDownload';
import { Newsletter } from '@/sections/Newsletter';

/** Section order follows the Figma frame top to bottom (node 105:1062). */
export default function App() {
  return (
    <MainLayout>
      <Hero />
      <StatementBand />
      <SignalDiagram />
      <DarkBanner />
      <BookCarousel />
      <RiverJourney />
      <Philosophy />
      <FeatureGrid />
      <Iceberg />
      <Seminar />
      <FounderMessage />
      <Faq />
      <AppDownload />
      <Newsletter />
    </MainLayout>
  );
}
