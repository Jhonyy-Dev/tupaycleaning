import { ArrowDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { IMAGES } from '@/lib/images';

const headlineWords = ['Premium', 'cleaning', 'for', 'homes', '&', 'businesses', 'in', 'New', 'York'];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
      </div>

      <div className="relative container-wide">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-px bg-primary-400 mb-6 md:mb-8 animate-grow-width" style={{ animationDelay: '0.2s' }} />
            <span className="inline-block text-primary-400 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Premium cleaning in NYC &amp; the tri-state area
            </span>
          </div>

          <h1 className="mt-6 md:mt-8 text-[clamp(2rem,6vw,5.5rem)] font-bold tracking-tight text-white leading-[1.1]">
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
                <span
                  className="inline-block animate-word-reveal"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-6 md:mt-8 text-base md:text-xl text-white/50 leading-relaxed max-w-2xl font-light opacity-0 animate-fade-up"
            style={{ animationDelay: '1.4s' }}
          >
            Meticulous residential, home and commercial cleaning &mdash; deep cleans, recurring
            service, move-in/move-out, post-construction and Airbnb turnovers. Spotless,
            guaranteed results for homeowners, landlords and property managers.
          </p>

          <div
            className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.6s' }}
          >
            <Button href="/contacto" size="lg">
              Get a Quote
            </Button>
            <Button href="/servicios/limpieza" variant="outline" size="lg">
              View Services
            </Button>
          </div>

          <div
            className="mt-12 md:mt-20 flex items-center gap-6 md:gap-10 text-sm text-white/40 opacity-0 animate-fade-in"
            style={{ animationDelay: '2s' }}
          >
            {[
              { value: '500+', label: 'Projects completed' },
              { value: '10+', label: 'Areas served' },
              { value: '100%', label: 'Satisfaction guaranteed' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10">
                {i > 0 && <div className="w-px h-8 bg-white/10 -ml-6 md:-ml-10" />}
                <div>
                  <span className="block text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs tracking-wide">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="animate-bounce-subtle">
          <ArrowDown className="w-5 h-5 text-white/30" />
        </div>
      </div>
    </section>
  );
}
