"use client";

import React from "react";

interface ChevronMotifProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  color?: string;
}

export const ChevronMotif: React.FC<ChevronMotifProps> = ({
  className = "",
  size = "md",
  animated = false,
  color = "text-cyan-400",
}) => {
  const sizeMap = {
    sm: "text-xs tracking-tighter font-extrabold",
    md: "text-base tracking-tighter font-black",
    lg: "text-xl tracking-tighter font-black",
    xl: "text-3xl tracking-tighter font-black",
  };

  return (
    <span
      className={`inline-flex items-center select-none font-mono ${sizeMap[size]} ${color} ${
        animated ? "animate-chevron" : ""
      } ${className}`}
      aria-hidden="true"
    >
      &gt;&gt;
    </span>
  );
};
