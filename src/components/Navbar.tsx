"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoBadge } from "./LogoBadge";
import { soundEngine } from "@/utils/soundEngine";
import { Volume2, VolumeX, Menu, X, ChevronRight, Compass } from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "OPERATIONS", path: "/operations" },
  { name: "SERVICES", path: "/services" },
  { name: "FLEET", path: "/fleet" },
  { name: "FOUNDERS", path: "/founders" },
  { name: "THE AXIOMS", path: "/axioms" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (soundEngine) {
      setIsMuted(soundEngine.getMuted());
      const unsubscribe = soundEngine.subscribe((muted) => setIsMuted(muted));
      return () => {
        unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    if (soundEngine) {
      const muted = soundEngine.toggleMute();
      setIsMuted(muted);
    }
  };

  const handleNavClick = () => {
    if (soundEngine) soundEngine.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "h-16 bg-space-darkest/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "h-24 bg-gradient-to-b from-space-darkest/90 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <Link
          href="/"
          onClick={handleNavClick}
          onMouseEnter={() => soundEngine?.playHover()}
          className="flex items-center space-x-3.5 group focus:outline-none"
        >
          <LogoBadge size={scrolled ? "sm" : "md"} animated />
          <div className="flex flex-col">
            <span className="font-orbitron font-bold tracking-widest text-base sm:text-lg text-white group-hover:text-cyan-accent transition-colors">
              PARALLAX <span className="text-cyan-accent font-light">DYNAMICS</span>
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400 transition-all ${
                scrolled ? "hidden sm:inline" : "inline"
              }`}
            >
              Beyond Distance.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Link Pills */}
        <nav className="hidden md:flex items-center space-x-1 bg-space-navy/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleNavClick}
                onMouseEnter={() => soundEngine?.playHover()}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-cyan-accent font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-cyan-accent/10 border border-cyan-accent/30 rounded-full animate-pulse-slow -z-10" />
                )}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Sound Control */}
        <div className="flex items-center space-x-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundEngine?.playHover()}
            title={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all ${
              !isMuted
                ? "border-cyan-accent bg-cyan-accent/15 text-cyan-accent shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/30"
            }`}
          >
            {!isMuted ? <Volume2 size={16} className="animate-pulse" /> : <VolumeX size={16} />}
          </button>

          {/* Quick CTA Button (Desktop) */}
          <Link
            href="/services"
            onClick={handleNavClick}
            onMouseEnter={() => soundEngine?.playHover()}
            className="hidden lg:inline-flex items-center space-x-2 px-4 py-2 rounded-md font-orbitron text-xs font-semibold uppercase tracking-wider bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent hover:text-space-darkest transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]"
          >
            <Compass size={14} />
            <span>Discover</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-1 space-y-3 bg-space-darkest/95 backdrop-blur-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleNavClick}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-mono tracking-widest uppercase transition-colors ${
                  isActive
                    ? "bg-cyan-accent/15 text-cyan-accent font-bold border-l-2 border-cyan-accent"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className="text-cyan-accent" />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
