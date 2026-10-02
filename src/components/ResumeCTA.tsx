import React from 'react';
import { FileText, ArrowUpRight, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';

interface ResumeCTAProps {
  onResumeClick: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onResumeClick }) => {
  return (
    <section
      aria-label="Resume CTA Section"
      className="py-16 sm:py-20 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#FFD84D] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[8px_8px_0px_#111111] dark:shadow-[8px_8px_0px_#000000] p-8 sm:p-12 relative overflow-hidden">



          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-[#111111]">

            {/* Left Content */}
            <div className="lg:col-span-8">


              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] uppercase tracking-tight mb-4">
                WANT THE FULL STORY?
              </h2>

              <p className="text-base sm:text-xl font-medium text-[#111111]/90 max-w-2xl leading-relaxed mb-6">
                Take a look at my resume for my education, projects, skills and experience.
              </p>

              {/* Quick Spec Highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] px-3 py-1.5 shadow-[2px_2px_0px_#111111] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#111111]" />
                  <span className="font-mono text-xs font-bold">
                    B.E CSE Student
                  </span>
                </div>
                <div className="bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] px-3 py-1.5 shadow-[2px_2px_0px_#111111] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#111111]" />
                  <span className="font-mono text-xs font-bold">
                    Open to full-stack Internships
                  </span>
                </div>
                <div className="bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] px-3 py-1.5 shadow-[2px_2px_0px_#111111] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#111111]" />
                  <span className="font-mono text-xs font-bold">
                    Full-Stack & Java DSA
                  </span>
                </div>
              </div>

              {/* Download CTA Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onResumeClick();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#111111] text-[#FFFFFF] font-black text-base uppercase tracking-wider border-2 border-[#111111] shadow-[4px_4px_0px_#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#111111] hover:shadow-[4px_4px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <FileText className="w-5 h-5 stroke-[2.5]" />
                <span>DOWNLOAD RESUME</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

            {/* Right Card Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs bg-[#FFFFFF] border-[3px] border-[#111111] p-5 shadow-[6px_6px_0px_#111111] rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] mb-4">
                  <span className="font-mono text-xs font-black uppercase text-[#111111]">
                    RESUME.PDF
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#A7E86B] border border-[#111111] rounded-full" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-[#111111] w-3/4" />
                  <div className="h-2 bg-[#111111]/30 w-full" />
                  <div className="h-2 bg-[#111111]/30 w-5/6" />
                  <div className="h-2 bg-[#111111]/30 w-2/3" />
                  <div className="pt-2">
                    <div className="h-3 bg-[#6EA8FE] w-1/2" />
                    <div className="h-2 bg-[#111111]/30 w-full mt-1.5" />
                    <div className="h-2 bg-[#111111]/30 w-4/5 mt-1" />
                  </div>
                </div>

                <div className="bg-[#F5F0E8] border border-[#111111] p-2 text-center font-mono text-[10px] font-bold text-[#111111]">
                  READY FOR REVIEW 📄
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
