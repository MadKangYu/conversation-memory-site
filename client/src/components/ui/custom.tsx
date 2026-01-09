import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Glass Card Component
export const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { hoverEffect?: boolean }
>(({ className, hoverEffect = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300",
      hoverEffect && "hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]",
      className
    )}
    {...props}
  />
));
GlassCard.displayName = "GlassCard";

// Neural Button Component
export const NeuralButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" }
>(({ className, variant = "primary", ...props }, ref) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary/50 text-primary hover:bg-primary/10",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg px-6 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
NeuralButton.displayName = "NeuralButton";

// Section Container
export const Section = ({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) => (
  <section id={id} className={cn("relative py-20 md:py-32 overflow-hidden", className)}>
    <div className="container relative z-10">{children}</div>
  </section>
);

// Gradient Text
export const GradientText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
      className
    )}
  >
    {children}
  </span>
);

// Animated Background Blob
export const BackgroundBlob = ({
  className,
  color = "bg-primary",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={cn(
      "absolute -z-10 h-[500px] w-[500px] rounded-full blur-[100px] opacity-20 animate-pulse",
      color,
      className
    )}
  />
);
