import { Zap, Shield, Users, FileText } from 'lucide-react';
import { WHY_US } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

const icons = [Zap, Shield, Users, FileText];

export default function WhyUs() {
  return (
    <div className="section-padding bg-white/[0.02]">
      <div className="container-wide">
        <SectionHeader
          label="Why Choose Us"
          title="Professionalism in every detail"
          description="We stand out for the quality of our work, transparency in our processes and commitment to every customer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-white/[0.04] hover:border-white/10 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03] opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute top-0 left-8 w-8 h-px bg-gradient-to-r from-primary-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <span className="block text-[11px] font-bold text-white/20 tracking-[0.2em] uppercase mb-6">0{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] group-hover:bg-primary-500/10 flex items-center justify-center mb-6 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-white/30 group-hover:text-primary-400 transition-colors duration-500" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
