"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { CorporateVideoPlayer } from "@/components/CorporateVideoPlayer";
import { CorporateMetrics } from "@/components/CorporateMetrics";
import { soundEngine } from "@/utils/soundEngine";
import { Rocket, Microscope, Shield, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

const HOME_FEATURES = [
  {
    id: "FEAT-01",
    title: "HORIZON",
    subtitle: "Luxury Civilian Transit",
    description: "Five-star civilian travel across lightyears with stasis suites, observation decks, and zero-g spa amenities.",
    metric: "312 STARSHIPS IN SERVICE",
    image: "/media/fleet/horizon.jpg",
    link: "/services",
  },
  {
    id: "FEAT-02",
    title: "GENESIS",
    subtitle: "Scientific Exploration",
    description: "Deep space research platforms probing quantum singularities, ancient alien structures, and stellar physics.",
    metric: "143 CHARTED SYSTEMS",
    image: "/media/fleet/odyssey.jpg",
    link: "/services",
  },
  {
    id: "FEAT-03",
    title: "VANGUARD",
    subtitle: "Frontier Defense & Rescue",
    description: "Tactical escort frigates providing rapid-response security, anti-piracy protection, and emergency evacuation.",
    metric: "99.998% MISSION SUCCESS*",
    image: "/media/fleet/hammerhead.jpg",
    link: "/services",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-between items-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero Background Image with Localized Directional Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/media/hero/hero-parallax-transit.jpg"
            alt="Parallax Dynamics Interstellar Transit Gateway"
            fill
            className="object-cover object-[70%_center] lg:object-center filter brightness-100 contrast-105"
            priority
            sizes="100vw"
          />
          {/* Directional gradient protecting copy on the left while leaving gateway & ship bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-space-darkest/85 via-space-darkest/30 to-transparent pointer-events-none" />
          {/* Soft top gradient for seamless header integration */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-space-darkest/80 via-space-darkest/20 to-transparent pointer-events-none" />
          {/* Soft bottom gradient transitioning into page content */}
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-space-darkest via-space-darkest/40 to-transparent pointer-events-none" />
          {/* Subtle sci-fi scanline texture */}
          <div className="absolute inset-0 scanline-bg opacity-15 pointer-events-none" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center my-auto space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono tracking-[0.25em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-ping" />
            <span className="font-bold">&gt;&gt;</span>
            <span>HUMANITY&apos;S INTERSTELLAR INFRASTRUCTURE</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-orbitron font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Beyond <span className="text-gradient-cyan">Distance.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="max-w-3xl text-base sm:text-xl text-slate-300 font-sans font-light leading-relaxed">
            Advanced travel, exploration, and frontier operations throughout known space.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button href="/services" variant="primary" size="lg" className="w-full sm:w-auto">
              Discover Parallax
            </Button>
            <Button href="/operations" variant="secondary" size="lg" className="w-full sm:w-auto">
              View Operations
            </Button>
          </div>
        </div>

        {/* Hero Telemetry Strip */}
        <div className="relative z-10 w-full pt-8">
          <HeroTelemetry />
        </div>
      </section>

      {/* SECTION 2 — CORPORATE STATEMENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-12">
        <div className="p-8 sm:p-16 rounded-3xl glass-panel border border-cyan-accent/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

          <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block mb-4">
            // CORPORATE STATEMENT
          </span>

          <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[3.1rem] text-white tracking-tight">
            <span className="block font-orbitron text-white">"We don't predict humanity's future.</span>
            <span className="block text-gradient-cyan mt-3 sm:mt-4">We make it reachable."</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans font-light mt-6">
            Parallax Dynamics operates one of humanity's largest integrated interstellar transportation and exploration networks. From civilian travel to deep-space research, Parallax provides the infrastructure required to move people, knowledge, and industry beyond established space.
          </p>

          <p className="text-xs font-mono text-slate-500 italic mt-6 pt-6 border-t border-white/10">
            * Confidence should not be interpreted as a guarantee of regulatory approval or sub-light collision immunity.
          </p>
        </div>
      </section>

      {/* SECTION 3 — CORPORATE BROADCAST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CorporateVideoPlayer />
      </section>

      {/* SECTION 4 — OPERATIONS ARCHIVE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase flex items-center">
              <span className="font-bold mr-2">&gt;&gt;</span> OPERATIONAL RECORD // ARCHIVE INITIALIZATION
            </span>
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
              Public mission records pending release.
            </h3>
            <p className="text-xs font-sans text-slate-400 max-w-xl">
              Inspect archived records for expeditionary, scientific, diplomatic, and security operations.
            </p>
          </div>

          <Button href="/operations" variant="outline" size="md" className="flex-shrink-0">
            Open Operations Archive
          </Button>
        </div>
      </section>

      {/* SECTION 5 — 3 ASYMMETRICAL FEATURE PANELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block">
            // DIVISIONS OF PARALLAX
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Integrated Interstellar Operations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans font-light">
            From luxury starships to deep space research platforms, our specialized divisions drive progress across every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HOME_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="rounded-3xl glass-panel glass-panel-hover border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-space-darkest border-b border-white/10">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-space-darkest/80 backdrop-blur font-mono text-[10px] text-cyan-accent border border-cyan-accent/30">
                  {feat.id}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-cyan-accent tracking-widest uppercase block">
                    {feat.subtitle}
                  </span>
                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-cyan-accent transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-accent font-bold">{feat.metric}</span>
                  <Link
                    href={feat.link}
                    onClick={() => soundEngine?.playClick()}
                    onMouseEnter={() => soundEngine?.playHover()}
                    className="text-slate-300 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} className="text-cyan-accent" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FLAGSHIP FLEET SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel border border-cyan-accent/30 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-7 relative aspect-video w-full rounded-2xl overflow-hidden bg-space-darkest border border-cyan-accent/40 shadow-2xl group">
            <Image
              src="/media/fleet/horizon.jpg"
              alt="Horizon-Class Luxury Cruiser"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105 opacity-95"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-space-darkest/85 backdrop-blur-md font-mono text-xs text-cyan-accent border border-cyan-accent/40 font-bold shadow-lg">
              FLAGSHIP // PD-HZN-001 (HORIZON-CLASS)
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block mb-1">
                CIVILIAN LUXURY TRANSIT
              </span>
              <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white">
                HORIZON-CLASS CRUISER
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
              Designed for premium civilian interstellar voyages. Provides uncompromised luxury, observation environments, stasis suites, and long-distance passenger transit between established solar systems.
            </p>

            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-space-darkest/70 border border-white/10 font-mono text-xs">
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Length</span>
                <span className="text-white font-bold">1,240 Meters</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">FTL Rating</span>
                <span className="text-cyan-accent font-bold">Class 0.75</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Guests</span>
                <span className="text-white">4,500 Capacity</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Range</span>
                <span className="text-white">12,000 Parsecs</span>
              </div>
            </div>

            <Button href="/fleet" variant="primary" size="md">
              View Fleet Catalogue
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FOUNDERS PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block">
              // THE FOUNDERS
            </span>
            <h2 className="font-orbitron font-extrabold text-3xl text-white">
              THE FOUNDERS
            </h2>
          </div>
          <Button href="/founders" variant="outline" size="sm">
            Meet the Founders
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: "Flint Duskbourne", department: "OPERATIONS", img: "/media/founders/Flint.jpg" },
            { name: "Quill Varon", department: "SCIENCE", img: "/media/founders/Quill.jpg" },
            { name: "Fenn", department: "RELATIONS", img: "/media/founders/Fenn.jpg" },
            { name: "Cass", department: "ACQUISITIONS", img: "/media/founders/Cass.jpg" },
            { name: "Kant Vixit", department: "ENGINEERING", img: "/media/founders/Kant.jpg" },
            { name: "Onix", department: "MEDICAL RESEARCH", img: "/media/founders/Onix.jpg" },
            { name: "Reggie", department: "SECURITY", img: "/media/founders/Reggie.jpg" },
          ].map((founder, idx) => (
            <Link
              key={idx}
              href="/founders"
              onClick={() => soundEngine?.playClick()}
              onMouseEnter={() => soundEngine?.playHover()}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-space-darkest border border-white/10 hover:border-cyan-accent/50 transition-all shadow-lg"
            >
              <Image
                src={founder.img}
                alt={founder.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-85 group-hover:opacity-100"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-darkest via-space-darkest/40 to-transparent opacity-95 pointer-events-none" />
              <div className="absolute bottom-2.5 left-1.5 right-1.5 font-mono text-center">
                <span className="block font-bold text-white group-hover:text-cyan-accent text-xs truncate">
                  {founder.name}
                </span>
                <span className="block text-cyan-accent/90 text-[9px] tracking-wider uppercase font-semibold truncate">
                  {founder.department}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 8 — AXIOM INTERLUDE */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-6 my-12">
        <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
          // AXIOM VII
        </span>
        <h2 className="font-orbitron font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          "We go forward."
        </h2>
        <p className="font-mono text-xs text-slate-400 max-w-md">
          Retreat is mathematically incompatible with corporate policy.
        </p>
      </section>

      {/* SECTION 9 — CORPORATE PERFORMANCE METRICS */}
      <CorporateMetrics />
    </div>
  );
}
