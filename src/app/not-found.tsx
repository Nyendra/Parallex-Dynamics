import React from "react";
import Link from "next/link";
import { ChevronMotif } from "@/components/ChevronMotif";
import { Button } from "@/components/Button";
import { ShieldAlert, ArrowLeft, Database, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl w-full text-center space-y-8 glass-panel border border-cyan-accent/30 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.15)]">
        {/* Atmospheric background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Security / Anomaly Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-space-darkest/90 border border-amber-500/40 text-amber-300 font-mono text-xs tracking-widest uppercase">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>STATUS 404 // CLASSIFICATION EXCEPTION</span>
        </div>

        {/* Major Error Code & Message */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-center space-x-2">
            <ChevronMotif size="md" />
            <h1 className="font-orbitron font-extrabold text-5xl sm:text-7xl text-white tracking-wider text-gradient-cyan">
              404
            </h1>
            <ChevronMotif size="md" />
          </div>

          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-cyan-accent tracking-wide leading-snug">
            RECORD NOT FOUND // THIS OPERATION MAY NOT HAVE OCCURRED
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl mx-auto">
            The requested operational report, coordinate sequence, or personnel record cannot be located within the Parallax Dynamics archives. In accordance with Corporate Compliance Protocol 404, unverified events remain strictly unacknowledged.
          </p>

          <p className="text-xs font-mono text-slate-500 italic pt-2">
            * Inquiry logs regarding non-existent operations are retained indefinitely for compliance review.
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Button
            href="/operations"
            variant="primary"
            size="md"
            icon={<Database className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Operations Archive
          </Button>

          <Button
            href="/"
            variant="outline"
            size="md"
            icon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Command Terminal
          </Button>
        </div>
      </div>
    </div>
  );
}
