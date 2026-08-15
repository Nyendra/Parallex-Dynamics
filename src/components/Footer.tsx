"use client";

import React from "react";
import Link from "next/link";
import { LogoBadge } from "./LogoBadge";
import { ChevronRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-space-darkest border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32rem] h-32 bg-cyan-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <LogoBadge size="md" />
              <span className="font-orbitron font-bold tracking-widest text-2xl text-white">
                PARALLAX <span className="text-cyan-accent font-light">DYNAMICS</span>
              </span>
            </div>
            <p className="font-orbitron text-xl font-bold text-gradient-cyan tracking-wider">
              Beyond Distance.
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-sans font-light">
              Advanced interstellar transportation, frontier logistics, scientific exploration, 
              defense systems, and planetary engineering throughout known space.
            </p>
          </div>

          {/* Corporate Navigation Column */}
          <div>
            <h4 className="font-orbitron text-xs text-cyan-accent tracking-widest uppercase mb-4 font-bold">
              Corporate Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> Home
                </Link>
              </li>
              <li>
                <Link href="/operations" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> Operations Archive
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> Core Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> Fleet Catalogue
                </Link>
              </li>
              <li>
                <Link href="/founders" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> The Founders
                </Link>
              </li>
              <li>
                <Link href="/axioms" className="hover:text-cyan-accent transition-colors flex items-center">
                  <ChevronRight size={12} className="mr-1.5 text-cyan-accent" /> The Axioms
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Column */}
          <div>
            <h4 className="font-orbitron text-xs text-cyan-accent tracking-widest uppercase mb-4 font-bold">
              Compliance & Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li className="hover:text-slate-200 cursor-pointer">Regulatory Filings</li>
              <li className="hover:text-slate-200 cursor-pointer">First-Contact Protocols</li>
              <li className="hover:text-slate-200 cursor-pointer">Passenger Liability Waiver</li>
              <li className="hover:text-slate-200 cursor-pointer">Quantum Telemetry Terms</li>
              <li className="hover:text-slate-200 cursor-pointer">Special Acquisitions Clearance</li>
            </ul>
          </div>
        </div>

        {/* Satirical Corporate Fine Print */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2226 Parallax Dynamics. All rights reserved across all charted solar systems.</p>
          <p className="text-center md:text-right text-[11px] text-slate-500 max-w-lg">
            * Parallax Dynamics — Moving humanity forward, subject to applicable restrictions. 
            Availability of return transportation may vary by destination topology.
          </p>
        </div>
      </div>
    </footer>
  );
};
