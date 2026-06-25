import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyUs from '@/components/home/WhyUs';
import ProcessPreview from '@/components/home/ProcessPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CTASection from '@/components/home/CTASection';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import LogoCloud from '@/components/shared/LogoCloud';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import PageTransition from '@/components/shared/PageTransition';

export const metadata: Metadata = generateSEO({
  title: 'House Cleaning Services in NYC & the Tri-State Area',
  description:
    'Tupay Cleaning delivers premium residential, home and commercial cleaning across NYC and the tri-state area — Manhattan, Brooklyn, Queens, Bronx, Staten Island, Long Island, Westchester, New Jersey, Connecticut and The Hamptons. Deep cleaning, recurring maid service, move-in/move-out, post-construction and Airbnb turnovers. Free quotes — call +1 (929) 549-3683.',
  path: '/',
  keywords: [
    'best cleaning service NYC',
    'residential cleaning company New York',
    'commercial cleaning tri-state area',
    'maid service near me NYC',
    'deep cleaning company New York',
    'move out cleaning service NYC',
    'office cleaning company New York',
  ],
});

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <LogoCloud />
      <ServicesOverview />
      <WhyUs />
      <ProcessPreview />
      <FeaturedProjects />
      <AnimatedSection className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Testimonials"
            title="What our clients say"
            description="Customer satisfaction is our best letter of introduction."
          />
          <TestimonialSlider />
        </div>
      </AnimatedSection>
      <CTASection />
    </PageTransition>
  );
}
