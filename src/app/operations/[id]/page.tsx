import React from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  CANONICAL_OPERATIONAL_RECORDS,
  getOperationalRecord,
} from "@/data/operationsData";
import { ChevronMotif } from "@/components/ChevronMotif";
import { Button } from "@/components/Button";
import {
  ArrowLeft,
  Clock,
  FileText,
  ShieldAlert,
  UserCheck,
  AlertTriangle,
  MapPin,
  Compass,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Lock,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const rec of CANONICAL_OPERATIONAL_RECORDS) {
    params.push({ id: rec.slug });
    if (rec.id.toLowerCase() !== rec.slug.toLowerCase()) {
      params.push({ id: rec.id });
    } else if (rec.id !== rec.slug) {
      params.push({ id: rec.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const record = getOperationalRecord(id);

  if (!record) {
    return {
      title: "Operational Report Not Found | Parallax Dynamics",
    };
  }

  const pageTitle = `${record.id} — ${record.title} | Parallax Dynamics`;
  const pageDescription =
    "Parallax Dynamics discovers a concealed city beneath the Sharren ruins, where an ancient temple reconstruction becomes lethally aware of its observers.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      siteName: "Parallax Dynamics",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export default async function OperationalRecordPage({ params }: PageProps) {
  const { id } = await params;
  if (id !== id.toLowerCase()) {
    redirect(`/operations/${id.toLowerCase()}`);
  }
  const record = getOperationalRecord(id);

  if (!record) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/operations"
          className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-accent hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO OPERATIONS ARCHIVE</span>
        </Link>

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-space-darkest/90 border border-cyan-accent/30 text-cyan-accent font-mono text-xs tracking-widest uppercase">
          <span>CLASSIFIED REPORT // {record.id}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="rounded-3xl glass-panel border border-cyan-accent/30 p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 font-bold tracking-wider">
              {record.type}
            </span>
            <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold tracking-wider">
              STATUS: {record.status}
            </span>
            <span className="px-3 py-1 rounded bg-space-darkest text-slate-300 border border-white/10">
              {record.classification}
            </span>
          </div>

          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {record.title}
          </h1>

          <div className="flex items-center text-xs font-mono text-slate-300 space-x-2 pt-2">
            <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0" />
            <span>{record.detailedLocation || record.location}</span>
          </div>
        </div>

        {record.classificationFootnote && (
          <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-mono flex items-center space-x-2.5 relative z-10">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-400" />
            <span>{record.classificationFootnote}</span>
          </div>
        )}

        {/* Core Summary Callout */}
        <div className="p-6 rounded-2xl bg-space-darkest/80 border border-cyan-accent/20 relative z-10">
          <span className="font-mono text-xs text-cyan-accent uppercase tracking-widest block mb-2 font-bold">
            // EXECUTIVE BRIEFING
          </span>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-light">
            {record.summary}
          </p>
        </div>
      </div>

      {/* SECTION 1: PERSONNEL DEPLOYED */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <ChevronMotif size="sm" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            EXPEDITION PERSONNEL & ROLES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {record.personnelList.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-space-darkest/70 border border-white/10 space-y-2 hover:border-cyan-accent/40 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-orbitron font-bold text-sm sm:text-base text-white">
                  {p.name}
                </span>
                <span className="font-mono text-xs text-cyan-accent">{p.role}</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {p.duty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FULL MISSION SUMMARY */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <FileText className="w-5 h-5 text-cyan-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            MISSION SUMMARY
          </h2>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
          {record.fullMissionSummary.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* SECTION 3: OPERATIONAL TIMELINE */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <Clock className="w-5 h-5 text-cyan-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            OPERATIONAL TIMELINE
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
          <div className="space-y-6 border-l-2 border-cyan-accent/40 ml-3 pl-6">
            {record.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-accent border-2 border-space-darkest shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-cyan-accent font-bold px-2 py-0.5 rounded bg-space-darkest border border-cyan-accent/30">
                      PHASE {item.time}
                    </span>
                    {item.title && (
                      <span className="font-orbitron font-bold text-sm text-white">
                        {item.title}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NOTABLE FINDINGS */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <Compass className="w-5 h-5 text-cyan-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            NOTABLE FINDINGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {record.notableFindings.map((finding, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-space-darkest/80 border border-cyan-accent/30 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-orbitron font-bold text-lg text-white">
                  {finding.title}
                </h3>
                {finding.description && (
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {finding.description}
                  </p>
                )}
                {finding.bullets && finding.bullets.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-sans text-slate-300">
                    {finding.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-cyan-accent font-bold">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: INCIDENT REPORTS */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            INCIDENTS & RISK ASSESSMENTS
          </h2>
        </div>

        <div className="space-y-4">
          {record.incidents.map((incident, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-space-darkest/90 border border-red-500/30 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                <h3 className="font-orbitron font-bold text-base text-white">
                  {incident.title}
                </h3>
                {incident.severity && (
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                    SEVERITY: {incident.severity}
                  </span>
                )}
              </div>

              {Array.isArray(incident.details) ? (
                <div className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {incident.details.map((d, dIdx) => (
                    <p key={dIdx}>{d}</p>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {incident.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: PERSONNEL NOTES */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <UserCheck className="w-5 h-5 text-cyan-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            PERSONNEL NOTES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {record.personnelNotes.map((pn, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-space-darkest/60 border border-white/10 space-y-1.5"
            >
              <span className="font-orbitron font-bold text-sm text-cyan-accent block">
                {pn.name}
              </span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {pn.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: COMPLIANCE NOTES */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <FileCheck2 className="w-5 h-5 text-amber-400" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            COMPLIANCE NOTES
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-space-darkest/70 border border-amber-500/20 space-y-3">
          <ul className="space-y-2 text-xs font-mono text-slate-300">
            {record.complianceNotes.map((note, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 8: ANOMALOUS / SCIENTIFIC FINDINGS */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <Sparkles className="w-5 h-5 text-purple-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            ANOMALOUS & SCIENTIFIC FINDINGS
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-space-darkest/90 border border-purple-accent/30 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          {record.anomalousFindings.map((finding, idx) => (
            <p key={idx}>{finding}</p>
          ))}
        </div>
      </section>

      {/* SECTION 9: CAPTAIN'S LOG // PERSONAL ADDENDUM */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <Lock className="w-5 h-5 text-cyan-accent" />
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide">
            CAPTAIN'S LOG // PERSONAL ADDENDUM
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-b from-space-navy to-space-darkest border border-cyan-accent/30 space-y-4 shadow-xl">
          <span className="font-mono text-xs text-cyan-accent uppercase tracking-widest block font-bold">
            AUTHOR: {record.captainsLog.author}
          </span>
          <div className="space-y-3 italic text-slate-200 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-cyan-accent/50 pl-4">
            {record.captainsLog.text.map((line, idx) => (
              <p key={idx}>"{line}"</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL ASSESSMENT */}
      <section className="p-8 sm:p-12 rounded-3xl bg-space-darkest border border-cyan-accent/40 text-center space-y-6 shadow-2xl">
        <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase block font-bold">
          // FINAL CORPORATE ASSESSMENT
        </span>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white text-gradient-cyan">
          {record.finalAssessment.verdict}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-light">
          {record.finalAssessment.description}
        </p>
        <div className="inline-block px-4 py-2 rounded-lg bg-cyan-accent/15 border border-cyan-accent/40 font-orbitron font-bold text-sm text-cyan-accent tracking-widest">
          {record.finalAssessment.conclusion}
        </div>
      </section>

      {/* Back to Operations Footer Link */}
      <div className="text-center pt-8 border-t border-white/10 flex justify-center">
        <Button
          href="/operations"
          variant="outline"
          size="md"
          showArrow={false}
          className="px-8 sm:px-10 whitespace-nowrap min-w-[280px] justify-center"
        >
          <span className="flex items-center space-x-2.5">
            <ArrowLeft className="w-4 h-4 mr-1.5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Operations Archive</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
