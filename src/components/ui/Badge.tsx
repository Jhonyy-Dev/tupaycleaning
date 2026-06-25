import { cn } from '@/lib/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white/80',
    primary: 'bg-primary-500/10 text-primary-400 border border-primary-500/20',
    outline: 'border border-white/20 text-white/70',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
