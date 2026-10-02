import React from 'react';
import {
  ArrowUpRight,
  Mail,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative pt-6 pb-16 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Badge Sticker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] mb-6 -rotate-1 hover:rotate-0 transition-transform">
              <span className="w-2.5 h-2.5 bg-[#111111] rounded-full animate-ping" />
              <span className="w-2.5 h-2.5 bg-[#A7E86B] border border-[#111111] rounded-full -ml-4" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#111111]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tighter text-[#111111] dark:text-[#F5F0E8] uppercase mb-4">
              I BUILD THINGS{' '}
              <span className="inline-block bg-[#FFD84D] text-[#111111] px-2 py-0.5 border-2 sm:border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] mt-1 sm:mt-0">
                THAT ACTUALLY
              </span>{' '}
              WORK.
            </h1>

            {/* Supporting Text */}
            <div className="inline-block bg-[#FFFFFF] dark:bg-[#1E1E24] border-2 border-[#111111] dark:border-[#FFFFFF] px-3.5 py-1.5 shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] mb-4">
              <p className="font-mono text-sm sm:text-base font-bold text-[#111111] dark:text-[#F5F0E8]">
                Computer Science student • Full-Stack Developer
              </p>
            </div>

            {/* Short Description */}
            <p className="text-lg sm:text-xl font-medium text-[#111111]/90 dark:text-[#F5F0E8]/90 max-w-2xl mb-8 leading-relaxed">
              I build practical web and mobile applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFD84D] text-[#111111] font-black text-base uppercase tracking-wider border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111111] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onResumeClick();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] font-black text-base uppercase tracking-wider border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111111] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <FileText className="w-5 h-5 stroke-[2.5]" />
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#111111]/70 dark:text-[#F5F0E8]/70 mr-1">
                CONNECT:
              </span>

              <a
                href="https://github.com/nayakbnk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#6EA8FE] dark:hover:bg-[#6EA8FE] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="http://linkedin.com/in/bhagyashree-nayak-k-501860300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#6EA8FE] dark:hover:bg-[#6EA8FE] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                aria-label="Contact Section"
                className="p-2.5 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] dark:hover:text-[#FFFFFF] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Visual Graphic */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Background Decorative Accent Block */}
            <div className="absolute inset-0 bg-[#111111] dark:bg-[#FFD84D] translate-x-3 translate-y-3 hidden sm:block" />

            {/* Main Interactive Developer Terminal / Card */}
            <div className="relative w-full max-w-md bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#000000] sm:rotate-1 hover:rotate-0 transition-transform duration-200">

              {/* Terminal Window Header */}
              <div className="bg-[#111111] text-[#FFFFFF] px-4 py-2.5 flex items-center justify-between border-b-[3px] border-[#111111] dark:border-[#FFFFFF]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF6B6B] border border-[#FFFFFF] rounded-full inline-block" />
                  <span className="w-3 h-3 bg-[#FFD84D] border border-[#FFFFFF] rounded-full inline-block" />
                  <span className="w-3 h-3 bg-[#A7E86B] border border-[#FFFFFF] rounded-full inline-block" />

                </div>
                <div className="hidden xs:flex items-center gap-1 font-mono text-[10px] text-[#A7E86B] font-bold">
                  <span>● ONLINE</span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 sm:p-6 space-y-4">

                {/* Floating Brutalist Stickers */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="bg-[#6EA8FE] text-[#111111] font-black text-xs px-2.5 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] -rotate-2">
                    CS STUDENT
                  </span>
                  <span className="bg-[#FF6B6B] text-[#FFFFFF] font-black text-xs px-2.5 py-1 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rotate-1">
                    FULL-STACK DEVELOPER
                  </span>
                </div>

                {/* Stack Highlight Card */}
                <div className="bg-[#F5F0E8] dark:bg-[#141418] border-2 border-[#111111] dark:border-[#FFFFFF] p-3.5 shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]/70 dark:text-[#F5F0E8]/70">
                      CORE SPECIALIZATION
                    </span>
                    <span className="text-[10px] font-mono bg-[#111111] text-[#FFD84D] px-1.5 py-0.5 font-bold">
                      ACTIVE
                    </span>
                  </div>
                  <div className="font-display font-black text-base sm:text-lg text-[#111111] dark:text-[#F5F0E8] tracking-tight">
                    JAVA • REACT • NODE
                  </div>
                </div>

                {/* Terminal Code Snippet Simulation */}
                <div className="bg-[#111111] text-[#F5F0E8] font-mono text-xs sm:text-sm p-4 border-2 border-[#111111] dark:border-[#FFFFFF]/30 space-y-1.5">
                  <p className="text-[#A7E86B] font-bold">
                    <span className="text-[#FFD84D]">$</span> cat philosophy.ts
                  </p>
                  <p className="text-[#6EA8FE]">
                    const <span className="text-[#FFFFFF]">dev</span> = {'{'}
                  </p>
                  <p className="pl-4 text-[#F5F0E8]">
                    mindset: <span className="text-[#A7E86B]">'practical solutions'</span>,
                  </p>
                  <p className="pl-4 text-[#F5F0E8]">
                    code: <span className="text-[#A7E86B]">'clean & testable'</span>,
                  </p>
                  <p className="pl-4 text-[#F5F0E8]">
                    readyFor: <span className="text-[#FFD84D]">'full-stack Internships'</span>
                  </p>
                  <p className="text-[#6EA8FE]">{'}'};</p>
                </div>

                {/* Bottom Sticker & Status Bar */}
                <div className="pt-2 flex items-center justify-between border-t-2 border-[#111111]/20 dark:border-[#FFFFFF]/20">
                  <div className="inline-flex items-center gap-1.5 bg-[#A7E86B] text-[#111111] font-black text-xs px-3 py-1.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rotate-1">
                    <span>CURRENTLY BUILDING</span>
                    <span className="font-mono font-black text-sm">→</span>
                  </div>

                  <span className="font-mono text-[11px] font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70">
                    B.E CSE • 2026
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
