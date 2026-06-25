'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { supabase } from '@/lib/supabase';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  nombre: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  telefono: z.string().min(7, 'Please enter a valid phone number'),
  servicio: z.string().min(1, 'Please select a service type'),
  barrio: z.string().min(2, 'Please enter your neighborhood or area'),
  mensaje: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'Location', value: CONTACT.address, href: undefined },
  { icon: Clock, label: 'Hours', value: CONTACT.hours, href: undefined },
];

export default function ContactoContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const { error } = await supabase.from('quote_requests').insert([
      {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        servicio: data.servicio,
        barrio: data.barrio,
        mensaje: data.mensaje,
      },
    ]);
    if (error) {
      console.error('Supabase error:', error.message);
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 to-transparent" />
        <div className="relative container-wide">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6">
              Contact
            </span>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight text-white text-balance">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Request a free quote with no obligation. We respond in less than 2 hours and offer
              a complimentary evaluation of your property.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card p-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message sent successfully
                  </h3>
                  <p className="text-white/60 max-w-md mx-auto">
                    Thank you for contacting us. Our team will review your request and
                    respond within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-10">
                  <h2 className="text-xl font-bold text-white mb-8">
                    Request a Quote
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      error={errors.nombre?.message}
                      {...register('nombre')}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="you@email.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      placeholder="+1 (XXX) XXX-XXXX"
                      error={errors.telefono?.message}
                      {...register('telefono')}
                    />
                    <div className="space-y-2">
                      <label
                        htmlFor="servicio"
                        className="block text-sm font-medium text-white/80"
                      >
                        Service Type
                      </label>
                      <select
                        id="servicio"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors duration-200 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 appearance-none"
                        {...register('servicio')}
                      >
                        <option value="" className="bg-neutral-900">
                          Select a service
                        </option>
                        <option value="limpieza" className="bg-neutral-900">
                          Residential & Commercial Cleaning
                        </option>
                        <option value="pintura" className="bg-neutral-900">
                          Painting
                        </option>
                        <option value="remodelacion" className="bg-neutral-900">
                          Renovation
                        </option>
                        <option value="make-ready" className="bg-neutral-900">
                          Make-Ready
                        </option>
                        <option value="otro" className="bg-neutral-900">
                          Other
                        </option>
                      </select>
                      {errors.servicio && (
                        <p className="text-sm text-red-400">{errors.servicio.message}</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        label="Neighborhood or Area"
                        placeholder="E.g.: Astoria, Queens"
                        error={errors.barrio?.message}
                        {...register('barrio')}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Textarea
                        label="Message"
                        placeholder="Tell us about your project: property type, approximate size, what you need..."
                        error={errors.mensaje?.message}
                        {...register('mensaje')}
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Request
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                            {item.label}
                          </p>
                          <p className="text-white/80 text-sm mt-1">{item.value}</p>
                        </div>
                      </li>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block hover:opacity-80 transition-opacity"
                        >
                          {content}
                        </a>
                      );
                    }
                    return content;
                  })}
                </ul>
              </div>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Message us on WhatsApp</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    Quick and direct response
                  </p>
                </div>
              </a>

              <div className="glass-card overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] bg-neutral-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-8 h-8 text-white/20 mx-auto mb-3" />
                    <p className="text-white/40 text-sm">
                      Serving New York &amp; the Tri-State Area
                    </p>
                    <p className="text-white/20 text-xs mt-1">
                      NYC, Long Island, Westchester, New Jersey, Connecticut &amp; The Hamptons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
