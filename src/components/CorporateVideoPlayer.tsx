"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronMotif } from "./ChevronMotif";
import { Play, Pause, AlertCircle, Radio, Sparkles } from "lucide-react";
import { soundEngine } from "@/utils/soundEngine";

const VIDEO_SCENES = [
  {
    title: "1. LUXURY INTERSTELLAR TRANSIT",
    subtext: "Experience Five-Star Comfort Across Lightyears.",
    narration:
      "From panoramic observation lounges to quantum stasis suites, Parallax Dynamics turns impossible distances into routine afternoon voyages.",
    disclaimer:
      "* Stasis wake-up protocols and biological containment procedures subject to local solar jurisdiction.",
    image: "/media/broadcast/broadcast-parallax-public.jpg",
  },
  {
    title: "2. SCIENTIFIC RECONNAISSANCE",
    subtext: "Pushing Deep Space Physics Beyond Established Theory.",
    narration:
      "Our Odyssey research platforms investigate anomalous spatial distortions and ancient orbital phenomena that conventional science considers impossible.",
    disclaimer:
      "* Research specimens remain the sole intellectual and biological property of Parallax Dynamics Genesis Division.",
    image: "/media/fleet/odyssey.jpg",
  },
  {
    title: "3. EXPEDITIONARY LOGISTICS",
    subtext: "Building Humanity's Frontier Infrastructure.",
    narration:
      "Massive Atlas carriers deliver modular planetary habitats, atmospheric converters, and heavy industrial mining platforms to newly chartered worlds.",
    disclaimer:
      "* Planetary atmosphere breathable rating verified upon arrival (+/- 14% atmospheric tolerance).",
    image: "/media/fleet/atlas.jpg",
  },
  {
    title: "4. VANGUARD FLEET SECURITY",
    subtext: "Guarding Progress with Advanced Tactical Defense.",
    narration:
      "Wherever humanity builds its future, Vanguard tactical frigates ensure absolute operational stability, active deterrence, and perimeter containment across all sectors.",
    disclaimer:
      "* Passenger safety definitions may vary during unannounced anomaly containment operations.",
    image: "/media/fleet/hammerhead.jpg",
  },
];

export const CorporateVideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % VIDEO_SCENES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const scene = VIDEO_SCENES[currentSceneIndex];

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] group">
      {/* Top Header Label Strip */}
      <div className="bg-space-darkest/90 border-b border-white/10 px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-2.5">
          <Radio className="w-3.5 h-3.5 text-cyan-accent animate-pulse" />
          <span className="text-white font-bold tracking-wider">
            PARALLAX CORPORATE COMMUNICATIONS
          </span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-accent">PUBLIC INFORMATION BROADCAST</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-slate-400">
          <span className="text-cyan-300 font-bold">PD-COMM-001</span>
          <span className="hidden sm:inline text-slate-600">//</span>
          <span className="hidden sm:inline">12K HOLOGRAPHIC FEED</span>
        </div>
      </div>

      {/* Video Viewport Frame */}
      <div className="relative aspect-[16/9] w-full bg-space-darkest overflow-hidden">
        {/* Background Image / Dedicated Broadcast Visual */}
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          className="object-cover object-center transition-all duration-1000 scale-100 group-hover:scale-105 filter brightness-100 contrast-105"
          priority
        />

        {/* Minimal Non-Destructive Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-darkest/95 via-space-darkest/15 to-space-darkest/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,7,12,0.6)_100%)] pointer-events-none" />
        <div className="absolute inset-0 scanline-bg opacity-15 pointer-events-none" />

        {/* Top Left Transmission Live Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center space-x-2 bg-space-darkest/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-accent/30 text-xs font-mono text-cyan-accent shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="tracking-widest font-semibold uppercase">LIVE BROADCAST</span>
          </div>
        </div>

        {/* Top Right Scene Indicator Badge */}
        <div className="absolute top-4 right-4 z-20 hidden sm:block">
          <div className="px-3 py-1.5 rounded-lg bg-space-darkest/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
            {scene.title}
          </div>
        </div>

        {/* Center Title Badge — Optically centered in the upper visual space above the quote box */}
        <div className="absolute top-[36%] sm:top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 p-4 sm:p-6 pointer-events-none select-none max-w-xl w-full">
          <div className="inline-flex items-center justify-center space-x-1 text-cyan-accent mb-2 filter drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            <Sparkles className="w-4 h-4 mr-1 text-cyan-accent" />
            <ChevronMotif size="md" />
          </div>
          <h3 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-widest uppercase drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]">
            THIS IS <span className="text-gradient-cyan">PARALLAX</span>
          </h3>
          <p className="font-orbitron font-bold text-[10px] sm:text-xs md:text-sm text-cyan-300 tracking-[0.25em] mt-2 sm:mt-3 uppercase drop-shadow">
            THE FUTURE DOESN&apos;T WAIT
          </p>
        </div>

        {/* Narration Subtitles Banner with Fixed Min-Height to Prevent Box Resizing */}
        {showCaptions && (
          <div className="absolute bottom-16 left-4 right-4 sm:left-10 sm:right-10 z-20 bg-space-darkest/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-cyan-accent/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] min-h-[96px] sm:min-h-[104px] flex flex-col justify-between">
            <div className="flex items-start space-x-3.5">
              <ChevronMotif size="sm" className="mt-1 flex-shrink-0 text-cyan-accent" />
              <div className="flex-1 space-y-2">
                <div className="min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center">
                  <p className="font-sans text-xs sm:text-sm md:text-base font-medium text-slate-100 italic leading-snug">
                    &ldquo;{scene.narration}&rdquo;
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-2 gap-1 font-mono text-[10px]">
                  <span className="text-cyan-accent tracking-wider uppercase font-semibold">
                    CORPORATE SPOKESPERSON // PARALLAX COMMUNICATIONS
                  </span>
                  <span className="text-amber-400/90 italic flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                    {scene.disclaimer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Scrubber & HUD Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-space-darkest/95 backdrop-blur-md border-t border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                soundEngine?.playClick();
                setIsPlaying(!isPlaying);
              }}
              className="p-2 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 hover:bg-cyan-accent/40 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              aria-label={isPlaying ? "Pause Broadcast" : "Play Broadcast"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            {/* Scene Selector Progress Trackers */}
            <div className="flex items-center space-x-2">
              {VIDEO_SCENES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundEngine?.playClick();
                    setCurrentSceneIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSceneIndex
                      ? "w-8 bg-cyan-accent shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Jump to segment ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="font-mono text-xs text-slate-400 flex items-center space-x-4">
            <button
              onClick={() => setShowCaptions(!showCaptions)}
              className={`px-2.5 py-1 rounded-md border transition-colors ${
                showCaptions
                  ? "border-cyan-accent/40 text-cyan-accent bg-cyan-accent/10"
                  : "border-slate-800 text-slate-500"
              }`}
            >
              CC {showCaptions ? "ON" : "OFF"}
            </button>
            <span className="hidden sm:inline text-slate-400">
              SEGMENT <span className="text-white font-bold">{currentSceneIndex + 1}</span> / {VIDEO_SCENES.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
