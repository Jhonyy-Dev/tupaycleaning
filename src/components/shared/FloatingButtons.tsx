'use client';

import { CONTACT } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={CONTACT.phoneHref}
        className="float-btn block w-14 h-14"
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
        className="float-btn-delayed block w-14 h-14"
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
    </div>
  );
}
