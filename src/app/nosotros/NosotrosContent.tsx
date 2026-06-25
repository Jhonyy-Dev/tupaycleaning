import { Award, Users, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const milestones = [
  { year: '2018', title: 'Founded', description: 'We started operations in Queens, offering cleaning services to local property owners.' },
  { year: '2019', title: 'Expanded to Brooklyn', description: 'We expanded our services to Brooklyn and added professional painting to our offerings.' },
  { year: '2020', title: 'Renovations Added', description: 'We incorporated renovation and make-ready services, responding to demand from landlords and property managers.' },
  { year: '2022', title: 'Five Boroughs', description: 'We achieved complete coverage across all five New York boroughs with a team of over 20 professionals.' },
  { year: '2024', title: '500+ Projects', description: 'We surpassed 500 completed projects with a 98% client satisfaction rate.' },
];

const stats = [
  { icon: Award, value: '500+', label: 'Projects completed' },
  { icon: Users, value: '20+', label: 'Team professionals' },
  { icon: Calendar, value: '6+', label: 'Years of experience' },
  { icon: MapPin, value: '5', label: 'Boroughs covered' },
];

const team = [
  { name: 'Carlos Mendoza', role: 'Founder & General Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ana Ramirez', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { name: 'Miguel Torres', role: 'Painting Team Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Laura Castillo', role: 'Project Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
];

export default function NosotrosContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 to-transparent" />
        <div className="relative container-wide">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6">Our Story</span>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight text-white text-balance">Building trust, one project at a time</h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">We are a team of passionate professionals dedicated to transforming properties in New York. Born from the Latino community in Queens, we have grown to serve property owners, landlords and managers across the entire city with an unwavering commitment to quality and honesty.</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card p-6 text-center opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <Icon className="w-6 h-6 text-primary-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-wide">
          <SectionHeader label="Our Mission" title="More than services, trusted relationships" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed">We believe every property deserves to be treated with the same care and attention to detail, regardless of its size. Our approach combines professional techniques with a personal and transparent service that has earned us the trust of hundreds of clients across New York.</p>
              <p className="text-white/60 leading-relaxed">As a company founded by Latino immigrants, we understand the value of hard work and the importance of keeping our word. Every member of our team shares these values and applies them to every project we undertake.</p>
              <p className="text-white/60 leading-relaxed">We don&apos;t just clean, paint or remodel. We build lasting relationships based on consistent results and honest communication. That is the difference we offer.</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80)' }} />
              <div className="absolute inset-0 bg-neutral-950/20" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-wide">
          <SectionHeader label="Our Journey" title="Our path" description="From Queens to all five boroughs, every year has been a step closer to excellence." />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-px" />
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className={`relative flex items-start gap-8 mb-12 opacity-0 animate-fade-up ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-2 border-neutral-950 transform -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />
                <div className="pl-12 md:pl-0 md:w-1/2">
                  <span className="text-primary-400 text-sm font-bold">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-wide">
          <SectionHeader label="Our Team" title="Committed professionals" description="Every member of our team is verified, trained and committed to excellence in every project." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name} className="group opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${member.image})` }} />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors duration-500" />
                </div>
                <h3 className="text-base font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-white/50 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
