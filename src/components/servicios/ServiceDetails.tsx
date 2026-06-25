import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

interface ServiceType {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  label: string;
  title: string;
  description: string;
  types: ServiceType[];
  checklist: string[];
  idealFor: string[];
}

export default function ServiceDetails({
  label,
  title,
  description,
  types,
  checklist,
  idealFor,
}: ServiceDetailsProps) {
  return (
    <>
      <div className="section-padding">
        <div className="container-wide">
          <SectionHeader label={label} title={title} description={description} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((type, i) => (
              <div key={type.title} className="glass-card p-8 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-white/[0.02]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-headline font-bold text-white mb-8">What&apos;s Included</h3>
              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-headline font-bold text-white mb-8">Ideal For</h3>
              <div className="space-y-4">
                {idealFor.map((item, i) => (
                  <div key={i} className="glass-card p-5 flex items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="w-2 h-2 rounded-full bg-primary-400 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
