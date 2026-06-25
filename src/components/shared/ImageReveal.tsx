'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/helpers';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  parallax?: boolean;
  delay?: number;
}

export default function ImageReveal({
  src,
  alt,
  className,
  aspectRatio = 'aspect-[4/3]',
  parallax = false,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '15%' : '0%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden rounded-2xl', aspectRatio, className)}>
      <motion.div
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
        transition={{ duration: 1.2, delay, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${src})`,
            y,
            scale,
          }}
          initial={{ scale: 1.3 }}
          animate={isInView ? { scale: 1.15 } : { scale: 1.3 }}
          transition={{ duration: 1.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>
      <span className="sr-only">{alt}</span>
    </div>
  );
}
