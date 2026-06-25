'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  splitBy?: 'words' | 'chars';
}

export default function TextReveal({
  children,
  as: Tag = 'h2',
  className,
  delay = 0,
  splitBy = 'words',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const units = splitBy === 'words' ? children.split(' ') : children.split('');

  return (
    <Tag className={className} ref={ref as React.RefObject<HTMLHeadingElement>}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {units.map((unit, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', rotateX: -80 }}
              animate={isInView ? { y: '0%', rotateX: 0 } : { y: '110%', rotateX: -80 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.04,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {unit}
            </motion.span>
            {splitBy === 'words' && i < units.length - 1 && '\u00A0'}
          </span>
        ))}
      </span>
    </Tag>
  );
}
