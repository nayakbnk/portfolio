import React, { useState } from 'react';
import type { Project } from '../data/projects';
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Bot
} from 'lucide-react';


interface ProjectCardProps {
  project: Project;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);




  return (
    <article
      className="bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0px_#111111] dark:hover:shadow-[5px_5px_0px_#000000] transition-all duration-150 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Top Accent Ribbon with Project Number & Category */}
        <div
          className="px-5 py-3.5 border-b-[3px] border-[#111111] dark:border-[#FFFFFF] flex items-center justify-between text-[#111111]"
          style={{ backgroundColor: project.accentColor }}
        >
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter">
              {project.number}
            </span>
            <div className="w-0.5 h-6 bg-[#111111]" />
            <span className="font-display font-black text-xs sm:text-sm tracking-widest uppercase">
              {project.category}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#111111] text-[#FFFFFF] px-2.5 py-1 text-[11px] font-mono font-black uppercase">
            {project.type === 'mobile' ? (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#A7E86B]" />
                <span>MOBILE APP</span>
              </>
            ) : (
              <>
                <Globe className="w-3.5 h-3.5 text-[#FFD84D]" />
                <span>WEB APP</span>
              </>
            )}
          </div>
        </div>

        {/* Project Header Info */}
        <div className="p-6 sm:p-7 border-b-[3px] border-[#111111] dark:border-[#FFFFFF]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#111111] dark:bg-[#000000] text-[#FFD84D] px-2 py-0.5 text-xs font-mono font-black uppercase border border-[#111111] dark:border-[#FFFFFF]/40">
              {project.highlightBadge}
            </span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight mb-1">
            {project.title}
          </h3>

          <p className="font-mono text-xs sm:text-sm font-bold text-[#111111]/80 dark:text-[#F5F0E8]/80 uppercase tracking-wide mb-4">
            {project.subtitle}
          </p>

          <p className="text-base text-[#111111]/90 dark:text-[#F5F0E8]/90 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Visual Mockup Preview Block */}
        <div className="p-6 bg-[#F5F0E8] dark:bg-[#141418] border-b-[3px] border-[#111111] dark:border-[#FFFFFF]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-black uppercase tracking-wider text-[#111111]/80 dark:text-[#F5F0E8]/80">
              INTERFACE PREVIEW & ARCHITECTURE
            </span>
            <span className="text-[10px] font-mono bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border border-[#111111] dark:border-[#FFFFFF] px-2 py-0.5 font-bold">
              {project.previewDetails.badgeText}
            </span>
          </div>

          {/* FinTrack Visual Mockup */}
          {project.id === 'fintrack' && (
            <div className="bg-[#FFFFFF] dark:bg-[#1E1E24] border-2 border-[#111111] dark:border-[#FFFFFF] p-4 shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] dark:border-[#FFFFFF]/20 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFD84D] border border-[#111111]" />
                  <span className="font-display font-black text-xs uppercase tracking-wider text-[#111111] dark:text-[#F5F0E8]">
                    FINTRACK ANALYTICS ENGINE
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#A7E86B] text-[#111111] px-1.5 py-0.5 font-bold border border-[#111111]">
                  AI SYNC ACTIVE
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                <div className="bg-[#F5F0E8] dark:bg-[#141418] border border-[#111111] dark:border-[#FFFFFF]/30 p-2">
                  <div className="text-[10px] font-mono font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70">SPENT</div>
                  <div className="font-display font-black text-sm text-[#111111] dark:text-[#F5F0E8]">$4,280</div>
                </div>
                <div className="bg-[#F5F0E8] dark:bg-[#141418] border border-[#111111] dark:border-[#FFFFFF]/30 p-2">
                  <div className="text-[10px] font-mono font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70">BUDGET</div>
                  <div className="font-display font-black text-sm text-[#111111] dark:text-[#F5F0E8]">$5,000</div>
                </div>
                <div className="bg-[#FFD84D]/40 border border-[#111111] p-2 text-[#111111]">
                  <div className="text-[10px] font-mono font-bold">SAVED</div>
                  <div className="font-display font-black text-sm">+$720</div>
                </div>
              </div>

              {/* Budget Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-[10px] font-mono font-bold mb-1 text-[#111111] dark:text-[#F5F0E8]">
                  <span>MONTHLY THRESHOLD</span>
                  <span>85.6%</span>
                </div>
                <div className="w-full h-3 bg-[#F5F0E8] dark:bg-[#141418] border border-[#111111] dark:border-[#FFFFFF] overflow-hidden">
                  <div className="h-full bg-[#FFD84D] border-r border-[#111111] w-[85%]" />
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="bg-[#111111] text-[#FFFFFF] p-2.5 border border-[#111111] flex items-start gap-2">
                <Bot className="w-4 h-4 text-[#FFD84D] shrink-0 mt-0.5" />
                <p className="font-mono text-xs text-[#F5F0E8]">
                  <strong className="text-[#FFD84D]">Gemini Insight:</strong> Dining expenditure peaked by 14% this weekend. Projected savings remain on track!
                </p>
              </div>
            </div>
          )}




          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {project.previewDetails.metrics?.map((m) => (
              <div
                key={m.label}
                className="bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border border-[#111111] dark:border-[#FFFFFF]/40 p-2 text-center shadow-[1.5px_1.5px_0px_#111111] dark:shadow-[1.5px_1.5px_0px_#000000]"
              >
                <div className="font-mono text-[9px] font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70 uppercase">
                  {m.label}
                </div>
                <div className="font-display font-black text-xs">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="p-6 sm:p-7 border-b-[3px] border-[#111111] dark:border-[#FFFFFF]">
          <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#111111]/80 dark:text-[#F5F0E8]/80 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNOLOGY STACK</span>
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#F5F0E8] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] text-xs font-mono font-bold border-2 border-[#111111] dark:border-[#FFFFFF]/50 shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Feature List (Expandable) */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#111111]/80 dark:text-[#F5F0E8]/80 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>KEY FEATURES ({project.features.length})</span>
            </h4>

            <button
              type="button"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-xs font-mono font-black text-[#111111] dark:text-[#FFD84D] underline hover:text-[#6EA8FE] flex items-center gap-1 cursor-pointer"
            >
              <span>{showAllFeatures ? 'COLLAPSE' : 'EXPAND ALL'}</span>
              {showAllFeatures ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <ul className="space-y-2">
            {(showAllFeatures ? project.features : project.features.slice(0, 4)).map(
              (feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#111111]/90 dark:text-[#F5F0E8]/90"
                >
                  <span className="w-2 h-2 bg-[#111111] dark:bg-[#FFD84D] shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-[#FFFFFF] dark:bg-[#1B1B20] border-t-[3px] border-[#111111] dark:border-[#FFFFFF] flex flex-wrap items-center gap-3">
        {project.type === 'web' && (
          <a
            href={project.demoUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFD84D] text-[#111111] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            <span>LIVE DEMO</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        )}
      </div>
    </article >
  );
};
