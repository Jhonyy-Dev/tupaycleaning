'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/routes';
import { SITE_NAME, CONTACT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/helpers';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down',
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-18 md:h-20">
            <Link
              href="/"
              className="flex items-center"
            >
              <img
                src="/images/logo.webp"
                alt={SITE_NAME}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-white tracking-tight">{SITE_NAME}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                'children' in link && link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                        'text-white/70 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        dropdownOpen && 'rotate-180'
                      )} />
                    </button>
                    {dropdownOpen && (
                      <div
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden animate-fade-in"
                      >
                        {link.children.map((child: { label: string; href: string }) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-3 text-sm transition-colors duration-200',
                              pathname === child.href
                                ? 'text-primary-400 bg-white/5'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                      pathname === link.href
                        ? 'text-white bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-primary-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <Button href="/contacto" size="sm">
                Get a Quote
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
