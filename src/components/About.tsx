import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-block bg-[#FF6B6B] text-[#FFFFFF] font-black text-xs sm:text-sm px-3 py-1 border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] mb-2 uppercase tracking-widest -rotate-1">
            BACKGROUND & FOCUS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000]">
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FFD84D] border-2 border-[#111111] dark:border-[#FFFFFF]" />
                Engineering with Purpose & Pragmatism
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-[#111111]/90 dark:text-[#F5F0E8]/90 leading-relaxed font-normal">
                <p>
                  I am a <strong className="font-bold text-[#111111] dark:text-[#111111] bg-[#FFD84D] px-1">Computer Science and Engineering student</strong> with an avid passion for building full-stack applications that make a tangible difference in everyday workflows.
                </p>

                <p>
                  Rather than chasing complex abstractions for their own sake, I genuinely enjoy architecting practical software—whether that means crafting responsive, tactile web interfaces with React and TypeScript, designing resilient backend REST APIs, or writing high-performance data structures in Java.
                </p>


              </div>

              {/* Quick Philosophy Callout */}
              <div className="mt-6 pt-5 border-t-2 border-[#111111] dark:border-[#FFFFFF]/20 flex flex-wrap items-center gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#111111]/70 dark:text-[#F5F0E8]/70">
                  CORE INTERESTS:
                </span>
                <span className="bg-[#6EA8FE]/30 dark:bg-[#6EA8FE]/20 text-[#111111] dark:text-[#6EA8FE] border border-[#111111] dark:border-[#6EA8FE] px-2.5 py-1 text-xs font-bold font-mono">
                  Full-Stack Architecture
                </span>
                <span className="bg-[#A7E86B]/30 dark:bg-[#A7E86B]/20 text-[#111111] dark:text-[#A7E86B] border border-[#111111] dark:border-[#A7E86B] px-2.5 py-1 text-xs font-bold font-mono">
                  Healthcare Tech
                </span>
                <span className="bg-[#FFD84D]/40 dark:bg-[#FFD84D]/20 text-[#111111] dark:text-[#FFD84D] border border-[#111111] dark:border-[#FFD84D] px-2.5 py-1 text-xs font-bold font-mono">
                  AI Integrations
                </span>
                <span className="bg-[#FF6B6B]/30 dark:bg-[#FF6B6B]/20 text-[#111111] dark:text-[#FF6B6B] border border-[#111111] dark:border-[#FF6B6B] px-2.5 py-1 text-xs font-bold font-mono">
                  Java DSA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist 'CURRENTLY' Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFD84D] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-6 sm:p-7 shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#000000] rotate-1 hover:rotate-0 transition-transform">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-[#FF6B6B] border border-[#111111]" />
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-wider">
                    CURRENTLY
                  </h3>
                </div>
                <span className="font-mono text-xs font-black bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
                  ACTIVE SPRINTS
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-3.5">
                <li className="bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] p-3.5 shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] flex items-start gap-3">
                  <span className="p-1 bg-[#A7E86B] border border-[#111111] mt-0.5 text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-display font-black text-sm text-[#111111] dark:text-[#F5F0E8] uppercase tracking-wide">
                      Building full-stack applications
                    </h4>
                    <p className="text-xs text-[#111111]/80 dark:text-[#F5F0E8]/80 font-medium mt-0.5">
                      Creating production-grade web applications with modern modular architectures.
                    </p>
                  </div>
                </li>


                <li className="bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] p-3.5 shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] flex items-start gap-3">
                  <span className="p-1 bg-[#FFD84D] border border-[#111111] mt-0.5 text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-display font-black text-sm text-[#111111] dark:text-[#F5F0E8] uppercase tracking-wide">
                      Practicing Java DSA
                    </h4>
                    <p className="text-xs text-[#111111]/80 dark:text-[#F5F0E8]/80 font-medium mt-0.5">
                      Solving algorithm challenges, trees, graphs, and optimizing time complexity.
                    </p>
                  </div>
                </li>


              </ul>



            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
