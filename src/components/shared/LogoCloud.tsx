const partners = [
  'Residential Owners',
  'NYC Landlords',
  'Realtors',
  'Property Managers',
  'Contractors',
  'Airbnb Hosts',
];

export default function LogoCloud() {
  return (
    <div className="py-12 border-y border-white/5">
      <div className="container-wide">
        <p className="text-center text-sm text-white/40 mb-8 uppercase tracking-wider font-medium">
          We work with
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {partners.map((partner, i) => (
            <span
              key={partner}
              className="text-white/30 text-sm font-medium opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
