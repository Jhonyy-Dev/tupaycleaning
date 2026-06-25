import { PROJECTS } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FeaturedProjects() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Featured Projects"
          title="Our work speaks for itself"
          description="Every project demonstrates our commitment to excellence. Real results in New York properties."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="group relative rounded-2xl overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-400 mb-2">{project.type}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 leading-snug">{project.title}</h3>
                    <p className="text-sm text-white/50">{project.location}</p>
                  </div>
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/30 backdrop-blur-sm bg-white/5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
