'use client';

import { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      setTransform(`translate3d(${x}px, ${y}px, 0px)`);
    },
    [strength]
  );

  const reset = useCallback(() => {
    setTransform('translate3d(0px, 0px, 0px)');
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ transform, transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
      className={className}
    >
      {children}
    </div>
  );
}
