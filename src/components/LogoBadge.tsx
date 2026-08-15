"use client";

import React from "react";

interface LogoBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

export const LogoBadge: React.FC<LogoBadgeProps> = ({
  size = "md",
  className = "",
  animated = false,
}) => {
  const containerSizes = {
    sm: "w-8 h-8 rounded-md",
    md: "w-10 h-10 md:w-11 md:h-11 rounded-lg",
    lg: "w-14 h-14 rounded-xl",
  };

  const chevronSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5 md:w-6 md:h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`relative flex items-center justify-center bg-space-navy/80 border border-cyan-400/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 ${
        containerSizes[size]
      } ${className}`}
    >
      {/* Corner Registration Accents */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400" />
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400" />

      {/* Proprietary Double Chevron SVG */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${chevronSizes[size]} text-cyan-400 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] ${
          animated ? "animate-pulse" : ""
        }`}
      >
        <path
          d="M6 5L13 12L6 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L19 12L12 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Faint Internal Glow Background */}
      <span className="absolute inset-0 bg-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity rounded-inherit pointer-events-none" />
    </div>
  );
};
