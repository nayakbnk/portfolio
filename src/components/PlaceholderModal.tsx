import React from 'react';
import { X, Code2 } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: {
    type: string;
    projectName: string;
  } | null;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  info
}) => {
  if (!isOpen || !info) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/80 backdrop-blur-none"
    >
      <div className="relative w-full max-w-lg bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[12px_12px_0px_#111111] dark:shadow-[12px_12px_0px_#000000] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] dark:border-[#FFFFFF]/20 mb-5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#FF6B6B] text-[#FFFFFF] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000]">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </span>
            <h3 id="project-modal-title" className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight">
              {info.projectName}
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
          <div className="bg-[#FFD84D]/30 dark:bg-[#FFD84D]/15 border-2 border-[#111111] dark:border-[#FFFFFF]/40 p-4 space-y-1.5">
            <span className="font-mono text-xs font-black uppercase text-[#111111] bg-[#FFD84D] px-2 py-0.5 border border-[#111111]">
              ACTION: {info.type.toUpperCase()}
            </span>
            <p className="font-display font-black text-base uppercase pt-1 text-[#111111] dark:text-[#FFD84D]">
              Ready for Custom URL Insertion
            </p>
            <p className="text-xs leading-relaxed opacity-90">
              This link is currently configured with a placeholder link according to the specification. You can easily plug in your live production deployment or GitHub repository link in <code className="bg-[#FFFFFF] dark:bg-[#1E1E24] px-1 py-0.5 border border-[#111111] dark:border-[#FFFFFF]/40 font-bold font-mono">src/data/projects.ts</code>.
            </p>
          </div>

          <div className="bg-[#F5F0E8] dark:bg-[#141418] border-2 border-[#111111] dark:border-[#FFFFFF]/40 p-3 text-xs font-mono space-y-1">
            <div className="font-bold">FILE LOCATION:</div>
            <div className="opacity-80">src/data/projects.ts → demoUrl / githubUrl</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 px-4 bg-[#111111] dark:bg-[#FFD84D] text-[#FFFFFF] dark:text-[#111111] font-black text-xs uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[3px_3px_0px_#FFD84D] dark:shadow-[3px_3px_0px_#000000] hover:bg-[#FFD84D] dark:hover:bg-[#FFFFFF] hover:text-[#111111] transition-all cursor-pointer"
        >
          GOT IT, CONTINUE EXPLORING
        </button>

      </div>
    </div>
  );
};
