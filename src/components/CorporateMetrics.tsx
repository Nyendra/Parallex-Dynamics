"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface MetricDef {
  id: string;
  target: number;
  label: string;
  detail: string;
  decimals?: number;
  suffix?: string;
  useComma?: boolean;
}

const METRICS_DATA: MetricDef[] = [
  { id: "starships", target: 312, label: "Active Starships", detail: "Registered across 6 fleets", decimals: 0 },
  { id: "passengers", target: 4.8, label: "Passengers Transported", detail: "Across civilian corridors", decimals: 1, suffix: "M" },
  { id: "colonies", target: 72, label: "Supported Colonies", detail: "Autonomous planetary hubs", decimals: 0 },
  { id: "personnel", target: 18000, label: "Personnel System-Wide", detail: "Engineers, crew & security", decimals: 0, useComma: true },
  { id: "systems", target: 143, label: "Charted Solar Systems", detail: "Including frontier territories", decimals: 0 },
  { id: "successRate", target: 99.998, label: "Mission Completion Rate*", detail: "Unmatched operational metric", decimals: 3, suffix: "%" },
];

export const CorporateMetrics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    starships: 0,
    passengers: 0,
    colonies: 0,
    personnel: 0,
    systems: 0,
    successRate: 0,
  });
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const finalCounts: { [key: string]: number } = {};
      METRICS_DATA.forEach((m) => {
        finalCounts[m.id] = m.target;
      });
      setCounts(finalCounts);
      setIsCompleted(true);
      return;
    }

    if (!isInView) return;

    const duration = 1600; // 1.6 seconds total
    const startTime = performance.now();

    const updateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      METRICS_DATA.forEach((m, idx) => {
        // Subtle stagger per item (80ms offset)
        const staggerDelay = idx * 60;
        const itemElapsed = Math.max(0, elapsed - staggerDelay);
        const itemProgress = Math.min(itemElapsed / (duration - staggerDelay), 1);
        const itemEase = itemProgress > 0 ? 1 - Math.pow(1 - itemProgress, 3) : 0;
        nextCounts[m.id] = m.target * itemEase;
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        setIsCompleted(true);
      }
    };

    const animId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animId);
  }, [isInView]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-space-navy to-space-darkest border border-cyan-accent/20 space-y-12 shadow-2xl relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-3 relative z-10">
          <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block">
            // AUDITED METRICS
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-widest uppercase">
            CORPORATE PERFORMANCE METRICS
          </h2>
          <p className="text-xs font-mono text-slate-400">
            VERIFIED FISCAL & OPERATIONAL AUDIT // CYCLE 2226
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 relative z-10">
          {METRICS_DATA.map((m, idx) => {
            const rawVal = counts[m.id] ?? 0;
            let displayVal = "";

            if (m.decimals && m.decimals > 0) {
              displayVal = rawVal.toFixed(m.decimals);
            } else if (m.useComma) {
              displayVal = Math.floor(rawVal).toLocaleString();
            } else {
              displayVal = Math.floor(rawVal).toString();
            }

            return (
              <div
                key={m.id}
                className="text-center space-y-2 p-5 sm:p-6 rounded-2xl bg-space-darkest/60 border border-white/10 glass-panel-hover group"
              >
                <div className="flex items-baseline justify-center">
                  <span
                    className={`block text-3xl sm:text-5xl font-extrabold font-orbitron text-white text-gradient-cyan tracking-tight transition-all duration-300 ${
                      isCompleted ? "filter drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]" : ""
                    }`}
                  >
                    {displayVal}
                  </span>
                  {m.suffix && (
                    <span className="font-orbitron font-extrabold text-2xl sm:text-4xl text-cyan-accent ml-0.5">
                      {m.suffix}
                    </span>
                  )}
                </div>

                <span className="block font-orbitron font-bold text-xs sm:text-sm text-cyan-accent tracking-wider group-hover:text-white transition-colors">
                  {m.label}
                </span>
                <span className="block text-[11px] font-mono text-slate-400">
                  {m.detail}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-6 border-t border-white/10 text-xs font-mono text-slate-500 italic relative z-10">
          * Operational completion does not necessarily indicate preservation of original mission parameters.
        </div>
      </div>
    </section>
  );
};
