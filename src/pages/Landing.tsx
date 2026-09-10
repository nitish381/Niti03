import { Hero } from '@/sections/Hero';
import { Intro } from '@/sections/Intro';
import { TeaserVideo } from '@/sections/TeaserVideo';
import { Expertise } from '@/sections/Expertise';
import { SelectedWork } from '@/sections/SelectedWork';
import { Experience } from '@/sections/Experience';
import { AiDesign } from '@/sections/AiDesign';
import { Process } from '@/sections/Process';
import { Philosophy } from '@/sections/Philosophy';
import { Industries } from '@/sections/Industries';
import { About } from '@/sections/About';
import { FinalCta } from '@/sections/FinalCta';

export function Landing() {
  return (
    <>
      <Hero />
      <Intro />
      <TeaserVideo />
      <Expertise />
      <SelectedWork />
      <Experience />
      <AiDesign />
      <Process />
      <Philosophy />
      <Industries />
      <About />
      <FinalCta />
    </>
  );
}
