'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div key={testimonial.id} className="text-center animate-fade-in">
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
          ))}
        </div>
        <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 font-light mb-8">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-white/50 text-sm mt-1">{testimonial.service} &mdash; {testimonial.location}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button onClick={prev} aria-label="Previous testimonial" className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} aria-label="Next testimonial" className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors duration-200">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
