"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { soundEngine } from "@/utils/soundEngine";
import { ModalPortal } from "@/components/ModalPortal";
import { AlertCircle, X } from "lucide-react";

interface Founder {
  name: string;
  role: string;
  title: string;
  responsibilities: string[];
  quote: string;
  image: string;
  empId: string;
  clearance: string;
  division: string;
  status: string;
  humorousFlag?: string;
}

const FOUNDERS_ROW_1: Founder[] = [
  {
    name: "FLINT DUSKBOURNE",
    role: "Chief Operations Officer",
    title: "COO & Fleet Commander",
    responsibilities: [
      "Fleet operations & logistics",
      "Company-wide safety protocols",
      "Operational discipline",
      "Major diplomatic missions",
    ],
    quote: "Every voyage is only successful if every passenger comes home.",
    image: "/media/founders/Flint.jpg",
    empId: "PD-0001",
    clearance: "Level 5 Apex",
    division: "Fleet Operations",
    status: "Active Command",
  },
  {
    name: "QUILL VARON",
    role: "Chief Science Officer",
    title: "CSO & Research Director",
    responsibilities: [
      "Scientific research & theory",
      "Navigation & warp systems",
      "Anomalous phenomena study",
      "Deep-space exploration",
    ],
    quote: "Efficiency is merely mathematics correctly applied.",
    image: "/media/founders/Quill.jpg",
    empId: "PD-0002",
    clearance: "Level 5 Apex",
    division: "Genesis Science",
    status: "Active Research",
  },
  {
    name: "FENN",
    role: "VP of Corporate Relations",
    title: "Vice President of Diplomacy",
    responsibilities: [
      "Interstellar diplomacy & treaties",
      "First-contact relations",
      "Sensitive corporate partnerships",
      "Discreet problem solving",
    ],
    quote: "Every civilization speaks a different language. Trust is universal.",
    image: "/media/founders/Fenn.jpg",
    empId: "PD-0003",
    clearance: "Level 5 Apex",
    division: "Corporate Relations",
    status: "Active Envoy",
  },
];

const FOUNDERS_ROW_2: Founder[] = [
  {
    name: "CASS",
    role: "Director of Special Acquisitions",
    title: "Director of Asset Procurement",
    responsibilities: [
      "Strategic resource procurement",
      "Ancient artifact acquisition",
      "Classified operations",
      "Unconventional solutions",
    ],
    quote: "There is always another solution. Usually the one nobody else considered.",
    image: "/media/founders/Cass.jpg",
    empId: "PD-0004",
    clearance: "Level 5 Apex",
    division: "Special Acquisitions",
    status: "Active Procurement",
    humorousFlag: "Compliance flags: classified",
  },
  {
    name: "KANT VIXIT",
    role: "Chief Engineering Officer",
    title: "Chief Engineer & Chief Inventor",
    responsibilities: [
      "Starship engineering & hull design",
      "Warp propulsion development",
      "Robotics & automated arrays",
      "Experimental weapon prototypes",
    ],
    quote: "If it survives the first test, we weren't ambitious enough.",
    image: "/media/founders/Kant.jpg",
    empId: "PD-0005",
    clearance: "Level 5 Apex",
    division: "Aether Engineering",
    status: "Active Prototype Testing",
    humorousFlag: "Active patents: excessive",
  },
  {
    name: "ONIX",
    role: "Director of Xenobiology",
    title: "Director of Xenobiology & Medical Research",
    responsibilities: [
      "Xenobiology & alien physiology",
      "Advanced regenerative medicine",
      "Cryostasis technologies",
      "Biological augmentation",
    ],
    quote: "Progress has always demanded curiosity... and volunteers.",
    image: "/media/founders/Onix.jpg",
    empId: "PD-0006",
    clearance: "Level 5 Apex",
    division: "Bio-Medical Division",
    status: "Active Clinical Trials",
    humorousFlag: "Human-subject protocols: revised",
  },
  {
    name: "REGGIE",
    role: "Chief Security Marshal",
    title: "Chief Security Marshal & Fleet Protector",
    responsibilities: [
      "Physical asset security",
      "Emergency tactical response",
      "Hazardous rescue operations",
      "Civilian protection & anti-piracy",
    ],
    quote: "Nobody gets left behind.",
    image: "/media/founders/Reggie.jpg",
    empId: "PD-0007",
    clearance: "Level 5 Apex",
    division: "Vanguard Security",
    status: "Active Tactical Deployment",
    humorousFlag: "Structural damage reports: under review",
  },
];

export default function FoundersPage() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  React.useEffect(() => {
    if (selectedFounder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFounder]);

  const renderFounderCard = (founder: Founder) => (
    <div
      key={founder.empId}
      onClick={() => {
        soundEngine?.playClick();
        setSelectedFounder(founder);
      }}
      onMouseEnter={() => soundEngine?.playHover()}
      className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between space-y-6 cursor-pointer group relative overflow-hidden"
    >
      {/* Portrait Image */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-space-darkest border border-cyan-accent/30">
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-darkest via-transparent to-transparent opacity-80" />

        {/* Employee Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-space-darkest/80 backdrop-blur border border-cyan-accent/30 font-mono text-[10px] text-cyan-accent">
          {founder.empId}
        </div>
      </div>

      {/* Founder Info */}
      <div className="space-y-2">
        <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block">
          {founder.role}
        </span>
        <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-cyan-accent transition-colors">
          {founder.name}
        </h3>
        <p className="text-xs italic text-slate-300 font-sans leading-relaxed">
          "{founder.quote}"
        </p>
      </div>

      {/* Metadata Badges */}
      <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
        <div className="flex justify-between text-slate-400">
          <span>DIVISION:</span>
          <span className="text-slate-200">{founder.division}</span>
        </div>

        {founder.humorousFlag && (
          <div className="text-[11px] text-amber-400/90 flex items-center pt-1 border-t border-slate-900">
            <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{founder.humorousFlag}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase">
          <span className="font-bold">&gt;&gt;</span>
          <span>GOVERNANCE & EXECUTIVE BOARD</span>
        </div>

        <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          THE FOUNDERS
        </h1>

        <p className="font-orbitron font-bold text-lg sm:text-2xl text-gradient-cyan tracking-wide">
          "Seven disciplines. Seven perspectives. One direction."
        </p>

        <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
          Parallax Dynamics remains privately controlled by its seven original founders, driving unprecedented interstellar innovation through focused leadership.
        </p>

        <p className="text-xs font-mono text-slate-500 italic">
          * This governance structure has been described by independent analysts as unconventional.
        </p>
      </div>

      {/* FOUNDERS GRID: STRICTLY 3 + 4 ON DESKTOP */}
      <div className="space-y-8">
        {/* ROW 1: 3 FOUNDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FOUNDERS_ROW_1.map(renderFounderCard)}
        </div>

        {/* ROW 2: 4 FOUNDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {FOUNDERS_ROW_2.map(renderFounderCard)}
        </div>
      </div>

      {/* FOUNDER EXPANDED DETAILS MODAL */}
      <ModalPortal
        isOpen={!!selectedFounder}
        onClose={() => {
          soundEngine?.playClick();
          setSelectedFounder(null);
        }}
      >
        {selectedFounder && (
          <div className="relative w-full max-w-2xl bg-[#090e1a] border border-cyan-accent/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_80px_rgba(0,0,0,0.98),0_0_30px_rgba(0,240,255,0.2)] my-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2 text-cyan-accent font-mono text-xs">
                <span className="font-bold">&gt;&gt;</span>
                <span>EXECUTIVE FILE // {selectedFounder.empId}</span>
              </div>
              <button
                onClick={() => {
                  soundEngine?.playClick();
                  setSelectedFounder(null);
                }}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-cyan-accent/30">
                <Image
                  src={selectedFounder.image}
                  alt={selectedFounder.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="sm:col-span-2 space-y-3">
                <h2 className="font-orbitron font-bold text-2xl text-white">{selectedFounder.name}</h2>
                <span className="font-mono text-xs text-cyan-accent block">{selectedFounder.role}</span>
                <p className="text-xs italic text-slate-300 leading-relaxed font-sans">
                  "{selectedFounder.quote}"
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="font-mono text-xs text-cyan-accent uppercase tracking-widest">
                PRIMARY RESPONSIBILITIES
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                {selectedFounder.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-cyan-accent font-bold">&gt;</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedFounder.humorousFlag && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs font-mono">
                NOTICE: {selectedFounder.humorousFlag}
              </div>
            )}
          </div>
        )}
      </ModalPortal>
    </div>
  );
}
