"use client";

import React, { useState } from "react";
import Link from "next/link";
import { OperationalRecordModal } from "@/components/OperationalRecordModal";
import {
  CANONICAL_OPERATIONAL_RECORDS,
  OperationalRecord,
} from "@/data/operationsData";
import { soundEngine } from "@/utils/soundEngine";
import { Search, ShieldAlert, MapPin, ChevronRight, ExternalLink, AlertTriangle } from "lucide-react";

const CATEGORIES = [
  "ALL",
  "EXPLORATION",
  "SCIENCE",
  "SECURITY",
  "DIPLOMATIC",
  "LOGISTICS",
  "CLASSIFIED",
];

export default function OperationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRecord, setActiveRecord] = useState<OperationalRecord | null>(null);

  const filteredRecords = CANONICAL_OPERATIONAL_RECORDS.filter((rec) => {
    const matchesCat = selectedCategory === "ALL" || rec.type === selectedCategory;
    const matchesSearch =
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase">
          <span className="font-bold">&gt;&gt;</span>
          <span>PARALLAX OPERATIONS ARCHIVE</span>
        </div>

        <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          OPERATIONS ARCHIVE
        </h1>

        <p className="font-orbitron font-bold text-lg sm:text-xl text-gradient-cyan">
          "Every mission moves us forward."
        </p>

        <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
          Parallax maintains operational records for active and completed assignments across its expeditionary, scientific, diplomatic, and security divisions. Some records may be restricted, amended, or unavailable due to ongoing review.
        </p>

        <p className="text-xs font-mono text-slate-500 italic">
          * Record availability should not be interpreted as confirmation that an operation occurred.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by ID, title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-space-darkest border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-accent/50 font-mono"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEngine?.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "bg-space-darkest/60 text-slate-400 hover:text-slate-200 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Records Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 px-2">
          <span>ARCHIVED RECORDS ({filteredRecords.length})</span>
          <span>SYSTEM TIME // CYCLE 2226.08</span>
        </div>

        {filteredRecords.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                onClick={() => {
                  soundEngine?.playClick();
                  setActiveRecord(record);
                }}
                onMouseEnter={() => soundEngine?.playHover()}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 cursor-pointer border border-white/10 group relative"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-cyan-accent font-bold tracking-widest flex items-center">
                      <span className="mr-1.5">&gt;&gt;</span> {record.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-space-darkest text-cyan-accent border border-cyan-accent/30 text-[10px]">
                      {record.status}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-accent transition-colors leading-snug">
                    {record.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-cyan-accent" /> {record.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {record.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 text-[11px] truncate max-w-[140px]">
                    {record.classification}
                  </span>
                  <span className="text-cyan-accent group-hover:translate-x-1 transition-transform flex items-center">
                    Inspect Record <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 rounded-2xl glass-panel text-center space-y-4">
            <ShieldAlert className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold font-orbitron text-slate-300">NO RECORDS FOUND</h3>
            <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
              No operational records match the current search query or division filter. Records may be restricted by Corporate Compliance.
            </p>
          </div>
        )}

        {/* Sealed Records Notice Bar */}
        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-mono flex items-center space-x-2.5">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400" />
          <span>RECORDS PD-0001 THROUGH PD-0100 // SEALED BY ORDER OF THE BOARD</span>
        </div>
      </div>

      {/* Record Drawer / Modal */}
      <OperationalRecordModal
        record={activeRecord}
        onClose={() => setActiveRecord(null)}
      />
    </div>
  );
}
