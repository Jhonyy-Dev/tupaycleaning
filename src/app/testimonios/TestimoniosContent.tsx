import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const caseStudies = [
  {
    title: 'Complete rental unit renovation',
    client: 'Property Manager - Upper West Side',
    challenge:
      'A 2-bedroom unit that had not been renovated in 10 years. It needed to be ready for rental in 2 weeks.',
    solution:
      'Deep cleaning, full painting, floor repair and bathroom update. A team of 4 people working in parallel.',
    result:
      'Delivered in 10 days. The landlord increased rent by 15% and found a tenant in the first week of listing.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Make-ready for 5 Airbnb units',
    client: 'Airbnb Host - Williamsburg, Brooklyn',
    challenge:
      'Five units needed deep cleaning and paint touch-ups between seasons, with only 3 days available.',
    solution:
      'We coordinated simultaneous teams to clean and paint all units. Precision time management.',
    result:
      'All 5 units ready in 2.5 days. The host reported a cleanliness rating increase from 4.6 to 4.9 stars.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
];

export default function TestimoniosContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 to-transparent" />
        <div className="relative container-wide">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6">
              Testimonials
            </span>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight text-white text-balance">
              The trust of our clients
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Every review is a reflection of our commitment to quality. Discover the
              experiences of those who have already trusted us.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="glass-card p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-primary-400 text-primary-400"
                    />
                  ))}
                </div>
                <blockquote className="text-white/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs mt-1">
                    {testimonial.service} &mdash; {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-wide">
          <SectionHeader
            label="Case Studies"
            title="Results that speak"
            description="Real projects that demonstrate our execution capability and the results we deliver."
          />

          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <div
                key={study.title}
                className="glass-card overflow-hidden opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className="aspect-[16/10] lg:aspect-auto bg-cover bg-center min-h-[300px]"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">
                      {study.client}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                          Challenge
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                          Solution
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                          Result
                        </p>
                        <p className="text-sm text-primary-400/80 leading-relaxed font-medium">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
