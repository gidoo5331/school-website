import { Hero } from "@/components/home/hero";
import { FlyersCarousel } from "@/components/home/flyers-carousel";
import { Welcome } from "@/components/home/welcome";
import { ProgrammesSection } from "@/components/programmes/programmes-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { AcademicHighlights } from "@/components/home/academic-highlights";
import { Statistics } from "@/components/home/statistics";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
import { NewsPreview } from "@/components/home/news-preview";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FlyersCarousel />
      <Welcome />
      <ProgrammesSection />
      <WhyChooseUs />
      <AcademicHighlights />
      <Statistics />
      <GalleryPreview />
      <Testimonials />
      <NewsPreview />
      <Cta />
    </>
  );
}
