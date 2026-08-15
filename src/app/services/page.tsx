"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ModalPortal } from "@/components/ModalPortal";
import { soundEngine } from "@/utils/soundEngine";
import {
  Rocket,
  Globe,
  Microscope,
  Compass,
  Pickaxe,
  ShieldCheck,
  EyeOff,
  CheckCircle2,
  X,
  Lock,
} from "lucide-react";

interface ServiceItem {
  id: string;
  code: string;
  division: string;
  title: string;
  quote?: string;
  description: string;
  footnote: string;
  icon: React.ElementType;
  image: string;
  altText: string;
  objectPosition: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "srv-01",
    code: "// SERVICE 01 // PASSENGER CORRIDORS",
    division: "HORIZON™",
    title: "INTERSTELLAR TRAVEL",
    quote: "The universe should not be viewed through a window on Earth.",
    description:
      "Luxury civilian transportation between established solar systems. Featuring stasis suites, observation decks, zero-g spas, and long-distance passenger services.",
    footnote: "* Passenger lounge access subject to gravitational stability index.",
    icon: Rocket,
    image: "/media/services/interstellar-travel.jpg",
    altText: "Parallax passenger observation lounge overlooking a sapphire ringed planet with an orbiting cruiser.",
    objectPosition: "center 42%",
  },
  {
    id: "srv-02",
    code: "// SERVICE 02 // LOGISTICS INFRASTRUCTURE",
    division: "ATLAS™",
    title: "COLONY TRANSPORTATION",
    description:
      "Heavy mass transportation for settlers, terraforming equipment, agricultural habitats, and industrial supplies between established hubs and developing frontier worlds.",
    footnote: "* Colony arrival dates subject to hyperspace corridor traffic.",
    icon: Globe,
    image: "/media/services/colony-transport.jpg",
    altText: "Massive Parallax colony unloading staging area with habitat containers, cranes, and an Atlas carrier in low orbit.",
    objectPosition: "center 52%",
  },
  {
    id: "srv-03",
    code: "// SERVICE 03 // SCIENTIFIC RECONNAISSANCE",
    division: "GENESIS™",
    title: "SCIENTIFIC EXPEDITIONS",
    description:
      "Research journeys investigating stellar phenomena, alien ecosystems, ancient orbital structures, unusual biological environments, and quantum anomalies.",
    footnote: "* Research artifacts remain sole property of Parallax Genesis Division.",
    icon: Microscope,
    image: "/media/services/scientific-expeditions.jpg",
    altText: "Odyssey scientific research platform equipped with observation bio-domes investigating a swirling quantum anomaly.",
    objectPosition: "center 50%",
  },
  {
    id: "srv-04",
    code: "// SERVICE 04 // FRONTIER RECONNAISSANCE",
    division: "FRONTIER™",
    title: "DEEP SPACE EXPLORATION",
    quote: "Go where maps end.",
    description:
      "Parallax expeditionary fleets operate beyond established navigational boundaries to chart unknown systems, scout mineral-rich solar belts, and establish initial warp relays.",
    footnote: "* Return routes subject to continued existence of departure topology.",
    icon: Compass,
    image: "/media/services/deep-space-exploration.jpg",
    altText: "Valkyrie expedition starship charting deep space amidst an asteroid field and distant indigo nebula.",
    objectPosition: "center 50%",
  },
  {
    id: "srv-05",
    code: "// SERVICE 05 // HEAVY EXTRACTION",
    division: "INDUSTRIAL",
    title: "ASTEROID MINING & RESOURCES",
    description:
      "Automated mining fleets, orbital refineries, heavy element extraction, and remote resource transport for planetary terraforming.",
    footnote: "* Planetary gravity alterations managed within legal limits.",
    icon: Pickaxe,
    image: "/media/services/resource-operations.jpg",
    altText: "Industrial modular logistics platform and cargo containers operating across deep-space asteroid extraction zones.",
    objectPosition: "center 50%",
  },
  {
    id: "srv-06",
    code: "// SERVICE 06 // VANGUARD DEFENSE",
    division: "VANGUARD™",
    title: "SECURITY & ESCORT",
    description:
      "Fleet security, anti-piracy deterrence, hazardous-environment rescue, emergency evacuation, and strategic perimeter containment.",
    footnote: "* Passenger definitions may vary in first-contact environments.",
    icon: ShieldCheck,
    image: "/media/services/security-escort.jpg",
    altText: "Hammerhead tactical security frigate providing defensive escort to civilian transports through an asteroid corridor.",
    objectPosition: "center 50%",
  },
];

export default function ServicesPage() {
  const [clearanceModalOpen, setClearanceModalOpen] = useState(false);
  const [clearanceSubmitted, setClearanceSubmitted] = useState(false);

  React.useEffect(() => {
    if (clearanceModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [clearanceModalOpen]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="font-bold">&gt;&gt;</span>
          <span>PARALLAX CORE DIVISIONS & SERVICES</span>
        </div>

        <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          CAPABILITIES BEYOND BOUNDARIES
        </h1>

        <p className="font-orbitron font-bold text-lg sm:text-xl text-gradient-cyan">
          "If space presents an obstacle, Parallax builds the bridge."
        </p>

        <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
          Parallax Dynamics integrates transportation, scientific exploration, industrial extraction, defense, and specialized procurement under a single corporate umbrella.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="rounded-3xl glass-panel glass-panel-hover border border-white/10 overflow-hidden flex flex-col justify-between group shadow-xl transition-all"
            >
              {/* Cinematic Shallow Visual Strip */}
              <div className="relative w-full aspect-[3.2/1] sm:aspect-[4.5/1] md:aspect-[5.5/1] lg:aspect-[6.5/1] overflow-hidden bg-space-darkest border-b border-cyan-accent/20">
                <Image
                  src={service.image}
                  alt={service.altText}
                  fill
                  className="object-cover filter brightness-95 contrast-105 group-hover:brightness-105 group-hover:scale-[1.025] transition-all duration-700 ease-out motion-reduce:transform-none"
                  style={{ objectPosition: service.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  loading={idx < 2 ? "eager" : "lazy"}
                />

                {/* Depth & Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-space-darkest/75 via-transparent to-space-darkest/75 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-space-darkest/85 via-transparent to-transparent pointer-events-none" />

                {/* Service Code Badge */}
                <div className="absolute top-3 left-4 px-2.5 py-0.5 rounded-md bg-space-darkest/85 backdrop-blur-md border border-cyan-accent/30 font-mono text-[10px] text-cyan-accent font-bold tracking-wider shadow-md">
                  {service.code}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-7 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 font-bold">
                      {service.division}
                    </span>
                  </div>

                  <h2 className="font-orbitron font-bold text-2xl text-white group-hover:text-cyan-accent transition-colors">
                    {service.title}
                  </h2>

                  {service.quote && (
                    <p className="font-orbitron text-sm font-semibold text-gradient-cyan italic">
                      "{service.quote}"
                    </p>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
                  {service.footnote}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DISCREET DIVISION — SPECIAL ACQUISITIONS */}
      <div className="p-10 rounded-3xl bg-space-darkest border border-purple-accent/40 shadow-[0_0_35px_rgba(139,92,246,0.2)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center space-x-3 font-mono text-xs text-purple-accent tracking-widest uppercase">
          <EyeOff className="w-5 h-5" />
          <span>SPECIAL ACQUISITIONS DIVISION // DISCREET PROCUREMENT</span>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            SPECIAL ACQUISITIONS
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-sans font-light">
            Certain missions require resources, artifacts, or solutions unavailable through conventional procurement channels. Parallax Special Acquisitions provides discreet, highly efficient resolution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
          <Button
            onClick={() => {
              soundEngine?.playClick();
              setClearanceModalOpen(true);
            }}
            variant="purple"
            size="lg"
          >
            Request Clearance
          </Button>

          <p className="text-[11px] font-mono text-slate-500 italic max-w-lg">
            * Special Acquisitions activities comply with all applicable legislation within the jurisdiction in which applicable legislation is recognized.
          </p>
        </div>
      </div>

      {/* CLEARANCE REQUEST MODAL */}
      <ModalPortal
        isOpen={clearanceModalOpen}
        onClose={() => {
          soundEngine?.playClick();
          setClearanceModalOpen(false);
        }}
      >
        <div className="relative w-full max-w-lg bg-[#090e1a] border border-purple-accent/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_80px_rgba(0,0,0,0.98),0_0_30px_rgba(139,92,246,0.2)] my-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2 text-purple-accent font-mono text-xs">
              <Lock className="w-4 h-4" />
              <span>LEVEL 5 CLEARANCE REQUEST</span>
            </div>
            <button
              onClick={() => {
                soundEngine?.playClick();
                setClearanceModalOpen(false);
              }}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!clearanceSubmitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                soundEngine?.playClick();
                setClearanceSubmitted(true);
              }}
              className="space-y-4 font-mono text-xs"
            >
              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1">Entity / Organization</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sovereign Research Group"
                  className="w-full px-3 py-2 rounded bg-space-darkest border border-white/10 text-slate-200 focus:outline-none focus:border-purple-accent"
                />
              </div>

              <div>
                <label className="block text-slate-400 uppercase text-[10px] mb-1">Target Asset Description</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Specify non-standard asset requirements..."
                  className="w-full px-3 py-2 rounded bg-space-darkest border border-white/10 text-slate-200 focus:outline-none focus:border-purple-accent"
                />
              </div>

              <div className="p-3 bg-purple-accent/15 border border-purple-accent/30 rounded text-[11px] text-purple-200 leading-relaxed">
                By submitting this request, you agree that Parallax Dynamics may retroactively reclassify your jurisdiction to an un-chartered territory during asset recovery operations.
              </div>

              <Button type="submit" variant="purple" size="md" className="w-full justify-center">
                Submit Clearance Request
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-purple-accent mx-auto" />
              <h3 className="text-lg font-bold text-white font-orbitron">CLEARANCE UNDER REVIEW</h3>
              <p className="text-xs text-slate-400 font-mono">
                Your request has been encrypted and routed directly to Director Cass. You will be contacted via quantum signal if approval is granted.
              </p>
              <button
                onClick={() => {
                  setClearanceSubmitted(false);
                  setClearanceModalOpen(false);
                }}
                className="px-6 py-2 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-mono"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </ModalPortal>
    </div>
  );
}
