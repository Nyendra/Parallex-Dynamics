"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { soundEngine } from "@/utils/soundEngine";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "purple";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  showArrow = true,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const handleMouseEnter = () => {
    soundEngine?.playHover();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    soundEngine?.playClick();
    if (onClick) onClick();
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs h-10",
    md: "px-6 py-3 text-xs md:text-sm h-12",
    lg: "px-8 py-4 text-xs md:text-sm h-14",
  };

  const baseClasses =
    "group relative inline-flex items-center justify-between font-orbitron font-bold uppercase tracking-widest transition-all duration-300 select-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-md";

  const variantClasses = {
    primary:
      "bg-cyan-accent text-space-darkest hover:bg-cyan-glow shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] border border-cyan-300",
    secondary:
      "glass-panel border border-white/20 text-white hover:border-cyan-400/60 hover:bg-space-navy/80 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]",
    outline:
      "border border-cyan-400/50 text-cyan-300 hover:text-space-darkest hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]",
    purple:
      "bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] border border-purple-400",
  };

  const innerContent = (
    <>
      {/* Primary Slide-Sweep Hover Background for Outline variant */}
      {variant === "outline" && (
        <span className="absolute inset-0 bg-cyan-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      )}

      <span className="relative z-10 flex items-center gap-2.5">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </span>

      {showArrow && (
        <span className="relative z-10 ml-3 pl-3 border-l border-current/30 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
          <ChevronRight size={16} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {innerContent}
    </button>
  );
};
