"use client";

import React from "react";
import Link from "next/link";
import { LogoBadge } from "./LogoBadge";
import { ChevronRight, ExternalLink } from "lucide-react";

interface SocialChannel {
  name: string;
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
}

const BlueskyIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = "w-3.5 h-3.5",
  size = 14,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.567 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.309-6.755-3.37C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026z" />
  </svg>
);

const OFFICIAL_COMMUNICATIONS: SocialChannel[] = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/paradallax.space",
    ariaLabel: "Paradallax Initiative on Bluesky",
    icon: BlueskyIcon,
  },
];

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
                PARADALLAX <span className="text-cyan-accent font-light">INITIATIVE</span>
              </span>
            </div>
            <p className="font-orbitron text-xl font-bold text-gradient-cyan tracking-wider">
              Beyond Distance.
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-sans font-light">
              Advanced interstellar transportation, frontier logistics, scientific exploration, 
              defense systems, and planetary engineering throughout known space.
            </p>

            {/* Official Communications */}
            <div className="pt-2">
              <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-400 font-medium mb-2.5">
                OFFICIAL COMMUNICATIONS
              </span>
              <ul className="flex flex-wrap items-center gap-3">
                {OFFICIAL_COMMUNICATIONS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.name}>
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={channel.ariaLabel}
                        className="group inline-flex items-center gap-2 px-2.5 py-1.5 rounded border border-white/10 bg-white/[0.02] hover:bg-cyan-accent/[0.08] hover:border-cyan-accent/40 text-xs font-mono text-slate-300 hover:text-cyan-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-accent focus-visible:border-cyan-accent"
                      >
                        <Icon className="w-3.5 h-3.5 text-cyan-accent/80 group-hover:text-cyan-accent transition-colors shrink-0" />
                        <span className="tracking-wide">{channel.name}</span>
                        <ExternalLink
                          size={11}
                          className="text-slate-500 group-hover:text-cyan-accent/90 transition-colors shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
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
          <p>© 2226 Paradallax Initiative. All rights reserved across all charted solar systems.</p>
          <p className="text-center md:text-right text-[11px] text-slate-500 max-w-lg">
            * Paradallax Initiative — Moving humanity forward, subject to applicable restrictions. 
            Availability of return transportation may vary by destination topology.
          </p>
        </div>
      </div>
    </footer>
  );
};
