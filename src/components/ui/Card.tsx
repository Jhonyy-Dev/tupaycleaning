import { cn } from '@/lib/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 md:p-8 transition-all duration-300',
        hover && 'hover:border-primary-500/30 hover:bg-white/[0.07] hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
