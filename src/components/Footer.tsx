import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] py-12 px-4 sm:px-6 lg:px-8 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#111111]/20 dark:border-[#FFFFFF]/20">

          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display font-black text-lg tracking-tight text-[#111111] dark:text-[#F5F0E8] mb-2"
            >
              <span className="w-3.5 h-3.5 bg-[#FFD84D] border-2 border-[#111111] dark:border-[#FFFFFF] inline-block shadow-[1px_1px_0px_#111111]" />
              <span className="bg-[#111111] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111111] px-2 py-0.5 text-sm font-black tracking-wider uppercase">
                BHAGYASHREE
              </span>
              <span className="font-extrabold text-[#111111] dark:text-[#F5F0E8]">NAYAK K</span>
            </a>
            <p className="font-mono text-xs font-bold text-[#111111]/70 dark:text-[#F5F0E8]/70">
              Computer Science student • Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nayakbnk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 bg-[#F5F0E8] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#6EA8FE] dark:hover:bg-[#6EA8FE] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="http://linkedin.com/in/bhagyashree-nayak-k-501860300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 bg-[#F5F0E8] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#A7E86B] dark:hover:bg-[#A7E86B] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              aria-label="Email / Contact"
              className="p-2.5 bg-[#F5F0E8] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] dark:hover:text-[#FFFFFF] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Bottom Credits required by SPEC.md */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#111111] dark:text-[#F5F0E8]">
          <div>
            © 2026 BHAGYASHREE NAYAK K
          </div>

          <div className="bg-[#F5F0E8] dark:bg-[#141418] border border-[#111111] dark:border-[#FFFFFF]/30 px-3 py-1 shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000]">
            CRAFTED WITH ♡ BY BHAGYASHREE NAYAK K
          </div>
        </div>
      </div>
    </footer>
  );
};
