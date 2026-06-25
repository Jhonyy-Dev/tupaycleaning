'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium text-white/80">
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/30',
            'transition-colors duration-200 outline-none',
            'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            error ? 'border-red-500/50' : 'border-white/10',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
