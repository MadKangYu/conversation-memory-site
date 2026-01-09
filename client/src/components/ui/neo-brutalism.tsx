import React from 'react';
import { cn } from '@/lib/utils';

// --- NeoButton ---
interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'bg-background text-foreground hover:bg-muted',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'btn-neo inline-flex items-center justify-center gap-2 whitespace-nowrap',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
NeoButton.displayName = 'NeoButton';

// --- NeoCard ---
interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  noShadow?: boolean;
}

export const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, noShadow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'card-neo',
          noShadow && 'shadow-none',
          className
        )}
        {...props}
      />
    );
  }
);
NeoCard.displayName = 'NeoCard';

// --- NeoBadge ---
interface NeoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const NeoBadge = React.forwardRef<HTMLSpanElement, NeoBadgeProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      outline: 'bg-transparent text-foreground',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center border-2 border-border px-2.5 py-0.5 text-xs font-bold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
NeoBadge.displayName = 'NeoBadge';

// --- NeoInput ---
export const NeoInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full border-2 border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-neo-sm focus:shadow-neo transition-all',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
NeoInput.displayName = 'NeoInput';

// --- Marquee ---
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee = ({
  children,
  pauseOnHover = false,
  direction = 'left',
  speed = 20,
  className,
  ...props
}: MarqueeProps) => {
  return (
    <div
      className={cn('group flex overflow-hidden p-2', className)}
      {...props}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 gap-4 animate-marquee',
          direction === 'right' && 'animate-marquee-reverse',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};
