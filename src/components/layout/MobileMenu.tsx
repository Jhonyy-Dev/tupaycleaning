'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/routes';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/helpers';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-neutral-950 border-l border-white/5 lg:hidden translate-x-0 animate-[slide-in-right_0.3s_ease-out]">
        <div className="flex items-center justify-end p-6">
          <button onClick={onClose} className="p-2 text-white/60 hover:text-white transition-colors" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-6 pb-8 space-y-1">
          {NAV_LINKS.map((link) =>
            'children' in link && link.children ? (
              <div key={link.label} className="space-y-1">
                <span className="block px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">{link.label}</span>
                {link.children.map((child: { label: string; href: string }) => (
                  <Link key={child.href} href={child.href} onClick={onClose} className={cn('block px-4 py-3 text-base rounded-lg transition-colors duration-200', pathname === child.href ? 'text-primary-400 bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5')}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={onClose} className={cn('block px-4 py-3 text-base rounded-lg transition-colors duration-200', pathname === link.href ? 'text-primary-400 bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5')}>
                {link.label}
              </Link>
            )
          )}
          <div className="pt-6">
            <Button href="/contacto" className="w-full" onClick={onClose}>Get a Quote</Button>
          </div>
        </nav>
      </div>
    </>
  );
}
