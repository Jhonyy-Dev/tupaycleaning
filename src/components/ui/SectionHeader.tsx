import { cn } from '@/lib/helpers';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4">
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-display-sm md:text-display font-bold tracking-tight text-balance',
          light ? 'text-neutral-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            light ? 'text-neutral-600' : 'text-white/60'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
