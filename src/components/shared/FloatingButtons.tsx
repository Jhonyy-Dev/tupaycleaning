'use client';

import { CONTACT } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={CONTACT.phoneHref}
        className="block w-14 h-14 transition-transform duration-300 hover:scale-125 active:scale-95 animate-[float_3s_ease-in-out_infinite]"
        aria-label="Call us"
        title={CONTACT.phone}
      >
        <img
          src="/images/llamada.png"
          alt="Call us"
          width={56}
          height={56}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </a>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-14 h-14 transition-transform duration-300 hover:scale-125 active:scale-95 animate-[float_3s_ease-in-out_infinite_0.5s]"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp: ${CONTACT.phone}`}
      >
        <img
          src="/images/whatsapp.webp"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
