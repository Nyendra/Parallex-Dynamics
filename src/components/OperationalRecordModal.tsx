"use client";

import React from "react";
import Link from "next/link";
import { ChevronMotif } from "./ChevronMotif";
import { ModalPortal } from "./ModalPortal";
import {
  X,
  ShieldAlert,
  FileText,
  Clock,
  UserCheck,
  AlertTriangle,
  ExternalLink,
  Users,
  Compass,
} from "lucide-react";
import { soundEngine } from "@/utils/soundEngine";
import { OperationalRecord } from "@/data/operationsData";

export type { OperationalRecord };

interface ModalProps {
  record: OperationalRecord | null;
  onClose: () => void;
}

export const OperationalRecordModal: React.FC<ModalProps> = ({ record, onClose }) => {
  const handleClose = () => {
    soundEngine?.playClick();
    onClose();
  };

  return (
    <ModalPortal isOpen={!!record} onClose={handleClose}>
      {record && (
        <div className="relative w-full max-w-4xl bg-[#090e1a] border border-cyan-accent/40 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.98),0_0_30px_rgba(0,240,255,0.2)] overflow-hidden my-auto">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChevronMotif size="md" />
              <div>
                <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                  OPERATIONAL RECORD // {record.id}
                </span>
                <h2 className="font-sans font-bold text-xl text-white tracking-wide">
                  {record.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-300 font-sans text-sm max-h-[75vh] overflow-y-auto">
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Status</span>
                <span className="text-cyan-300 font-bold">{record.status}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Location</span>
                <span className="text-slate-200">{record.location}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Division</span>
                <span className="text-cyan-400">{record.type}</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase text-[10px]">Classification</span>
                <span className="text-amber-400">{record.classification}</span>
              </div>
            </div>

            {/* Incident Classification Footnote warning */}
            {record.classificationFootnote && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs font-mono flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{record.classificationFootnote}</span>
              </div>
            )}

            {/* Mission Summary Brief */}
            <div>
              <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2" /> Briefing Summary
              </h3>
              <p className="leading-relaxed bg-slate-950/40 p-4 rounded-lg border border-slate-800/80 text-xs sm:text-sm">
                {record.summary}
              </p>
            </div>

            {/* Personnel Roster */}
            <div>
              <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" /> Personnel Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {record.personnelList.slice(0, 6).map((p, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="font-bold text-white block">{p.name}</span>
                    <span className="text-cyan-400 font-mono text-[11px] block">{p.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Timeline */}
            <div>
              <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" /> Operational Timeline
              </h3>
              <div className="space-y-2 border-l-2 border-cyan-500/30 ml-2 pl-4">
                {record.timeline.map((item, idx) => (
                  <div key={idx} className="relative pb-2">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-slate-950" />
                    <span className="font-mono text-xs text-cyan-300 block">
                      PHASE {item.time} {item.title ? `// ${item.title}` : ""}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Findings Snapshot */}
            {record.notableFindings && record.notableFindings.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2 flex items-center">
                  <Compass className="w-4 h-4 mr-2" /> Notable Findings
                </h3>
                <div className="space-y-2">
                  {record.notableFindings.map((finding, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-white block">{finding.title}</span>
                      {finding.description && <p className="text-slate-300">{finding.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Incident Assessments */}
            {record.incidents && record.incidents.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30 space-y-3">
                <h3 className="font-mono text-xs text-red-400 tracking-widest uppercase flex items-center">
                  <ShieldAlert className="w-4 h-4 mr-2 text-red-400" /> Incident Assessment
                </h3>
                <div className="space-y-2 text-xs">
                  {record.incidents.map((incident, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-bold text-white block">
                        {incident.title} {incident.severity ? `(${incident.severity})` : ""}
                      </span>
                      {Array.isArray(incident.details) ? (
                        <p className="text-slate-300">{incident.details[0]}</p>
                      ) : (
                        <p className="text-slate-300">{incident.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Captain's Log Addendum */}
            {record.captainsLog && (
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <h4 className="font-mono text-xs text-cyan-300 uppercase tracking-widest flex items-center">
                  <UserCheck className="w-4 h-4 mr-2" /> CAPTAIN'S LOG // {record.captainsLog.author}
                </h4>
                <div className="italic text-slate-300 text-xs leading-relaxed space-y-1.5">
                  {record.captainsLog.text.slice(0, 3).map((line, idx) => (
                    <p key={idx}>"{line}"</p>
                  ))}
                </div>
              </div>
            )}

            {/* Final Corporate Assessment */}
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-center space-y-2">
              <span className="font-mono text-xs text-cyan-400 tracking-widest block uppercase font-bold">
                FINAL CORPORATE ASSESSMENT
              </span>
              <p className="font-sans font-bold text-lg text-white">
                {record.finalAssessment.verdict}
              </p>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto">
                {record.finalAssessment.description}
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3 text-xs font-mono text-slate-500">
            <span>PARALLAX ARCHIVE CONTROL // LEVEL 5 ACCESS</span>
            <div className="flex items-center space-x-3">
              <Link
                href={`/operations/${record.slug}`}
                onClick={handleClose}
                className="px-3.5 py-1.5 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors flex items-center space-x-1"
              >
                <span>Open Full Report</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={handleClose}
                className="px-3.5 py-1.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalPortal>
  );
};
