"use client";

import React from "react";

const AXIOMS = [
  {
    number: "AXIOM I",
    roman: "I",
    text: "There is always something beyond the horizon.",
    commentary: "Distance is an optical illusion created by limited perception.",
  },
  {
    number: "AXIOM II",
    roman: "II",
    text: "Knowledge belongs to those willing to seek it.",
    commentary: "Discovery yields to ambition, never to hesitation.",
  },
  {
    number: "AXIOM III",
    roman: "III",
    text: "No distance is insurmountable.",
    commentary: "Topology is malleable under sufficient engineering.",
  },
  {
    number: "AXIOM IV",
    roman: "IV",
    text: "Progress requires uncertainty.",
    commentary: "Certainty is the domain of stagnant civilizations.",
  },
  {
    number: "AXIOM V",
    roman: "V",
    text: "Every problem has a solution.",
    commentary: "If conventional methods fail, implement alternative parameters.",
  },
  {
    number: "AXIOM VI",
    roman: "VI",
    text: "Humanity's future lies beyond what it knows.",
    commentary: "The familiar is merely the launching pad for the unknown.",
  },
  {
    number: "AXIOM VII",
    roman: "VII",
    text: "We go forward.",
    commentary: "Retreat is mathematically incompatible with corporate policy.",
  },
];

export default function AxiomsPage() {
  return (
    <div className="min-h-screen space-y-32 pb-32">
      {/* Page Hero Intro */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase">
          <span className="font-bold">&gt;&gt;</span>
          <span>PARALLAX CORPORATE DOCTRINE</span>
        </div>

        <h1 className="font-orbitron font-extrabold text-5xl sm:text-7xl text-white tracking-tight">
          THE AXIOMS
        </h1>

        <p className="font-orbitron font-light text-xl sm:text-2xl text-gradient-cyan max-w-2xl">
          The seven fundamental principles guiding every voyage, experiment, and corporate initiative across known space.
        </p>

        <div className="pt-8 text-xs font-mono text-slate-500 tracking-widest uppercase flex items-center space-x-2">
          <span>SCROLL TO CONTEMPLATE DOCTRINE</span>
          <span className="text-cyan-accent font-bold">&gt;&gt;</span>
        </div>
      </section>

      {/* Monumental Viewport-Dominating Axioms List */}
      <div className="space-y-36 max-w-6xl mx-auto px-4">
        {AXIOMS.map((axiom, idx) => (
          <section
            key={idx}
            className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-8 relative group"
          >
            {/* Background Ambient Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/5 via-purple-accent/5 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none" />

            {/* Axiom Number Badge */}
            <div className="flex items-center space-x-3 font-mono text-xs text-cyan-accent tracking-widest uppercase z-10">
              <span className="w-8 h-[1px] bg-cyan-accent/40" />
              <span>{axiom.number}</span>
              <span className="w-8 h-[1px] bg-cyan-accent/40" />
            </div>

            {/* Main Axiom Statement */}
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl drop-shadow-2xl z-10">
              "{axiom.text}"
            </h2>

            {/* Commentary */}
            <p className="text-sm sm:text-base font-mono text-slate-400 max-w-xl z-10 tracking-wide">
              {axiom.commentary}
            </p>

            {/* Chevron Divider */}
            <div className="pt-6 z-10 opacity-60 group-hover:opacity-100 transition-opacity font-orbitron font-bold text-cyan-accent text-xl">
              &gt;&gt;
            </div>
          </section>
        ))}
      </div>

      {/* Concluding Corporate Reflection */}
      <section className="max-w-3xl mx-auto text-center px-4 pt-20 border-t border-white/10 space-y-6">
        <h3 className="font-orbitron font-bold text-2xl text-white">
          THE PATH IS FORWARD
        </h3>
        <p className="text-sm font-sans font-light text-slate-300 leading-relaxed">
          The Axioms are non-negotiable pillars of Parallax Dynamics operations. They govern every starship departure, planetary contract, and scientific endeavor across the cosmos.
        </p>
        <div className="font-mono text-xs text-cyan-accent tracking-widest">
          PARALLAX DYNAMICS // BEYOND DISTANCE.
        </div>
      </section>
    </div>
  );
}
