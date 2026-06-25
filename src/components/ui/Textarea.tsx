'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/helpers';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium text-white/80">
          {label}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            'w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/30',
            'transition-colors duration-200 outline-none resize-none',
            'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            error ? 'border-red-500/50' : 'border-white/10',
            className
          )}
          rows={5}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
