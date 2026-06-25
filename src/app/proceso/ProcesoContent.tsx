import {
  MessageSquare,
  Search,
  FileText,
  Hammer,
  CheckCircle,
  Star,
} from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Initial Consultation',
    description:
      'Contact us by phone, WhatsApp or web form. Tell us what you need and we will respond in less than 2 hours with an initial assessment.',
    details: [
      'Quick response in less than 2 hours',
      'No-obligation initial guidance',
      'Preliminary scope of work definition',
    ],
  },
  {
    icon: Search,
    step: 2,
    title: 'Visit & Evaluation',
    description:
      'We visit your property to evaluate the work in detail. We take measurements, photos and notes to prepare an accurate quote.',
    details: [
      'Free visit to your property',
      'Detailed space evaluation',
      'Professional advice included',
    ],
  },
  {
    icon: FileText,
    step: 3,
    title: 'Detailed Quote',
    description:
      'We provide you with a clear and itemized quote, with defined execution timelines. No surprises or hidden costs.',
    details: [
      'Complete cost breakdown',
      'Schedule with clear dates',
      'Guaranteed final price',
    ],
  },
  {
    icon: Hammer,
    step: 4,
    title: 'Work Execution',
    description:
      'Our professional team performs the work as agreed. We keep you informed of progress at all times.',
    details: [
      'Professional and punctual team',
      'Constant progress communication',
      'Respect for your space and schedule',
    ],
  },
  {
    icon: CheckCircle,
    step: 5,
    title: 'Review & Delivery',
    description:
      'We perform a point-by-point quality inspection. We do a walkthrough with you to make sure everything is perfect.',
    details: [
      'Internal quality inspection',
      'Walkthrough with the client',
      'Immediate touch-ups if needed',
    ],
  },
  {
    icon: Star,
    step: 6,
    title: 'Follow-Up',
    description:
      'After delivery, we follow up to confirm your satisfaction. We offer warranty and touch-ups within the agreed period.',
    details: [
      'Post-delivery follow-up',
      'Satisfaction guarantee',
      'Complimentary touch-ups included',
    ],
  },
];

export default function ProcesoContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 to-transparent" />
        <div className="relative container-wide">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6">
              Our Process
            </span>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight text-white text-balance">
              Transparency and efficiency at every step
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We have designed a clear and efficient process so you know exactly what to expect at
              every stage. No surprises, no delays, no complications.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/10" />

              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="relative flex gap-6 md:gap-10 mb-16 last:mb-0 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary-400" />
                      </div>
                    </div>

                    <div className="pb-2">
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed mb-5">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-sm text-white/40"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-narrow text-center">
          <SectionHeader
            label="Commitment"
            title="Our Guarantee"
            description="Every job we perform is backed by our satisfaction guarantee. If something doesn't meet your expectations, we fix it at no additional cost."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Punctuality', desc: 'We meet agreed deadlines. If we fall behind, we compensate you.' },
              { title: 'Transparency', desc: 'Clear and definitive quotes. The price we quote is the price you pay.' },
              { title: 'Satisfaction', desc: 'If you are not satisfied, we come back to fix it at no cost. Simple as that.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="glass-card p-8 text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
