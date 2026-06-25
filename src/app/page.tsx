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
  title: 'House Cleaning, Painting & Renovation Services in NYC',
  description:
    'Maval House provides top-rated house cleaning, office cleaning, interior & exterior painting, and home renovation services across all 5 NYC boroughs. Professional team, free quotes, satisfaction guaranteed. Call +1 (929) 549-3683.',
  path: '/',
  keywords: [
    'best cleaning service NYC',
    'affordable house painting New York',
    'home renovation near me NYC',
    'professional cleaners New York City',
    'licensed painters NYC',
    'trusted renovation company New York',
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
