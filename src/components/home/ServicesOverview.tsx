import Link from 'next/link';
import { Sparkles, Paintbrush, Wrench, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

const icons = [Sparkles, Paintbrush, Wrench];

export default function ServicesOverview() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Our Services"
          title="Spotless spaces, expertly maintained"
          description="Professional cleaning for homes and businesses is our specialty, complemented by expert painting and renovation, across New York and the tri-state area."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {SERVICES.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link key={service.id} href={service.href} className="block group">
                <div
                  className="relative h-full bg-neutral-950 p-8 md:p-10 overflow-hidden opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.2 + i * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/0 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-primary-500/10 flex items-center justify-center transition-colors duration-500">
                        <Icon className="w-6 h-6 text-white/40 group-hover:text-primary-400 transition-colors duration-500" />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 group-hover:bg-primary-500/10 transition-all duration-500 hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary-400 transition-colors duration-500 group-hover:rotate-0 -rotate-45" />
                      </div>
                    </div>

                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/10 transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-50 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
