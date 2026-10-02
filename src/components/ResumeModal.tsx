import React, { useState } from 'react';
import { X, FileText, ArrowUpRight, Copy, Check, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = 'bhagyashreen192@gmail.com';

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-none"
    >
      <div className="relative w-full max-w-lg bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[12px_12px_0px_#111111] dark:shadow-[12px_12px_0px_#000000] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">

        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] dark:border-[#FFFFFF]/20 mb-5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#FFD84D] text-[#111111] border-2 border-[#111111]">
              <FileText className="w-5 h-5" />
            </span>
            <h3 id="resume-modal-title" className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight">
              RESUME
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 bg-[#FFFFFF] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FF6B6B] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 mb-6 text-sm">
          <div className="bg-[#FFD84D]/30 dark:bg-[#FFD84D]/15 border-2 border-[#111111] dark:border-[#FFFFFF]/40 p-4 space-y-2">
            <div className="flex items-center gap-2 font-display font-black text-base uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Bhagyashree Nayak</span>
            </div>
            <p className="font-mono text-xs font-bold opacity-80">
              Computer Science & Engineering Student • Full-Stack Developer
            </p>
            <p className="text-xs leading-relaxed">
              Actively exploring Software Engineering Internships, full-stack web and mobile development opportunities, and hackathons.
            </p>
          </div>


        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/Bhagyashree_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFD84D] text-[#111111] font-black text-xs uppercase tracking-wider border-2 border-[#111111] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>OPEN /Bhagyashree_resume.PDF</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] dark:bg-[#141418] text-[#111111] dark:text-[#F5F0E8] font-black text-xs uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#000000] hover:bg-[#6EA8FE] dark:hover:bg-[#6EA8FE] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#111111] dark:text-[#A7E86B] stroke-[3]" />
                <span>COPIED EMAIL!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
