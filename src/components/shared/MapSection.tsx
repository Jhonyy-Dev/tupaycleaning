import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/constants';

export default function MapSection() {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Cleaning across New York &amp; the Tri-State Area
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              From all five NYC boroughs to Long Island, Westchester, New Jersey, Connecticut and
              The Hamptons, our team brings the same meticulous, professional standard to every
              home and business we clean.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area) => (
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
            <p className="text-white/30 text-xs mt-6">
              Plus all surrounding neighborhoods and towns across the New York metro and tri-state
              area. Not sure if we cover your location? Just ask &mdash; we likely do.
            </p>
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
              title="Tupay Cleaning - serving New York &amp; the Tri-State Area"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
