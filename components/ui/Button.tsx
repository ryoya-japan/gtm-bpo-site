import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] active:scale-[0.98]",
    secondary:
      "bg-card text-foreground border border-border hover:border-accent/50 hover:bg-muted active:scale-[0.98]",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-muted/50",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
