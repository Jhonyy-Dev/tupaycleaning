import { MapPin } from 'lucide-react';

const serviceAreas = [
  { name: 'Manhattan', description: 'Our home base — all neighborhoods' },
  { name: 'Brooklyn', description: 'Park Slope, Williamsburg, DUMBO & more' },
  { name: 'Queens', description: 'Astoria, Jackson Heights, Flushing & more' },
  { name: 'Bronx', description: 'Riverdale, Fordham, Pelham Bay & more' },
  { name: 'Staten Island', description: 'All areas covered' },
  { name: 'Long Island & NJ', description: 'Available upon request' },
];

export default function MapSection() {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Based in Manhattan, serving all of NYC
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Our team operates out of Manhattan and can reach any borough in New York City.
              Whether you are in Brooklyn, Queens, the Bronx, or Staten Island — we come to you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">{area.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.75904032920755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NYC Home Pro - Manhattan, New York"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
