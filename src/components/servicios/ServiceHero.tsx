import Button from '@/components/ui/Button';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const words = title.split(' ');

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-neutral-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
      </div>

      <div className="relative container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-px bg-primary-400 mb-8 animate-grow-width" style={{ animationDelay: '0.1s' }} />
            <span className="inline-block text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[0.95]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <span className="inline-block animate-word-reveal" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-2xl font-light opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
            <Button href="/contacto" size="lg">
              Get a Quote
            </Button>
            <Button href="tel:+19295493683" variant="outline" size="lg">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
