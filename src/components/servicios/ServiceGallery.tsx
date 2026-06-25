import SectionHeader from '@/components/ui/SectionHeader';

interface ServiceGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  return (
    <div className="section-padding bg-white/[0.02]">
      <div className="container-wide">
        <SectionHeader
          label="Gallery"
          title="Before & After"
          description="Real results from our most recent work. Quality shows in the details."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative aspect-[16/11] rounded-2xl overflow-hidden group opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/0 transition-colors duration-700" />
              <span className="sr-only">{image.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
