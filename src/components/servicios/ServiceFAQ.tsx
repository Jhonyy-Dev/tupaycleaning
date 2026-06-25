'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/helpers';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Frequently Asked Questions"
          title="We answer your questions"
          description="Find answers to the most common questions about our services."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown className={cn('w-5 h-5 text-white/40 shrink-0 transition-transform duration-300', openIndex === i && 'rotate-180')} />
              </button>
              <div className={cn('grid transition-all duration-300 ease-out', openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
