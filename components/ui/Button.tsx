import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "cyan" | "gradient";
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
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "btn-neon-red",
    secondary: "btn-neon-cyan",
    ghost: "text-[#a0aec0] hover:text-white hover:bg-surface",
    cyan: "btn-neon-cyan",
    gradient: "btn-gradient-border",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-lg",
  };

  if (variant === "gradient") {
    const linkClasses = `btn-gradient-border ${sizes[size]} ${className}`;
    if (href) {
      return (
        <Link href={href} className={linkClasses}>
          <span className="btn-inner">{children}</span>
        </Link>
      );
    }
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={linkClasses}>
        <span className="btn-inner">{children}</span>
      </button>
    );
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
