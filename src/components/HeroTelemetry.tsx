"use client";

import React from "react";
import { Activity, Orbit, ShieldCheck, Radio } from "lucide-react";

export const HeroTelemetry: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto glass-panel px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-white/10 text-xs font-mono text-slate-400 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left Telemetry Cluster */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>
              STATUS: <span className="text-emerald-400 font-bold">OPERATIONAL</span>
            </span>
          </div>

          <div className="hidden md:block w-px h-3 bg-white/10" />

          <div className="hidden md:flex items-center space-x-2">
            <Orbit className="w-3.5 h-3.5 text-purple-400" />
            <span>
              ACTIVE FLEETS // <span className="text-cyan-300 font-bold">06</span>
            </span>
          </div>

          <div className="hidden lg:block w-px h-3 bg-white/10" />

          <div className="hidden lg:flex items-center space-x-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              CHARTED SYSTEMS // <span className="text-white font-bold">143</span>
            </span>
          </div>
        </div>

        {/* Right Telemetry Cluster */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">TRANSIT NETWORK // </span>
            <span className="text-cyan-300 font-bold">NOMINAL</span>
          </div>

          <div className="w-px h-3 bg-white/10" />

          <div className="text-cyan-400 font-extrabold flex items-center space-x-1">
            <span className="text-[10px] tracking-wider text-slate-500">CYCLE</span>
            <span>2226 EDITION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
