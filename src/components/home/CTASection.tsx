import { Phone, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

export default function CTASection() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-display-sm md:text-display font-bold text-white tracking-tight mb-6 text-balance">
              Transform your property today
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Request a free quote with no obligation. We respond in less than 2 hours and offer
              a free evaluation of your property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contacto"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-black shadow-lg"
              >
                Get a Quote
              </Button>
              <Button
                href={CONTACT.phoneHref}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
              <Button
                href={CONTACT.whatsapp}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
