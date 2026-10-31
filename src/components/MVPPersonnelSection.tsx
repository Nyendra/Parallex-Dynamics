"use client";

import React from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/soundEngine";
import { MVP_PROGRAM_DATA, MVPPersonnel } from "@/data/mvpPersonnelData";

interface MVPPersonnelSectionProps {
  data?: typeof MVP_PROGRAM_DATA;
}

export const MVPPersonnelSection: React.FC<MVPPersonnelSectionProps> = ({
  data = MVP_PROGRAM_DATA,
}) => {
  const renderPersonnelCard = (person: MVPPersonnel) => (
    <div
      key={person.id}
      onMouseEnter={() => soundEngine?.playHover()}
      onClick={() => soundEngine?.playClick()}
      className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 group relative overflow-hidden transition-all duration-300"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Portrait */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-space-darkest border border-cyan-accent/30 shadow-lg">
            <Image
              src={person.image}
              alt={`${person.name}, ${person.position}`}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-space-darkest/80 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Personnel Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-space-darkest/85 backdrop-blur border border-cyan-accent/30 font-mono text-[10px] text-cyan-accent tracking-wider">
              {person.personnelId}
            </div>

            {/* Status Indicator */}
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-space-darkest/85 backdrop-blur border border-emerald-500/40 font-mono text-[10px] text-emerald-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{person.activeStatus}</span>
            </div>

            {/* Bottom Designation Badge */}
            <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded bg-space-darkest/90 backdrop-blur border border-white/10 flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">DESIGNATION</span>
              <span className="text-cyan-accent font-semibold">{person.designation}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Personnel Details & Citation */}
        <div className="md:col-span-7 lg:col-span-8 space-y-4">
          {/* Name & Official Title */}
          <div className="space-y-1">
            <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-accent transition-colors">
              {person.name}
            </h3>
            <p className="font-mono text-sm text-cyan-accent/90 tracking-wide">
              {person.position}
            </p>
          </div>

          {/* Dossier / Biography */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center space-x-2">
              <span className="text-cyan-accent font-bold">&gt;&gt;</span>
              <span>PERSONNEL DOSSIER & CITATION</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans font-light border-l-2 border-cyan-accent/30 pl-3.5 py-0.5">
              {person.biography}
            </p>
          </div>

          {/* Metadata Row: Fits on 1 line across viewport */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[11px] sm:text-xs">
            <div className="flex items-center space-x-1.5 text-slate-400 whitespace-nowrap">
              <span>DIVISION:</span>
              <span className="text-slate-200">{person.division}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400 whitespace-nowrap flex-shrink-0">
              <span>RECOGNITION:</span>
              <span className="text-cyan-accent font-semibold">{person.recognitionStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      aria-labelledby="mvp-program-heading"
      className="space-y-12"
    >
      {/* Technical Section Divider with Generous Vertical Spacing */}
      <div className="pt-16 pb-4 flex items-center justify-center relative" aria-hidden="true">
        <div className="w-full max-w-5xl flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-accent/20 to-cyan-accent/40" />
          <div className="flex items-center space-x-2 px-3 py-1 rounded border border-cyan-accent/25 bg-space-darkest/70 backdrop-blur font-mono text-[10px] text-cyan-accent/80 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
            <span>PERSONNEL RECOGNITION // OPERATIONAL MERIT</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-accent/20 to-cyan-accent/40" />
        </div>
      </div>

      {/* Program Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2
          id="mvp-program-heading"
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight"
        >
          {data.heading}
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed font-sans font-light max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Featured Personnel Presentation */}
      <div className="max-w-5xl mx-auto space-y-8">
        {data.personnel.map(renderPersonnelCard)}
      </div>

      {/* Corporate Administrative Disclaimer */}
      <div className="pt-2 text-center">
        <p className="text-xs font-mono text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
};
