import { MessageSquare, ClipboardCheck, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

const icons = [MessageSquare, ClipboardCheck, CheckCircle];

export default function ProcessPreview() {
  return (
    <div className="section-padding bg-white/[0.02]">
      <div className="container-wide">
        <SectionHeader
          label="How We Work"
          title="Simple 3-step process"
          description="From first contact to final delivery, everything is designed to be clear, fast and hassle-free."
        />

        <div className="relative">
          <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={step.step}
                  className="relative text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="text-[11px] font-bold text-primary-400/60 uppercase tracking-[0.2em] mb-3 block">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
