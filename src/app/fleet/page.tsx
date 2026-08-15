"use client";

import React, { useState } from "react";
import Image from "next/image";
import { soundEngine } from "@/utils/soundEngine";
import { Eye, ChevronDown, ShieldCheck, Compass, Sparkles } from "lucide-react";

interface Starship {
  id: string;
  registry: string;
  name: string;
  class: string;
  division: string;
  role: string;
  length: string;
  crew: string;
  passengers: string;
  ftlRating: string;
  range: string;
  hullComposition: string;
  image: string;
  description: string;
  specifications: { key: string; value: string }[];
  footnote?: string;
}

const FLEET: Starship[] = [
  {
    id: "SHIP-01",
    registry: "PD-HZN-001",
    name: "HORIZON-CLASS CRUISER",
    class: "Luxury Interstellar Passenger Cruiser",
    division: "PARALLAX HORIZON // PASSENGER OPERATIONS",
    role: "Civilian Transit & Interstellar Tourism",
    length: "1,240 Meters",
    crew: "380 Personnel",
    passengers: "4,500 Guests",
    ftlRating: "Class 0.75 (Sub-Space Warp)",
    range: "12,000 Parsecs",
    hullComposition: "Graphite-Reinforced Titanium Alloy",
    image: "/media/fleet/horizon.jpg",
    description:
      "Designed for premium civilian interstellar voyages. Provides uncompromised luxury, observation environments, stasis suites, and long-distance passenger transit between established solar systems.",
    specifications: [
      { key: "Propulsion Engine", value: "Quad Dual-Core Ion Impulse Drives" },
      { key: "Life Support", value: "Triply-Redundant Closed-Loop Atmospheric System" },
      { key: "Gravity Simulator", value: "Dual Centrifugal Sub-deck Arrays (1.0G Earth Standard)" },
      { key: "Stasis Capacity", value: "4,500 Individual Cryo-Pods" },
      { key: "Registry Code", value: "PD-HZN-001 (Flagship Fleet)" },
    ],
    footnote: "* Stasis wake-up protocol guaranteed within 3 business days of target arrival.",
  },
  {
    id: "SHIP-02",
    registry: "PD-ATL-004",
    name: "ATLAS COLONY CARRIER",
    class: "Heavy Logistics & Colony Carrier",
    division: "PARALLAX LOGISTICS // HEAVY INFRASTRUCTURE",
    role: "Frontier Resupply & Modular Transport",
    length: "2,850 Meters",
    crew: "650 Personnel",
    passengers: "12,000 Settlers",
    ftlRating: "Class 1.2 (Heavy Mass Fold)",
    range: "8,500 Parsecs",
    hullComposition: "Heavy Industrial Composite Shielding",
    image: "/media/fleet/atlas.jpg",
    description:
      "Massive transportation vessel built for colony deployment. Capable of carrying modular habitats, terraforming equipment, heavy industrial mining rigs, and structural supplies to developing worlds.",
    specifications: [
      { key: "Cargo Capacity", value: "4.2 Million Metric Tons" },
      { key: "Modular Docking", value: "16 External Heavy Cargo Container Frames" },
      { key: "Atmospheric Entry", value: "Sub-Orbital Drop Pod Compatibility" },
      { key: "Defense Batteries", value: "8 Point-Defense Turrets" },
      { key: "Registry Code", value: "PD-ATL-004 (Logistics Wing)" },
    ],
    footnote: "* Structural integrity certified under standard gravitational loads.",
  },
  {
    id: "SHIP-03",
    registry: "PD-VLK-011",
    name: "VALKYRIE EXPEDITION VESSEL",
    class: "Long-Range Exploration Vessel",
    division: "PARALLAX FRONTIER // EXPEDITIONARY WING",
    role: "Frontier Charting & Reconnaissance",
    length: "890 Meters",
    crew: "180 Specialists",
    passengers: "45 Scientific Guests",
    ftlRating: "Class 0.4 (Experimental Pulse Warp)",
    range: "45,000 Parsecs",
    hullComposition: "Ablative Carbon-Fiber Matrix",
    image: "/media/fleet/valkyrie.jpg",
    description:
      "Long-duration exploration vessel operating beyond established navigational boundaries. Equipped with long-range sub-space sensors, probe launcher arrays, and self-sustaining fuel scoops.",
    specifications: [
      { key: "Sensor Array", value: "Tachyon-Resonant Scanning Array (12 Lightyear Radius)" },
      { key: "Probe Launcher", value: "32 Autonomous Scouting Drones" },
      { key: "Auxiliary Craft", value: "4 Heavy Surface Landing Shuttles" },
      { key: "Registry Code", value: "PD-VLK-011 (Frontier Wing)" },
    ],
    footnote: "* Return routes subject to continued existence of departure topology.",
  },
  {
    id: "SHIP-04",
    registry: "PD-HMR-007",
    name: "HAMMERHEAD SECURITY FRIGATE",
    class: "Vanguard Tactical Security Frigate",
    division: "PARALLAX VANGUARD // TACTICAL SECURITY",
    role: "Escort, Defense & Emergency Response",
    length: "620 Meters",
    crew: "220 Combat Personnel",
    passengers: "80 Interception Specialists",
    ftlRating: "Class 0.8 (Rapid Tactical Warp)",
    range: "15,000 Parsecs",
    hullComposition: "Class-A Polarized Armored Plating",
    image: "/media/fleet/hammerhead.jpg",
    description:
      "High-speed tactical escort frigate deployed for convoy protection, anti-piracy operations, hazardous rescue, and rapid-response perimeter containment throughout corporate sectors.",
    specifications: [
      { key: "Primary Weaponry", value: "Dual Kinetic Acceleration Cannons" },
      { key: "Point Defense", value: "12 Automated Laser Interceptor Arrays" },
      { key: "Shield Generator", value: "Harmonic Energy Barrier System" },
      { key: "Registry Code", value: "PD-HMR-007 (Vanguard Defense)" },
    ],
    footnote: "* Defensive engagements conducted strictly within corporate jurisdiction rules.",
  },
  {
    id: "SHIP-05",
    registry: "PD-ODY-014",
    name: "ODYSSEY SCIENCE VESSEL",
    class: "Deep-Space Science Platform",
    division: "PARALLAX GENESIS // SCIENTIFIC RESEARCH",
    role: "Anomalous Research & Laboratory Testing",
    length: "1,100 Meters",
    crew: "310 Scientists & Engineers",
    passengers: "60 Research Fellows",
    ftlRating: "Class 0.6 (Quantum Shift Drive)",
    range: "25,000 Parsecs",
    hullComposition: "Reflective Electromagnetic Composite",
    image: "/media/fleet/odyssey.jpg",
    description:
      "State-of-the-art orbital scientific research platform. Contains bio-hazard containment laboratories, singularity sensor domes, xenobiology isolation chambers, and quantum testing bays.",
    specifications: [
      { key: "Lab Facilities", value: "12 Sealed Class-5 Research Modules" },
      { key: "Containment Vault", value: "Sub-Zero Stasis Lockers" },
      { key: "Computer Core", value: "Quantum Neural Processing Core (90 Petaflops)" },
      { key: "Registry Code", value: "PD-ODY-014 (Genesis Recon)" },
    ],
    footnote: "* Laboratory containment breaches automatically trigger localized stasis seals.",
  },
];

export default function FleetPage() {
  const [expandedShipId, setExpandedShipId] = useState<string | null>("SHIP-01");
  const [blueprintMode, setBlueprintMode] = useState<Record<string, boolean>>({});

  const toggleBlueprint = (shipId: string) => {
    soundEngine?.playClick();
    setBlueprintMode((prev) => ({ ...prev, [shipId]: !prev[shipId] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="font-bold">&gt;&gt;</span>
          <span>PARALLAX FLEET CATALOGUE // ISSUE 2226</span>
        </div>

        <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          STARSHIP CATALOGUE
        </h1>

        <p className="font-orbitron font-bold text-lg sm:text-xl text-gradient-cyan">
          "Engineered for absolute dominance across distances."
        </p>

        <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
          Parallax Dynamics operates one of the most technologically unified starship fleets in known space. Every vessel class is built to exacting Parallax industrial design standards.
        </p>
      </div>

      {/* Fleet Catalogue List */}
      <div className="space-y-12">
        {FLEET.map((ship) => {
          const isExpanded = expandedShipId === ship.id;
          const isBlueprint = !!blueprintMode[ship.id];

          return (
            <div
              key={ship.id}
              className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl transition-all"
            >
              {/* Main Ship Section Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Visual Render Container */}
                <div className="lg:col-span-7 relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-space-darkest border border-cyan-accent/30 group">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className={`object-cover transition-all duration-700 filter brightness-100 contrast-105 ${
                      isBlueprint ? "invert opacity-30 contrast-200 hue-rotate-180" : "opacity-95 group-hover:scale-105"
                    }`}
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  {/* Blueprint Overlay Effect */}
                  {isBlueprint && (
                    <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
                  )}

                  {/* Ship Registry & Division Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                    <div className="px-3 py-1 rounded-md bg-space-darkest/85 backdrop-blur-md border border-cyan-accent/40 font-mono text-xs text-cyan-accent font-bold shadow-lg">
                      {ship.registry}
                    </div>
                    <div className="hidden sm:block px-3 py-1 rounded-md bg-space-darkest/75 backdrop-blur-md border border-white/10 font-mono text-[11px] text-slate-300">
                      {isBlueprint ? "TACTICAL BLUEPRINT" : "OPTICAL RENDER"}
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <button
                    onClick={() => toggleBlueprint(ship.id)}
                    className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-lg bg-space-darkest/90 backdrop-blur-md border border-cyan-accent/40 text-xs font-mono text-cyan-accent hover:text-white hover:bg-cyan-accent/20 transition-all flex items-center space-x-1.5 shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isBlueprint ? "Show Render" : "Show Blueprint"}</span>
                  </button>
                </div>

                {/* Ship Info Summary */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block mb-1">
                      {ship.division}
                    </span>
                    <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
                      {ship.name}
                    </h2>
                    <span className="text-xs font-mono text-slate-400 block mt-1">
                      PRIMARY ROLE: {ship.role}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                    {ship.description}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-space-darkest/70 border border-white/10 font-mono text-xs">
                    <div>
                      <span className="text-slate-500 block uppercase text-[10px]">Vessel Length</span>
                      <span className="text-white font-bold">{ship.length}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-[10px]">FTL Rating</span>
                      <span className="text-cyan-accent font-bold">{ship.ftlRating}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-[10px]">Crew Capacity</span>
                      <span className="text-white">{ship.crew}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-[10px]">Max Guests</span>
                      <span className="text-white">{ship.passengers}</span>
                    </div>
                  </div>

                  {/* Expand Specs Button */}
                  <button
                    onClick={() => {
                      soundEngine?.playClick();
                      setExpandedShipId(isExpanded ? null : ship.id);
                    }}
                    className="w-full py-3 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase hover:bg-cyan-accent/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{isExpanded ? "Hide Technical Specs" : "Expand Technical Specs"}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>

              {/* Expandable Technical Specifications Drawer */}
              {isExpanded && (
                <div className="border-t border-white/10 p-6 sm:p-10 bg-space-darkest/95 space-y-6">
                  <h3 className="font-mono text-xs text-cyan-accent tracking-widest uppercase flex items-center">
                    <span className="font-bold mr-2">&gt;&gt;</span> TECHNICAL SPECIFICATIONS // {ship.registry}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ship.specifications.map((spec, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-space-navy border border-white/10 font-mono text-xs flex justify-between items-center">
                        <span className="text-slate-400">{spec.key}:</span>
                        <span className="text-cyan-accent font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {ship.footnote && (
                    <p className="text-xs font-mono text-slate-500 italic pt-2 border-t border-white/10">
                      {ship.footnote}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
