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
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md",
    secondary:
      "bg-muted text-foreground hover:bg-muted/70 border border-border",
    ghost:
      "text-muted-foreground hover:text-foreground hover:bg-muted/50",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-full",
    md: "px-7 py-3 text-sm rounded-full",
    lg: "px-9 py-4 text-base rounded-full",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
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
      {children}
    </button>
  );
}
