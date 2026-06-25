import { cn } from '@/lib/helpers';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <section className={cn(className)}>
      {children}
    </section>
  );
}
